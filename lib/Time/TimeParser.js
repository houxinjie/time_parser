// Generated from Time.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var TimeVisitor = require('./TimeVisitor').TimeVisitor;

var grammarFileName = "Time.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003<\u009b\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0005\u0003=\n\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0005\u0004B\n\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0005\u0005I\n\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0005\u0006N\n\u0006\u0003\u0006\u0005\u0006Q\n\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0005\te\n\t\u0003\t\u0005\th\n\t\u0003\n\u0003\n",
    "\u0003\n\u0003\n\u0003\n\u0003\n\u0005\np\n\n\u0003\n\u0003\n\u0005",
    "\nt\n\n\u0003\u000b\u0003\u000b\u0003\f\u0005\fy\n\f\u0003\f\u0003\f",
    "\u0003\f\u0003\r\u0005\r\u007f\n\r\u0003\r\u0003\r\u0003\r\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010",
    "\u0003\u0010\u0005\u0010\u008c\n\u0010\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0012\u0003\u0012\u0005\u0012\u0093\n\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0002\u0002\u0015\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016",
    "\u0018\u001a\u001c\u001e \"$&\u0002\n\u0003\u000201\u0003\u000234\u0003",
    "\u0002\u0003\n\u0003\u0002\u000b\u000f\u0004\u000201:;\u0003\u00029",
    ":\u0003\u0002\u0010\u0014\u0003\u0002\u0015-\u0002\u00a4\u0002(\u0003",
    "\u0002\u0002\u0002\u0004<\u0003\u0002\u0002\u0002\u0006A\u0003\u0002",
    "\u0002\u0002\bC\u0003\u0002\u0002\u0002\nJ\u0003\u0002\u0002\u0002\f",
    "R\u0003\u0002\u0002\u0002\u000eU\u0003\u0002\u0002\u0002\u0010g\u0003",
    "\u0002\u0002\u0002\u0012s\u0003\u0002\u0002\u0002\u0014u\u0003\u0002",
    "\u0002\u0002\u0016x\u0003\u0002\u0002\u0002\u0018~\u0003\u0002\u0002",
    "\u0002\u001a\u0083\u0003\u0002\u0002\u0002\u001c\u0086\u0003\u0002\u0002",
    "\u0002\u001e\u0089\u0003\u0002\u0002\u0002 \u008d\u0003\u0002\u0002",
    "\u0002\"\u0090\u0003\u0002\u0002\u0002$\u0096\u0003\u0002\u0002\u0002",
    "&\u0098\u0003\u0002\u0002\u0002()\u0005\u0004\u0003\u0002)*\u0007\u0002",
    "\u0002\u0003*\u0003\u0003\u0002\u0002\u0002+=\u0005\u0006\u0004\u0002",
    ",=\u0005\u000e\b\u0002-.\u0005\u000e\b\u0002./\u0005\u0006\u0004\u0002",
    "/=\u0003\u0002\u0002\u00020=\u0005\u0010\t\u000212\u0005\u0010\t\u0002",
    "23\u0005\u000e\b\u000234\u0005\u0006\u0004\u00024=\u0003\u0002\u0002",
    "\u000256\u0005\u0010\t\u000267\u0005\u0006\u0004\u00027=\u0003\u0002",
    "\u0002\u000289\u0005\u0010\t\u00029:\u0005\u000e\b\u0002:=\u0003\u0002",
    "\u0002\u0002;=\u0005\u0012\n\u0002<+\u0003\u0002\u0002\u0002<,\u0003",
    "\u0002\u0002\u0002<-\u0003\u0002\u0002\u0002<0\u0003\u0002\u0002\u0002",
    "<1\u0003\u0002\u0002\u0002<5\u0003\u0002\u0002\u0002<8\u0003\u0002\u0002",
    "\u0002<;\u0003\u0002\u0002\u0002=\u0005\u0003\u0002\u0002\u0002>B\u0005",
    "\b\u0005\u0002?B\u0005\n\u0006\u0002@B\u0005\f\u0007\u0002A>\u0003\u0002",
    "\u0002\u0002A?\u0003\u0002\u0002\u0002A@\u0003\u0002\u0002\u0002B\u0007",
    "\u0003\u0002\u0002\u0002CD\u0005\f\u0007\u0002DE\t\u0002\u0002\u0002",
    "EF\u00072\u0002\u0002FH\t\u0002\u0002\u0002GI\u00075\u0002\u0002HG\u0003",
    "\u0002\u0002\u0002HI\u0003\u0002\u0002\u0002I\t\u0003\u0002\u0002\u0002",
    "JP\u0005\f\u0007\u0002KM\t\u0002\u0002\u0002LN\u00072\u0002\u0002ML",
    "\u0003\u0002\u0002\u0002MN\u0003\u0002\u0002\u0002NQ\u0003\u0002\u0002",
    "\u0002OQ\u00076\u0002\u0002PK\u0003\u0002\u0002\u0002PO\u0003\u0002",
    "\u0002\u0002Q\u000b\u0003\u0002\u0002\u0002RS\t\u0002\u0002\u0002ST",
    "\t\u0003\u0002\u0002T\r\u0003\u0002\u0002\u0002UV\t\u0004\u0002\u0002",
    "V\u000f\u0003\u0002\u0002\u0002Wh\u0005\u0014\u000b\u0002Xh\u0005\u0016",
    "\f\u0002Yh\u0005\u0018\r\u0002Zh\u0005 \u0011\u0002[\\\u0005\"\u0012",
    "\u0002\\]\u0005\u001e\u0010\u0002]h\u0003\u0002\u0002\u0002^_\u0005",
    "$\u0013\u0002_`\u0005\u001c\u000f\u0002`a\u0005\u001e\u0010\u0002ah",
    "\u0003\u0002\u0002\u0002be\u0005\u001a\u000e\u0002ce\u0005$\u0013\u0002",
    "db\u0003\u0002\u0002\u0002dc\u0003\u0002\u0002\u0002de\u0003\u0002\u0002",
    "\u0002ef\u0003\u0002\u0002\u0002fh\u0005&\u0014\u0002gW\u0003\u0002",
    "\u0002\u0002gX\u0003\u0002\u0002\u0002gY\u0003\u0002\u0002\u0002gZ\u0003",
    "\u0002\u0002\u0002g[\u0003\u0002\u0002\u0002g^\u0003\u0002\u0002\u0002",
    "gd\u0003\u0002\u0002\u0002h\u0011\u0003\u0002\u0002\u0002it\u0005\"",
    "\u0012\u0002jk\u0005$\u0013\u0002kl\u0005\u001c\u000f\u0002lt\u0003",
    "\u0002\u0002\u0002mt\u0005$\u0013\u0002np\u0005\u001a\u000e\u0002on",
    "\u0003\u0002\u0002\u0002op\u0003\u0002\u0002\u0002pq\u0003\u0002\u0002",
    "\u0002qt\u0005\u001c\u000f\u0002rt\u0005\u001a\u000e\u0002si\u0003\u0002",
    "\u0002\u0002sj\u0003\u0002\u0002\u0002sm\u0003\u0002\u0002\u0002so\u0003",
    "\u0002\u0002\u0002sr\u0003\u0002\u0002\u0002t\u0013\u0003\u0002\u0002",
    "\u0002uv\t\u0005\u0002\u0002v\u0015\u0003\u0002\u0002\u0002wy\u0007",
    ".\u0002\u0002xw\u0003\u0002\u0002\u0002xy\u0003\u0002\u0002\u0002yz",
    "\u0003\u0002\u0002\u0002z{\u0007/\u0002\u0002{|\t\u0006\u0002\u0002",
    "|\u0017\u0003\u0002\u0002\u0002}\u007f\u0005\u001a\u000e\u0002~}\u0003",
    "\u0002\u0002\u0002~\u007f\u0003\u0002\u0002\u0002\u007f\u0080\u0003",
    "\u0002\u0002\u0002\u0080\u0081\u0005\u001c\u000f\u0002\u0081\u0082\u0005",
    "\u001e\u0010\u0002\u0082\u0019\u0003\u0002\u0002\u0002\u0083\u0084\t",
    "\u0002\u0002\u0002\u0084\u0085\u00077\u0002\u0002\u0085\u001b\u0003",
    "\u0002\u0002\u0002\u0086\u0087\t\u0002\u0002\u0002\u0087\u0088\u0007",
    "8\u0002\u0002\u0088\u001d\u0003\u0002\u0002\u0002\u0089\u008b\t\u0002",
    "\u0002\u0002\u008a\u008c\t\u0007\u0002\u0002\u008b\u008a\u0003\u0002",
    "\u0002\u0002\u008b\u008c\u0003\u0002\u0002\u0002\u008c\u001f\u0003\u0002",
    "\u0002\u0002\u008d\u008e\t\u0002\u0002\u0002\u008e\u008f\t\u0007\u0002",
    "\u0002\u008f!\u0003\u0002\u0002\u0002\u0090\u0092\u0007.\u0002\u0002",
    "\u0091\u0093\u0007<\u0002\u0002\u0092\u0091\u0003\u0002\u0002\u0002",
    "\u0092\u0093\u0003\u0002\u0002\u0002\u0093\u0094\u0003\u0002\u0002\u0002",
    "\u0094\u0095\u00078\u0002\u0002\u0095#\u0003\u0002\u0002\u0002\u0096",
    "\u0097\t\b\u0002\u0002\u0097%\u0003\u0002\u0002\u0002\u0098\u0099\t",
    "\t\u0002\u0002\u0099\'\u0003\u0002\u0002\u0002\u000f<AHMPdgosx~\u008b",
    "\u0092"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'\u4E0A\u5348'", "'\u4E0B\u5348'", "'\u51CC\u6668'", 
                     "'\u65E9\u4E0A'", "'\u65E9\u6668'", "'\u4E2D\u5348'", 
                     "'\u508D\u665A'", "'\u665A\u4E0A'", "'\u524D\u5929'", 
                     "'\u6628\u5929'", "'\u4ECA\u5929'", "'\u660E\u5929'", 
                     "'\u540E\u5929'", "'\u524D\u5E74'", "'\u53BB\u5E74'", 
                     "'\u4ECA\u5E74'", "'\u660E\u5E74'", "'\u540E\u5E74'", 
                     "'\u5143\u65E6'", "'\u60C5\u4EBA\u8282'", "'\u5987\u5973\u8282'", 
                     "'\u690D\u6811\u8282'", "'\u611A\u4EBA\u8282'", "'\u52B3\u52A8\u8282'", 
                     "'\u9752\u5E74\u8282'", "'\u62A4\u58EB\u8282'", "'\u513F\u7AE5\u8282'", 
                     "'\u5EFA\u515A\u8282'", "'\u5EFA\u519B\u8282'", "'\u6559\u5E08\u8282'", 
                     "'\u56FD\u5E86\u8282'", "'\u5E73\u5B89\u591C'", "'\u5723\u8BDE\u8282'", 
                     "'\u7236\u4EB2\u8282'", "'\u6BCD\u4EB2\u8282'", "'\u611F\u6069\u8282'", 
                     "'\u6E05\u660E\u8282'", "'\u590D\u6D3B\u8282'", "'\u6625\u8282'", 
                     "'\u5143\u5BB5\u8282'", "'\u7AEF\u5348\u8282'", "'\u4E2D\u79CB\u8282'", 
                     "'\u91CD\u9633\u8282'", null, null, null, null, "'\u5206'", 
                     "'\u70B9'", "'\u65F6'", "'\u79D2'", "'\u534A'", "'\u5E74'", 
                     "'\u6708'", "'\u53F7'", "'\u65E5'", "'\u5929'", "'\u4E2A'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, "COMMON_PREFIX", 
                      "WEEK_MIDDLE", "CHINESE_NUMBER", "DIGITS", "CHINESE_FEN", 
                      "CHINESE_DIAN", "CHINESE_SHI", "CHINESE_MIAO", "CHINESE_BAN", 
                      "CHINESE_NIAN", "CHINESE_YUE", "CHINESE_HAO", "CHINESE_RI", 
                      "CHINESE_TIAN", "CHINESE_GE" ];

