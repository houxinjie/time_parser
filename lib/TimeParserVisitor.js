const {TimeVisitor} = require('./Time/TimeVisitor')
const {calendar} = require('./calendar')
const {
    parseChineseNumber,
    Period,
    CommonDate,
    CommonYear,
    verifyDate,
    verifyYear,
    verifyMonth,
    Festival,
    isLeapYear,
    getEaster
} = require('./util')

function TimeParserVisitor() {
    TimeVisitor.call(this)
    this.originTime = new Date()
    this.period = ''
    this.hasHour = false
    this.originTime.setHours(0)
    this.originTime.setMinutes(0)
    this.originTime.setSeconds(0)
    this.originTime.setMilliseconds(0)
	return this
}

TimeParserVisitor.prototype = Object.create(TimeVisitor.prototype)
TimeParserVisitor.prototype.constructor = TimeParserVisitor

TimeParserVisitor.prototype.visitExpr = function(ctx) {
    this.visitChildren(ctx)
    return this.originTime
}

TimeParserVisitor.prototype.visitTimeExpr = function(ctx) {
    this.visitChildren(ctx)
    if(this.period){
        const periodConf = Period[this.period]
        if(!this.hasHour){
            this.originTime.setHours(periodConf.anchor)
        }else{
            const currentHour = this.originTime.getHours()
            if(currentHour >= periodConf.range[0] && currentHour <= periodConf.range[1]){
                this.originTime.setHours(currentHour + periodConf.base)
            }else if(periodConf.extraRange.length && currentHour >= periodConf.extraRange[0] && currentHour <= periodConf.extraRange[1]){
                //this.originTime.setHours(periodConf.)
            }else{
                throw new Error('Invalid Time')
            }
        }
    }

    return this.originTime
}

TimeParserVisitor.prototype.visitTime = function(ctx) {
    this.visitChildren(ctx)
    return this.originTime
}

TimeParserVisitor.prototype.visitHourMinuteSecond = function(ctx) {

    let minute = 0, second = 0

    const minuteText = ctx.children[1].getText()
    minute = parseInt(minuteText, 10)
    if(isNaN(minute)){
        minute = parseChineseNumber(minuteText)
    }
    
    const secondText = ctx.children[3].getText()
    second = parseInt(secondText, 10)
    if(isNaN(second)){
        second = parseChineseNumber(secondText)
    }

    if(minute > 59 || second > 59) {
        throw new Error('Invalid Time')
    }

    this.originTime.setMinutes(minute)
    this.originTime.setSeconds(second)

    this.visitChildren(ctx)
    return this.originTime
}
  
  
TimeParserVisitor.prototype.visitHourMinute = function(ctx) {
    let minute = 0
    if(ctx.DIGITS()){
        minute = parseInt(ctx.DIGITS().getText(), 10)

    }else if(ctx.CHINESE_NUMBER()){
        minute = parseChineseNumber(ctx.CHINESE_NUMBER().getText(), 10)
    }else if(ctx.CHINESE_BAN()){
        minute = 30
    }
    if(minute > 59) {
        throw new Error('Invalid Time')
    }
    this.originTime.setMinutes(minute)
    this.visitChildren(ctx)
    return this.originTime
}


TimeParserVisitor.prototype.visitHour = function(ctx) {
    let hour = 0
    if(ctx.DIGITS()){
        hour = parseInt(ctx.DIGITS().getText(), 10)

    }else if(ctx.CHINESE_NUMBER()){
        hour = parseChineseNumber(ctx.CHINESE_NUMBER().getText())
    }
    if(hour > 23) {
        throw new Error('Invalid Time')
    }
    this.originTime.setHours(hour)
    this.visitChildren(ctx)
    this.hasHour = true
    return this.originTime
}


TimeParserVisitor.prototype.visitPeriod = function(ctx) {
    this.visitChildren(ctx)
    this.period = ctx.getText()
    return this.originTime
}

TimeParserVisitor.prototype.visitCommonDate = function(ctx) {
    this.visitChildren(ctx);
    const date = this.originTime.getDate()
    this.originTime.setDate(date + CommonDate[ctx.getText()])
    return this.originTime
}

TimeParserVisitor.prototype.visitWeekDay = function(ctx) {
    this.visitChildren(ctx)
    let increament = 0
    if(ctx.COMMON_PREFIX()){
        let weekPrefix = ctx.COMMON_PREFIX().getText()
        if(weekPrefix === '上'){
            increament -= 7
        }else if(weekPrefix === '下'){
            increament += 7
        }
    }
    increament -= this.originTime.getDay()
    let weekDay = 0
    if(ctx.CHINESE_NUMBER()){
        weekDay = parseChineseNumber(ctx.CHINESE_NUMBER().getText())
    }else if(ctx.DIGITS()){
        weekDay = parseInt(ctx.DIGITS().getText(), 10)
    }else if(ctx.CHINESE_RI() || ctx.CHINESE_TIAN()){
        weekDay = 7
    }
    
    if(weekDay < 1 || weekDay > 7){
        throw new Error('Invalid Time')
    }
    increament += weekDay
    this.originTime.setDate(this.originTime.getDate() + increament)
    return this.originTime
}

