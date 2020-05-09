grammar Time;		

expr : timeExpr EOF;

timeExpr : time | period | (period time) | date | (date period time) | (date time) | (date period) | yearOrMonth;

time : hourMinuteSecond | hourMinute | hour;

hourMinuteSecond: hour (DIGITS | CHINESE_NUMBER) CHINESE_FEN (DIGITS | CHINESE_NUMBER) CHINESE_MIAO?;

hourMinute: hour (((DIGITS | CHINESE_NUMBER) CHINESE_FEN?) | CHINESE_BAN);

hour: (DIGITS | CHINESE_NUMBER)  (CHINESE_DIAN | CHINESE_SHI);

period
    : '\u4e0a\u5348' //上午
    | '\u4e0b\u5348' //下午
    | '\u51cc\u6668' //凌晨
    | '\u65e9\u4e0a' //早上
    | '\u65e9\u6668' //早晨
    | '\u4e2d\u5348' //中午
    | '\u508d\u665a' //傍晚
    | '\u665a\u4e0a' //晚上
    ;

date: commonDate | weekDay | yearMonthDate  | fullDate | (commonMonth simpleDate) | (commonYear month simpleDate) | ((year | commonYear)? festival);

yearOrMonth: commonMonth | (commonYear month) | commonYear | (year? month) | year;

commonDate
    : '\u524d\u5929' //前天
    | '\u6628\u5929' //昨天
    | '\u4eca\u5929' //今天
    | '\u660e\u5929' //明天
    | '\u540e\u5929' //后天
    ;

weekDay: COMMON_PREFIX? WEEK_MIDDLE (DIGITS | CHINESE_NUMBER | CHINESE_RI | CHINESE_TIAN );

yearMonthDate:  year? month simpleDate;

year: (DIGITS | CHINESE_NUMBER) CHINESE_NIAN;

month: (DIGITS | CHINESE_NUMBER) CHINESE_YUE;

simpleDate: (DIGITS | CHINESE_NUMBER) (CHINESE_RI | CHINESE_HAO)?;

fullDate: (DIGITS | CHINESE_NUMBER) (CHINESE_RI | CHINESE_HAO) ;

commonMonth: COMMON_PREFIX CHINESE_GE? CHINESE_YUE;

commonYear: 
    '\u524d\u5e74' //前年
    | '\u53bb\u5e74' //去年
    | '\u4eca\u5e74' //今年
    | '\u660e\u5e74' //明年
    | '\u540e\u5e74'; //后年


festival
    : '\u5143\u65e6' //元旦
    | '\u60c5\u4eba\u8282' //情人节
    | '\u5987\u5973\u8282' //妇女节
    | '\u690d\u6811\u8282' //植树节
    | '\u611a\u4eba\u8282' //愚人节
    | '\u52b3\u52a8\u8282' //劳动节
    | '\u9752\u5e74\u8282' //青年节
    | '\u62a4\u58eb\u8282' //护士节
    | '\u513f\u7ae5\u8282' //儿童节
    | '\u5efa\u515a\u8282' //建党节
    | '\u5efa\u519b\u8282' //建军节
    | '\u6559\u5e08\u8282' //教师节
    | '\u56fd\u5e86\u8282' //国庆节 
    | '\u5e73\u5B89\u591c' //平安夜
    | '\u5723\u8bde\u8282' //圣诞节
    | '\u7236\u4eb2\u8282' //父亲节
    | '\u6bcd\u4eb2\u8282' //母亲节
    | '\u611f\u6069\u8282' //感恩节
    | '\u6e05\u660e\u8282' //清明节
    | '\u590d\u6D3b\u8282' //复活节
    | '\u6625\u8282' //春节
    | '\u5143\u5BB5\u8282' //元宵节
    | '\u7aef\u5348\u8282' //端午节
    | '\u4e2d\u79cb\u8282' //中秋节
    | '\u91cd\u9633\u8282' //重阳节
    ;

COMMON_PREFIX: CHINESE_SHANG | CHINESE_ZHE | CHINESE_BEN | CHINESE_XIA;
WEEK_MIDDLE: CHINESE_XINGQI | CHINESE_ZHOU;



CHINESE_NUMBER: (((CHINESE_ONE | CHINESE_TWO | CHINESE_THREE | CHINESE_FOUR | CHINESE_FIVE | CHINESE_SIX | CHINESE_SEVEN | CHINESE_EIGHT | CHINESE_NINE)? CHINESE_TEN (CHINESE_ONE | CHINESE_TWO | CHINESE_THREE | CHINESE_FOUR | CHINESE_FIVE | CHINESE_SIX | CHINESE_SEVEN | CHINESE_EIGHT | CHINESE_NINE)?) | (CHINESE_ZERO? (CHINESE_ZERO | CHINESE_ONE | CHINESE_LIANG | CHINESE_TWO | CHINESE_THREE | CHINESE_FOUR | CHINESE_FIVE | CHINESE_SIX | CHINESE_SEVEN | CHINESE_EIGHT | CHINESE_NINE ))) |  ((CHINESE_ZERO | CHINESE_ONE | CHINESE_TWO | CHINESE_THREE | CHINESE_FOUR | CHINESE_FIVE | CHINESE_SIX | CHINESE_SEVEN | CHINESE_EIGHT | CHINESE_NINE )+);



DIGITS:  DIGIT+;
fragment DIGIT: [0-9];

CHINESE_FEN: '\u5206'; //分
CHINESE_DIAN: '\u70b9'; //点
CHINESE_SHI: '\u65f6'; //时
CHINESE_MIAO: '\u79d2'; //秒
CHINESE_BAN: '\u534a'; //半
CHINESE_NIAN: '\u5e74'; //年
CHINESE_YUE: '\u6708'; //月
CHINESE_HAO: '\u53F7'; //号
CHINESE_RI: '\u65e5'; //日
CHINESE_TIAN: '\u5929'; //天
CHINESE_GE: '\u4e2a'; //个

fragment CHINESE_SHANG: '\u4e0a'; //上 
fragment CHINESE_ZHE: '\u8fd9'; //这 
fragment CHINESE_BEN: '\u672c'; //本
fragment CHINESE_XIA: '\u4e0b'; //下
fragment CHINESE_XINGQI: '\u661f\u671f'; //星期
fragment CHINESE_ZHOU: '\u5468'; //周

fragment CHINESE_ONE: '\u4e00'; //一
fragment CHINESE_TWO: '\u4e8c'; //二
fragment CHINESE_THREE: '\u4e09'; //三
fragment CHINESE_FOUR: '\u56db'; //四
fragment CHINESE_FIVE: '\u4e94'; //五
fragment CHINESE_SIX: '\u516d'; //六
fragment CHINESE_SEVEN: '\u4e03'; //七
fragment CHINESE_EIGHT: '\u516b'; //八
fragment CHINESE_NINE: '\u4e5d'; //九
fragment CHINESE_ZERO: '\u96f6'; //零
fragment CHINESE_TEN: '\u5341'; //十
fragment CHINESE_LIANG: '\u4e24'; //两