var ruleNames =  [ "expr", "timeExpr", "time", "hourMinuteSecond", "hourMinute", 
                   "hour", "period", "date", "yearOrMonth", "commonDate", 
                   "weekDay", "yearMonthDate", "year", "month", "simpleDate", 
                   "fullDate", "commonMonth", "commonYear", "festival" ];

function TimeParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

TimeParser.prototype = Object.create(antlr4.Parser.prototype);
TimeParser.prototype.constructor = TimeParser;

Object.defineProperty(TimeParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

TimeParser.EOF = antlr4.Token.EOF;
TimeParser.T__0 = 1;
TimeParser.T__1 = 2;
TimeParser.T__2 = 3;
TimeParser.T__3 = 4;
TimeParser.T__4 = 5;
TimeParser.T__5 = 6;
TimeParser.T__6 = 7;
TimeParser.T__7 = 8;
TimeParser.T__8 = 9;
TimeParser.T__9 = 10;
TimeParser.T__10 = 11;
TimeParser.T__11 = 12;
TimeParser.T__12 = 13;
TimeParser.T__13 = 14;
TimeParser.T__14 = 15;
TimeParser.T__15 = 16;
TimeParser.T__16 = 17;
TimeParser.T__17 = 18;
TimeParser.T__18 = 19;
TimeParser.T__19 = 20;
TimeParser.T__20 = 21;
TimeParser.T__21 = 22;
TimeParser.T__22 = 23;
TimeParser.T__23 = 24;
TimeParser.T__24 = 25;
TimeParser.T__25 = 26;
TimeParser.T__26 = 27;
TimeParser.T__27 = 28;
TimeParser.T__28 = 29;
TimeParser.T__29 = 30;
TimeParser.T__30 = 31;
TimeParser.T__31 = 32;
TimeParser.T__32 = 33;
TimeParser.T__33 = 34;
TimeParser.T__34 = 35;
TimeParser.T__35 = 36;
TimeParser.T__36 = 37;
TimeParser.T__37 = 38;
TimeParser.T__38 = 39;
TimeParser.T__39 = 40;
TimeParser.T__40 = 41;
TimeParser.T__41 = 42;
TimeParser.T__42 = 43;
TimeParser.COMMON_PREFIX = 44;
TimeParser.WEEK_MIDDLE = 45;
TimeParser.CHINESE_NUMBER = 46;
TimeParser.DIGITS = 47;
TimeParser.CHINESE_FEN = 48;
TimeParser.CHINESE_DIAN = 49;
TimeParser.CHINESE_SHI = 50;
TimeParser.CHINESE_MIAO = 51;
TimeParser.CHINESE_BAN = 52;
TimeParser.CHINESE_NIAN = 53;
TimeParser.CHINESE_YUE = 54;
TimeParser.CHINESE_HAO = 55;
TimeParser.CHINESE_RI = 56;
TimeParser.CHINESE_TIAN = 57;
TimeParser.CHINESE_GE = 58;

TimeParser.RULE_expr = 0;
TimeParser.RULE_timeExpr = 1;
TimeParser.RULE_time = 2;
TimeParser.RULE_hourMinuteSecond = 3;
TimeParser.RULE_hourMinute = 4;
TimeParser.RULE_hour = 5;
TimeParser.RULE_period = 6;
TimeParser.RULE_date = 7;
TimeParser.RULE_yearOrMonth = 8;
TimeParser.RULE_commonDate = 9;
TimeParser.RULE_weekDay = 10;
TimeParser.RULE_yearMonthDate = 11;
TimeParser.RULE_year = 12;
TimeParser.RULE_month = 13;
TimeParser.RULE_simpleDate = 14;
TimeParser.RULE_fullDate = 15;
TimeParser.RULE_commonMonth = 16;
TimeParser.RULE_commonYear = 17;
TimeParser.RULE_festival = 18;


function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TimeParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.timeExpr = function() {
    return this.getTypedRuleContext(TimeExprContext,0);
};

ExprContext.prototype.EOF = function() {
    return this.getToken(TimeParser.EOF, 0);
};

ExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TimeVisitor ) {
        return visitor.visitExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TimeParser.ExprContext = ExprContext;

TimeParser.prototype.expr = function() {

    var localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, TimeParser.RULE_expr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 38;
        this.timeExpr();
        this.state = 39;
        this.match(TimeParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TimeExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TimeParser.RULE_timeExpr;
    return this;
}

TimeExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TimeExprContext.prototype.constructor = TimeExprContext;

TimeExprContext.prototype.time = function() {
    return this.getTypedRuleContext(TimeContext,0);
};

TimeExprContext.prototype.period = function() {
    return this.getTypedRuleContext(PeriodContext,0);
};

TimeExprContext.prototype.date = function() {
    return this.getTypedRuleContext(DateContext,0);
};

TimeExprContext.prototype.yearOrMonth = function() {
    return this.getTypedRuleContext(YearOrMonthContext,0);
};

TimeExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TimeVisitor ) {
        return visitor.visitTimeExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TimeParser.TimeExprContext = TimeExprContext;

TimeParser.prototype.timeExpr = function() {

    var localctx = new TimeExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, TimeParser.RULE_timeExpr);
    try {
        this.state = 58;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 41;
            this.time();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 42;
            this.period();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 43;
            this.period();
            this.state = 44;
            this.time();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 46;
            this.date();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 47;
            this.date();
            this.state = 48;
            this.period();
            this.state = 49;
            this.time();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 51;
            this.date();
            this.state = 52;
            this.time();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 54;
            this.date();
            this.state = 55;
            this.period();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 57;
            this.yearOrMonth();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TimeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TimeParser.RULE_time;
    return this;
}

TimeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TimeContext.prototype.constructor = TimeContext;

TimeContext.prototype.hourMinuteSecond = function() {
    return this.getTypedRuleContext(HourMinuteSecondContext,0);
};

TimeContext.prototype.hourMinute = function() {
    return this.getTypedRuleContext(HourMinuteContext,0);
};

TimeContext.prototype.hour = function() {
    return this.getTypedRuleContext(HourContext,0);
};

TimeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TimeVisitor ) {
        return visitor.visitTime(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TimeParser.TimeContext = TimeContext;

TimeParser.prototype.time = function() {

    var localctx = new TimeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, TimeParser.RULE_time);
    try {
        this.state = 63;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 60;
            this.hourMinuteSecond();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 61;
            this.hourMinute();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 62;
            this.hour();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function HourMinuteSecondContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TimeParser.RULE_hourMinuteSecond;
    return this;
}

HourMinuteSecondContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HourMinuteSecondContext.prototype.constructor = HourMinuteSecondContext;

HourMinuteSecondContext.prototype.hour = function() {
    return this.getTypedRuleContext(HourContext,0);
};

HourMinuteSecondContext.prototype.CHINESE_FEN = function() {
    return this.getToken(TimeParser.CHINESE_FEN, 0);
};

HourMinuteSecondContext.prototype.DIGITS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TimeParser.DIGITS);
    } else {
        return this.getToken(TimeParser.DIGITS, i);
    }
};