TimeParserVisitor.prototype.visitYear = function(ctx) {
    this.visitChildren(ctx);
    let year = 0
    if(ctx.DIGITS()){
        year = parseInt(ctx.DIGITS().getText(), 10)
    }else if(ctx.CHINESE_NUMBER()){
        year = parseChineseNumber(ctx.CHINESE_NUMBER().getText())
    }
    verifyYear(year)
    this.originTime.setFullYear(year)
    this.originTime.setMonth(0)
    this.originTime.setDate(1)
    return this.originTime
}

TimeParserVisitor.prototype.visitMonth = function(ctx) {
    this.visitChildren(ctx);
    let month = 0
    if(ctx.DIGITS()){
        month = parseInt(ctx.DIGITS().getText(), 10)
    }else if(ctx.CHINESE_NUMBER()){
        month = parseChineseNumber(ctx.CHINESE_NUMBER().getText())
    }
    verifyMonth(month)
    this.originTime.setMonth(month-1)
    this.originTime.setDate(1)
    return this.originTime
}

TimeParserVisitor.prototype.visitFullDate = function(ctx) {
    this.visitChildren(ctx)
    let date = 0
    if(ctx.DIGITS()){
        date = parseInt(ctx.DIGITS().getText(), 10)
    }else if(ctx.CHINESE_NUMBER()){
        date = parseChineseNumber(ctx.CHINESE_NUMBER().getText())
    }
    verifyDate(this.originTime.getFullYear(), this.originTime.getMonth() + 1, date)
    this.originTime.setDate(date)
    return this.originTime
}

TimeParserVisitor.prototype.visitSimpleDate = function(ctx) {
    this.visitChildren(ctx);
    let date = 0
    if(ctx.DIGITS()){
        date = parseInt(ctx.DIGITS().getText(), 10)
    }else if(ctx.CHINESE_NUMBER()){
        date = parseChineseNumber(ctx.CHINESE_NUMBER().getText())
    }
    verifyDate(this.originTime.getFullYear(), this.originTime.getMonth() + 1, date)
    this.originTime.setDate(date)
    return this.originTime
};

TimeParserVisitor.prototype.visitCommonMonth = function(ctx) {
    const prefix = ctx.COMMON_PREFIX().getText()
    let increament = {'上': -1, '下': 1, '本': 0, '这': 0}[prefix]
    this.originTime.setMonth(this.originTime.getMonth() + increament)
    this.originTime.setDate(1)
    return this.originTime

};

TimeParserVisitor.prototype.visitCommonYear = function(ctx) {
    this.visitChildren(ctx);
    const year = this.originTime.getFullYear()
    this.originTime.setFullYear(year + CommonYear[ctx.getText()])
    this.originTime.setMonth(0)
    this.originTime.setDate(1)
    return this.originTime
}

TimeParserVisitor.prototype.visitFestival = function(ctx) {
    this.visitChildren(ctx)
    const festival = ctx.getText()
    if(Festival.regular[festival]){
        this.originTime.setMonth(Festival.regular[festival].month - 1)
        this.originTime.setDate(Festival.regular[festival].date)
    }else if(Festival.week[festival]){
        const festivalConf = Festival.week[festival]
        this.originTime.setMonth(festivalConf.month - 1)
        this.originTime.setDate(festivalConf.startDate)
        this.originTime.setDate(festivalConf.day - this.originTime.getDay() + festivalConf.serial * 7 + festivalConf.startDate)
    }else if(festival === '清明节'){
        this.originTime.setMonth(3)
        const year = this.originTime.getFullYear()
        if(isLeapYear(year) || isLeapYear(year-1)){
            this.originTime.setDate(4)
        }else{
            this.originTime.setDate(5)
        }
    }else if(festival === '复活节'){
        const {month, date} = getEaster(this.originTime.getFullYear())
        this.originTime.setMonth(month-1)
        this.originTime.setDate(date)
    }else if(Festival.lunar[festival]){
        const lunar = Festival.lunar[festival]
        const solar = calendar.lunar2solar(this.originTime.getFullYear(), lunar.month, lunar.date)
        this.originTime.setMonth(solar.cMonth - 1)
        this.originTime.setDate(solar.cDay)
    }3
    return this.originTime
}
  

exports.TimeParserVisitor = TimeParserVisitor