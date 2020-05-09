const chinese2Digital = {
    "零": 0,
    "一": 1,
    "二": 2,
    "三": 3,
    "四": 4,
    "五": 5,
    "六": 6,
    "七": 7,
    "八": 8,
    "九": 9,
    "两": 2,
    "十": 10,
    "日": 7,
    "天": 7,
}
const parseChineseNumber = chinese => {
    let base = 0

    if(chinese.includes('十')){
        if(chinese[0] === '零'){
            if(chinese[1]){
                base += chinese2Digital[chinese[1]]
            }
        }else if(chinese[0] === '十'){
            base += 10
            if(chinese[1]){
                base += chinese2Digital[chinese[1]]
            }
        }else{
            base += chinese2Digital[chinese[0]]
            if(chinese[1]){
                if(chinese[1] === '十'){
                    base *= 10
                    if(chinese[2]){
                        base += chinese2Digital[chinese[2]]
                    }
                }else{
                    throw new Error('Invalid Number')
                }
            }
            
        }
    }else{
        base += chinese2Digital[chinese[0]]
        for(let i = 1; i < chinese.length; i++){
            base = base * 10 + chinese2Digital[chinese[i]]
        }
    }

    return base

}

const Period = {
    '凌晨': {
        anchor: 0,
        range: [0, 6],
        extraRange: [],
        base: 0,
    },
    '上午': {
        anchor: 8,
        range: [0, 12],
        extraRange: [],
        base: 0,
    },
    '早上': {
        anchor: 8,
        range: [0, 12],
        extraRange: [],
        base: 0,
    },
    '早晨': {
        anchor: 8,
        range: [0, 12],
        extraRange: [],
        base: 0,
    },
    '中午': {
        anchor: 12,
        range: [1, 2],
        extraRange: [11, 12],
        base: 12,
    },
    '下午': {
        anchor: 14,
        range: [1, 6],
        extraRange: [],
        base: 12,
    },
    '傍晚': {
        anchor: 18,
        range: [5, 9],
        extraRange: [],
        base: 12,
    },
    '晚上': {
        anchor: 19,
        range: [6, 11],
        extraRange: [17, 23],
        base: 12,
    }
}

const CommonDate = {
    '前天': -2,
    '昨天': -1,
    '今天': 0,
    '明天': 1,
    '后天': 2,
}

const CommonYear = {
    '前年': -2,
    '去年': -1,
    '今年': 0,
    '明年': 1,
    '后年': 2,
}

const verifyYear = year => {
    if(year < 0) throw new Error('Invalid Time')
}

const verifyMonth = month => {
    if(month < 1 || month > 12) throw new Error('Invalid Time')
}

const verifyDate = (year, month, day) => {
    verifyYear(year)
    verifyMonth(month)
    if(day > 31) throw new Error('Invalid Time')
    if(day === 31 && ![1, 3, 5, 7, 8, 10, 12].includes(month)) throw new Error('Invalid Time')
    if(month === 2 && day > 29) throw new Error('Invalid Time')
    if(month === 2 && day === 29){
        if(!isLeapYear(year)) throw new Error('Invalid Time') 
    }

}

const isLeapYear = year => {
    return !(year % 4 || (!(year % 100) && (year % 400)))
}

const Festival = {
    regular: {
        '元旦': {
            month: 1,
            date: 1,
        },
        '情人节': {
            month: 2,
            date: 14,
        },
        '妇女节': {
            month: 3,
            date: 8,
        },
        '植树节': {
            month: 3,
            date: 12,
        },
        '愚人节': {
            month: 4, 
            date: 1,
        },
        '劳动节': {
            month: 5, 
            date: 1,
        },
        '青年节': {
            month: 5, 
            date: 4,
        },
        '护士节': {
            month: 5, 
            date: 12,
        },
        '儿童节': {
            month: 6,
            date: 1,
        },
        '建党节': {
            month: 7,
            date: 1,
        },
        '建军节': {
            month: 8,
            date: 1,
        },
        '教师节': {
            month: 9,
            date: 10,
        },
        '国庆节': {
            month: 10,
            date: 1,
        },
        '平安夜': {
            month: 12,
            date: 24,
        },
        '圣诞节': {
            month: 12,
            date: 25,
        },
    },
    week: {
        '父亲节': {
            month: 6,
            startDate: 1,
            serial: 2,
            day: 7,
        },
        '母亲节': {
            month: 5,
            startDate: 1,
            serial: 1,
            day: 7,
        },
        '感恩节': {
            month: 11,
            startDate: 30,
            serial: -1,
            day: 4,
        },
    },
    lunar: {
        '春节': {
            month: 1,
            date: 1,
        },
        '元宵节': {
            month: 1,
            date: 15,
        },
        '端午节': {
            month: 5,
            date: 5,
        },
        '中秋节': {
            month: 8,
            date: 15,
        },
        '重阳节': {
            month: 9,
            date: 9,
        },
    },
    
}

const getEaster = year => {
    let date, month
    const N = year - 1900
    const A = N % 19
    const Q = Math.floor(N / 4)
    const B = Math.floor((7 * A + 1) / 19)
    const M = (11 * A + 4 - B) % 29
    const W = (N + Q + 31 - M) % 7
    date = 25 - M - W
    if (date > 0) {
        month = 4
    }
    else if (date == 0) {
        month = 3
        date = 31
    }
    else {
        month = 3
        date += 31
    }
    return {month, date}
}

exports.parseChineseNumber = parseChineseNumber
exports.Period = Period
exports.CommonDate = CommonDate
exports.CommonYear = CommonYear
exports.verifyDate = verifyDate
exports.verifyYear = verifyYear
exports.verifyMonth = verifyMonth
exports.Festival = Festival
exports.isLeapYear = isLeapYear
exports.getEaster = getEaster