HourMinuteSecondContext.prototype.CHINESE_NUMBER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TimeParser.CHINESE_NUMBER);
    } else {
        return this.getToken(TimeParser.CHINESE_NUMBER, i);
    }
};


HourMinuteSecondContext.prototype.CHINESE_MIAO = function() {
    return this.getToken(TimeParser.CHINESE_MIAO, 0);
};

HourMinuteSecondContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TimeVisitor ) {
        return visitor.visitHourMinuteSecond(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TimeParser.HourMinuteSecondContext = HourMinuteSecondContext;

TimeParser.prototype.hourMinuteSecond = function() {

    var localctx = new HourMinuteSecondContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, TimeParser.RULE_hourMinuteSecond);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 65;
        this.hour();
        this.state = 66;
        _la = this._input.LA(1);
        if(!(_la===TimeParser.CHINESE_NUMBER || _la===TimeParser.DIGITS)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 67;
        this.match(TimeParser.CHINESE_FEN);
        this.state = 68;
        _la = this._input.LA(1);
        if(!(_la===TimeParser.CHINESE_NUMBER || _la===TimeParser.DIGITS)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 70;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===TimeParser.CHINESE_MIAO) {
            this.state = 69;
            this.match(TimeParser.CHINESE_MIAO);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function HourMinuteContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TimeParser.RULE_hourMinute;
    return this;
}

HourMinuteContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HourMinuteContext.prototype.constructor = HourMinuteContext;

HourMinuteContext.prototype.hour = function() {
    return this.getTypedRuleContext(HourContext,0);
};

HourMinuteContext.prototype.CHINESE_BAN = function() {
    return this.getToken(TimeParser.CHINESE_BAN, 0);
};

HourMinuteContext.prototype.DIGITS = function() {
    return this.getToken(TimeParser.DIGITS, 0);
};

HourMinuteContext.prototype.CHINESE_NUMBER = function() {
    return this.getToken(TimeParser.CHINESE_NUMBER, 0);
};

HourMinuteContext.prototype.CHINESE_FEN = function() {
    return this.getToken(TimeParser.CHINESE_FEN, 0);
};

HourMinuteContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TimeVisitor ) {
        return visitor.visitHourMinute(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TimeParser.HourMinuteContext = HourMinuteContext;

TimeParser.prototype.hourMinute = function() {

    var localctx = new HourMinuteContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, TimeParser.RULE_hourMinute);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 72;
        this.hour();
        this.state = 78;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case TimeParser.CHINESE_NUMBER:
        case TimeParser.DIGITS:
            this.state = 73;
            _la = this._input.LA(1);
            if(!(_la===TimeParser.CHINESE_NUMBER || _la===TimeParser.DIGITS)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 75;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===TimeParser.CHINESE_FEN) {
                this.state = 74;
                this.match(TimeParser.CHINESE_FEN);
            }

            break;
        case TimeParser.CHINESE_BAN:
            this.state = 77;
            this.match(TimeParser.CHINESE_BAN);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function HourContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TimeParser.RULE_hour;
    return this;
}

HourContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HourContext.prototype.constructor = HourContext;

HourContext.prototype.DIGITS = function() {
    return this.getToken(TimeParser.DIGITS, 0);
};

HourContext.prototype.CHINESE_NUMBER = function() {
    return this.getToken(TimeParser.CHINESE_NUMBER, 0);
};

HourContext.prototype.CHINESE_DIAN = function() {
    return this.getToken(TimeParser.CHINESE_DIAN, 0);
};

HourContext.prototype.CHINESE_SHI = function() {
    return this.getToken(TimeParser.CHINESE_SHI, 0);
};

HourContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TimeVisitor ) {
        return visitor.visitHour(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TimeParser.HourContext = HourContext;

TimeParser.prototype.hour = function() {

    var localctx = new HourContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, TimeParser.RULE_hour);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 80;
        _la = this._input.LA(1);
        if(!(_la===TimeParser.CHINESE_NUMBER || _la===TimeParser.DIGITS)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 81;
        _la = this._input.LA(1);
        if(!(_la===TimeParser.CHINESE_DIAN || _la===TimeParser.CHINESE_SHI)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PeriodContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TimeParser.RULE_period;
    return this;
}

PeriodContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PeriodContext.prototype.constructor = PeriodContext;


PeriodContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TimeVisitor ) {
        return visitor.visitPeriod(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TimeParser.PeriodContext = PeriodContext;

TimeParser.prototype.period = function() {

    var localctx = new PeriodContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, TimeParser.RULE_period);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 83;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TimeParser.T__0) | (1 << TimeParser.T__1) | (1 << TimeParser.T__2) | (1 << TimeParser.T__3) | (1 << TimeParser.T__4) | (1 << TimeParser.T__5) | (1 << TimeParser.T__6) | (1 << TimeParser.T__7))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TimeParser.RULE_date;
    return this;
}

DateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DateContext.prototype.constructor = DateContext;

DateContext.prototype.commonDate = function() {
    return this.getTypedRuleContext(CommonDateContext,0);
};

DateContext.prototype.weekDay = function() {
    return this.getTypedRuleContext(WeekDayContext,0);
};

DateContext.prototype.yearMonthDate = function() {
    return this.getTypedRuleContext(YearMonthDateContext,0);
};

DateContext.prototype.fullDate = function() {
    return this.getTypedRuleContext(FullDateContext,0);
};

DateContext.prototype.commonMonth = function() {
    return this.getTypedRuleContext(CommonMonthContext,0);
};

DateContext.prototype.simpleDate = function() {
    return this.getTypedRuleContext(SimpleDateContext,0);
};

DateContext.prototype.commonYear = function() {
    return this.getTypedRuleContext(CommonYearContext,0);
};

DateContext.prototype.month = function() {
    return this.getTypedRuleContext(MonthContext,0);
};

DateContext.prototype.festival = function() {
    return this.getTypedRuleContext(FestivalContext,0);
};

DateContext.prototype.year = function() {
    return this.getTypedRuleContext(YearContext,0);
};

DateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TimeVisitor ) {
        return visitor.visitDate(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TimeParser.DateContext = DateContext;

TimeParser.prototype.date = function() {

    var localctx = new DateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, TimeParser.RULE_date);
    try {
        this.state = 101;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 85;
            this.commonDate();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 86;
            this.weekDay();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 87;
            this.yearMonthDate();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 88;
            this.fullDate();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 89;
            this.commonMonth();
            this.state = 90;
            this.simpleDate();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 92;
            this.commonYear();
            this.state = 93;
            this.month();
            this.state = 94;
            this.simpleDate();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 98;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case TimeParser.CHINESE_NUMBER:
            case TimeParser.DIGITS:
            	this.state = 96;
            	this.year();
            	break;
            case TimeParser.T__13:
            case TimeParser.T__14:
            case TimeParser.T__15:
            case TimeParser.T__16:
            case TimeParser.T__17:
            	this.state = 97;
            	this.commonYear();
            	break;
            case TimeParser.T__18:
            case TimeParser.T__19:
            case TimeParser.T__20:
            case TimeParser.T__21:
            case TimeParser.T__22:
            case TimeParser.T__23:
            case TimeParser.T__24:
            case TimeParser.T__25:
            case TimeParser.T__26:
            case TimeParser.T__27:
            case TimeParser.T__28:
            case TimeParser.T__29:
            case TimeParser.T__30:
            case TimeParser.T__31:
            case TimeParser.T__32:
            case TimeParser.T__33:
            case TimeParser.T__34:
            case TimeParser.T__35:
            case TimeParser.T__36:
            case TimeParser.T__37:
            case TimeParser.T__38:
            case TimeParser.T__39:
            case TimeParser.T__40:
            case TimeParser.T__41:
            case TimeParser.T__42:
            	break;
            default:
            	break;
            }
            this.state = 100;
            this.festival();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function YearOrMonthContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TimeParser.RULE_yearOrMonth;
    return this;
}

YearOrMonthContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
YearOrMonthContext.prototype.constructor = YearOrMonthContext;

YearOrMonthContext.prototype.commonMonth = function() {
    return this.getTypedRuleContext(CommonMonthContext,0);
};

YearOrMonthContext.prototype.commonYear = function() {
    return this.getTypedRuleContext(CommonYearContext,0);
};

YearOrMonthContext.prototype.month = function() {
    return this.getTypedRuleContext(MonthContext,0);
};

YearOrMonthContext.prototype.year = function() {
    return this.getTypedRuleContext(YearContext,0);
};

YearOrMonthContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TimeVisitor ) {
        return visitor.visitYearOrMonth(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TimeParser.YearOrMonthContext = YearOrMonthContext;

TimeParser.prototype.yearOrMonth = function() {

    var localctx = new YearOrMonthContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, TimeParser.RULE_yearOrMonth);
    try {
        this.state = 113;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 103;
            this.commonMonth();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 104;
            this.commonYear();
            this.state = 105;
            this.month();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 107;
            this.commonYear();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 109;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
            if(la_===1) {
                this.state = 108;
                this.year();

            }
            this.state = 111;
            this.month();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 112;
            this.year();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CommonDateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TimeParser.RULE_commonDate;
    return this;
}

CommonDateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CommonDateContext.prototype.constructor = CommonDateContext;


CommonDateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TimeVisitor ) {
        return visitor.visitCommonDate(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TimeParser.CommonDateContext = CommonDateContext;

TimeParser.prototype.commonDate = function() {

    var localctx = new CommonDateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, TimeParser.RULE_commonDate);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 115;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TimeParser.T__8) | (1 << TimeParser.T__9) | (1 << TimeParser.T__10) | (1 << TimeParser.T__11) | (1 << TimeParser.T__12))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function WeekDayContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TimeParser.RULE_weekDay;
    return this;
}

WeekDayContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WeekDayContext.prototype.constructor = WeekDayContext;

WeekDayContext.prototype.WEEK_MIDDLE = function() {
    return this.getToken(TimeParser.WEEK_MIDDLE, 0);
};

WeekDayContext.prototype.DIGITS = function() {
    return this.getToken(TimeParser.DIGITS, 0);
};

WeekDayContext.prototype.CHINESE_NUMBER = function() {
    return this.getToken(TimeParser.CHINESE_NUMBER, 0);
};

WeekDayContext.prototype.CHINESE_RI = function() {
    return this.getToken(TimeParser.CHINESE_RI, 0);
};

WeekDayContext.prototype.CHINESE_TIAN = function() {
    return this.getToken(TimeParser.CHINESE_TIAN, 0);
};

WeekDayContext.prototype.COMMON_PREFIX = function() {
    return this.getToken(TimeParser.COMMON_PREFIX, 0);
};

WeekDayContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TimeVisitor ) {
        return visitor.visitWeekDay(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TimeParser.WeekDayContext = WeekDayContext;

TimeParser.prototype.weekDay = function() {

    var localctx = new WeekDayContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, TimeParser.RULE_weekDay);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 118;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===TimeParser.COMMON_PREFIX) {
            this.state = 117;
            this.match(TimeParser.COMMON_PREFIX);
        }

        this.state = 120;
        this.match(TimeParser.WEEK_MIDDLE);
        this.state = 121;
        _la = this._input.LA(1);
        if(!(((((_la - 46)) & ~0x1f) == 0 && ((1 << (_la - 46)) & ((1 << (TimeParser.CHINESE_NUMBER - 46)) | (1 << (TimeParser.DIGITS - 46)) | (1 << (TimeParser.CHINESE_RI - 46)) | (1 << (TimeParser.CHINESE_TIAN - 46)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function YearMonthDateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TimeParser.RULE_yearMonthDate;
    return this;
}

YearMonthDateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
YearMonthDateContext.prototype.constructor = YearMonthDateContext;

YearMonthDateContext.prototype.month = function() {
    return this.getTypedRuleContext(MonthContext,0);
};

YearMonthDateContext.prototype.simpleDate = function() {
    return this.getTypedRuleContext(SimpleDateContext,0);
};

YearMonthDateContext.prototype.year = function() {
    return this.getTypedRuleContext(YearContext,0);
};

YearMonthDateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TimeVisitor ) {
        return visitor.visitYearMonthDate(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TimeParser.YearMonthDateContext = YearMonthDateContext;

TimeParser.prototype.yearMonthDate = function() {

    var localctx = new YearMonthDateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, TimeParser.RULE_yearMonthDate);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 124;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        if(la_===1) {
            this.state = 123;
            this.year();

        }
        this.state = 126;
        this.month();
        this.state = 127;
        this.simpleDate();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function YearContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TimeParser.RULE_year;
    return this;
}

YearContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
YearContext.prototype.constructor = YearContext;

YearContext.prototype.CHINESE_NIAN = function() {
    return this.getToken(TimeParser.CHINESE_NIAN, 0);
};

YearContext.prototype.DIGITS = function() {
    return this.getToken(TimeParser.DIGITS, 0);
};

YearContext.prototype.CHINESE_NUMBER = function() {
    return this.getToken(TimeParser.CHINESE_NUMBER, 0);
};

YearContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TimeVisitor ) {
        return visitor.visitYear(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TimeParser.YearContext = YearContext;

TimeParser.prototype.year = function() {

    var localctx = new YearContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, TimeParser.RULE_year);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 129;
        _la = this._input.LA(1);
        if(!(_la===TimeParser.CHINESE_NUMBER || _la===TimeParser.DIGITS)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 130;
        this.match(TimeParser.CHINESE_NIAN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MonthContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TimeParser.RULE_month;
    return this;
}

MonthContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MonthContext.prototype.constructor = MonthContext;

MonthContext.prototype.CHINESE_YUE = function() {
    return this.getToken(TimeParser.CHINESE_YUE, 0);
};

MonthContext.prototype.DIGITS = function() {
    return this.getToken(TimeParser.DIGITS, 0);
};

MonthContext.prototype.CHINESE_NUMBER = function() {
    return this.getToken(TimeParser.CHINESE_NUMBER, 0);
};

MonthContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TimeVisitor ) {
        return visitor.visitMonth(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TimeParser.MonthContext = MonthContext;

TimeParser.prototype.month = function() {

    var localctx = new MonthContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, TimeParser.RULE_month);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 132;
        _la = this._input.LA(1);
        if(!(_la===TimeParser.CHINESE_NUMBER || _la===TimeParser.DIGITS)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 133;
        this.match(TimeParser.CHINESE_YUE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SimpleDateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TimeParser.RULE_simpleDate;
    return this;
}

SimpleDateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SimpleDateContext.prototype.constructor = SimpleDateContext;

SimpleDateContext.prototype.DIGITS = function() {
    return this.getToken(TimeParser.DIGITS, 0);
};

SimpleDateContext.prototype.CHINESE_NUMBER = function() {
    return this.getToken(TimeParser.CHINESE_NUMBER, 0);
};

SimpleDateContext.prototype.CHINESE_RI = function() {
    return this.getToken(TimeParser.CHINESE_RI, 0);
};

SimpleDateContext.prototype.CHINESE_HAO = function() {
    return this.getToken(TimeParser.CHINESE_HAO, 0);
};

SimpleDateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TimeVisitor ) {
        return visitor.visitSimpleDate(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TimeParser.SimpleDateContext = SimpleDateContext;

TimeParser.prototype.simpleDate = function() {

    var localctx = new SimpleDateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, TimeParser.RULE_simpleDate);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 135;
        _la = this._input.LA(1);
        if(!(_la===TimeParser.CHINESE_NUMBER || _la===TimeParser.DIGITS)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 137;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===TimeParser.CHINESE_HAO || _la===TimeParser.CHINESE_RI) {
            this.state = 136;
            _la = this._input.LA(1);
            if(!(_la===TimeParser.CHINESE_HAO || _la===TimeParser.CHINESE_RI)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FullDateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TimeParser.RULE_fullDate;
    return this;
}

FullDateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FullDateContext.prototype.constructor = FullDateContext;

FullDateContext.prototype.DIGITS = function() {
    return this.getToken(TimeParser.DIGITS, 0);
};

FullDateContext.prototype.CHINESE_NUMBER = function() {
    return this.getToken(TimeParser.CHINESE_NUMBER, 0);
};

FullDateContext.prototype.CHINESE_RI = function() {
    return this.getToken(TimeParser.CHINESE_RI, 0);
};

FullDateContext.prototype.CHINESE_HAO = function() {
    return this.getToken(TimeParser.CHINESE_HAO, 0);
};

FullDateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TimeVisitor ) {
        return visitor.visitFullDate(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TimeParser.FullDateContext = FullDateContext;

TimeParser.prototype.fullDate = function() {

    var localctx = new FullDateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, TimeParser.RULE_fullDate);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 139;
        _la = this._input.LA(1);
        if(!(_la===TimeParser.CHINESE_NUMBER || _la===TimeParser.DIGITS)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 140;
        _la = this._input.LA(1);
        if(!(_la===TimeParser.CHINESE_HAO || _la===TimeParser.CHINESE_RI)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CommonMonthContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TimeParser.RULE_commonMonth;
    return this;
}

CommonMonthContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CommonMonthContext.prototype.constructor = CommonMonthContext;

CommonMonthContext.prototype.COMMON_PREFIX = function() {
    return this.getToken(TimeParser.COMMON_PREFIX, 0);
};

CommonMonthContext.prototype.CHINESE_YUE = function() {
    return this.getToken(TimeParser.CHINESE_YUE, 0);
};

CommonMonthContext.prototype.CHINESE_GE = function() {
    return this.getToken(TimeParser.CHINESE_GE, 0);
};

CommonMonthContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TimeVisitor ) {
        return visitor.visitCommonMonth(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TimeParser.CommonMonthContext = CommonMonthContext;

TimeParser.prototype.commonMonth = function() {

    var localctx = new CommonMonthContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, TimeParser.RULE_commonMonth);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 142;
        this.match(TimeParser.COMMON_PREFIX);
        this.state = 144;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===TimeParser.CHINESE_GE) {
            this.state = 143;
            this.match(TimeParser.CHINESE_GE);
        }

        this.state = 146;
        this.match(TimeParser.CHINESE_YUE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CommonYearContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TimeParser.RULE_commonYear;
    return this;
}

CommonYearContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CommonYearContext.prototype.constructor = CommonYearContext;


CommonYearContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TimeVisitor ) {
        return visitor.visitCommonYear(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TimeParser.CommonYearContext = CommonYearContext;

TimeParser.prototype.commonYear = function() {

    var localctx = new CommonYearContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, TimeParser.RULE_commonYear);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 148;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TimeParser.T__13) | (1 << TimeParser.T__14) | (1 << TimeParser.T__15) | (1 << TimeParser.T__16) | (1 << TimeParser.T__17))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FestivalContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TimeParser.RULE_festival;
    return this;
}

FestivalContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FestivalContext.prototype.constructor = FestivalContext;


FestivalContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TimeVisitor ) {
        return visitor.visitFestival(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TimeParser.FestivalContext = FestivalContext;

TimeParser.prototype.festival = function() {

    var localctx = new FestivalContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, TimeParser.RULE_festival);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 150;
        _la = this._input.LA(1);
        if(!(((((_la - 19)) & ~0x1f) == 0 && ((1 << (_la - 19)) & ((1 << (TimeParser.T__18 - 19)) | (1 << (TimeParser.T__19 - 19)) | (1 << (TimeParser.T__20 - 19)) | (1 << (TimeParser.T__21 - 19)) | (1 << (TimeParser.T__22 - 19)) | (1 << (TimeParser.T__23 - 19)) | (1 << (TimeParser.T__24 - 19)) | (1 << (TimeParser.T__25 - 19)) | (1 << (TimeParser.T__26 - 19)) | (1 << (TimeParser.T__27 - 19)) | (1 << (TimeParser.T__28 - 19)) | (1 << (TimeParser.T__29 - 19)) | (1 << (TimeParser.T__30 - 19)) | (1 << (TimeParser.T__31 - 19)) | (1 << (TimeParser.T__32 - 19)) | (1 << (TimeParser.T__33 - 19)) | (1 << (TimeParser.T__34 - 19)) | (1 << (TimeParser.T__35 - 19)) | (1 << (TimeParser.T__36 - 19)) | (1 << (TimeParser.T__37 - 19)) | (1 << (TimeParser.T__38 - 19)) | (1 << (TimeParser.T__39 - 19)) | (1 << (TimeParser.T__40 - 19)) | (1 << (TimeParser.T__41 - 19)) | (1 << (TimeParser.T__42 - 19)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.TimeParser = TimeParser;
