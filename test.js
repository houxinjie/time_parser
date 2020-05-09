const {parseTime} = require('./lib/parseTime')
const TimeCases = [
    '00点',
    '01点',
    '9点',
    '10时',
    '11点',
    '20时',
    '23点',
    '00点00',
    '01点05分',
    '8时10分',
    '23时05',
    '12点8分',
    '23时59分',
    '12时58',
    '12时39分50',
    '05点10分51秒',
    '十点',
    '十七点',
    '二十三时',
    "零时",
    "十一时",
    "四点",
    "五时",
    "十六点",
    "八点",
    "十九点",
    "二十点",
    "一点",
    "二点",
    "两点",
    "五点十分",
    "十点五十",
    "十点零七",
    '9点半',
    "十九点二十七",
    "二十三点五十分",
    "二十三点五十分46秒",
    "零点十分零九",
    "00点三十九分五十八秒",
    "十五点05分三十九",
];

TimeCases.forEach(testCase => console.log(testCase, parseTime(testCase).toString()))

const PeriodCases = [
    '上午',
    '下午',
    '凌晨',
    '早上',
    '早晨',
    '中午',
    '傍晚',
    '晚上',
    '凌晨三点',
    '晚上6点',
    '中午12点',
    '中午一点',
    '傍晚5点',
    '下午一点二十五',
    '晚上二十三点59分五十九秒',
    '晚上6点半',
    '晚上17点半',
    "中午十一点",
]

PeriodCases.forEach(testCase => console.log(testCase, parseTime(testCase).toString()))

const CommonDateCases = [
    '前天',
    '昨天',
    '今天',
    '明天',
    '后天',
    '昨天下午5点三十六分57秒',
    '后天中午十二点',
    '前天早上',
    '今天下午两点半'
]
CommonDateCases.forEach(testCase => console.log(testCase, parseTime(testCase).toString()))

const WeekDayCases = [
    '周一',
    '上周一',
    '本周天',
    '下周二',
    '周五下午两点',
    '上周一凌晨3点50分',
    '下周五中午十二点',
    '上周日早上',
    '周四下午两点半',
    '星期一',
    '下星期五8点10分50',
    '上星期五晚上8点10分50',
    '上星期4九点50分20',
    '星期5下午两点10分三十秒',
]
WeekDayCases.forEach(testCase => console.log(testCase, parseTime(testCase).toString()))


const YearMonthDayCases = [
    '2012年10月1号',
    '2000年2月29号',
    '2020年4月24号',
    '100年2月28号',
    '400年二月二十九号下午',
    '1840年12月21日下午四点五十分二十秒',
    '4月1日凌晨3点十分',
    '5月13',
    '5号下午两点',
    "二十六号中午1点半",
    "十一月5号下午三点10分26秒",
    "二零一六年12月21号",
]
YearMonthDayCases.forEach(testCase => console.log(testCase, parseTime(testCase).toString()))


const CommonMonthCases = [
    '上月1号',
    '下个月29号',
    '本月24号',
    '下月28号',
    '上个月二十九号下午',
    '这个月21日下午四点五十分二十秒',
    '上月1日凌晨3点十分',
    '本月13',
    "下个月5号下午三点10分26秒",
    "上个月21号",
]
CommonMonthCases.forEach(testCase => console.log(testCase, parseTime(testCase).toString()))

const CommonYearCases = [
    '前年10月1号',
    '去年2月28号',
    '后年4月24号',
    '明年2月28号',
    '今年二月二十九号下午',
    '去年12月21日下午四点五十分二十秒',
    "明年10月21号",
]
CommonYearCases.forEach(testCase => console.log(testCase, parseTime(testCase).toString()))
const FestivalCases = [
    '前年元旦',
    '2025年元旦',
    '植树节',
    '劳动节',
    '儿童节',
    '教师节',
    '国庆节',
    '圣诞节',
    '父亲节',
    '母亲节',
    '感恩节',
    '2021年父亲节',
    '2021年母亲节',
    '2021年感恩节',
    '清明节',
    '复活节',
    '春节',
    '元宵节',
    '端午节',
    '中秋节',
    '重阳节',
    '复活节',
    '明年复活节',
    '后年复活节',
    '去年复活节',
    '前年复活节',
    '1983年复活节',
    '2008年复活节',
    '去年圣诞节下午两点半',
    '去年春节凌晨1点30分五十九秒',
    '情人节',
    '妇女节',
    '愚人节',
    '青年节',
    '护士节',
    '建党节',
    '建军节',
    '平安夜',
]
FestivalCases.forEach(testCase => console.log(testCase, parseTime(testCase).toString()))

const YearOrMonthCases = [
    '前年',
    '去年',
    '今年',
    '明年',
    '后年',
    '上个月',
    '这个月',
    '下个月',
    '2019年',
    '二零二八年',
    '2018年十二月',
    '5月',
    '十一月',
    '明年12月',
]
YearOrMonthCases.forEach(testCase => console.log(testCase, parseTime(testCase).toString()))