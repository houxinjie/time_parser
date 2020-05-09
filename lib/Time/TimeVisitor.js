// Generated from Time.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by TimeParser.

function TimeVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

TimeVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
TimeVisitor.prototype.constructor = TimeVisitor;

// Visit a parse tree produced by TimeParser#expr.
TimeVisitor.prototype.visitExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TimeParser#timeExpr.
TimeVisitor.prototype.visitTimeExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TimeParser#time.
TimeVisitor.prototype.visitTime = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TimeParser#hourMinuteSecond.
TimeVisitor.prototype.visitHourMinuteSecond = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TimeParser#hourMinute.
TimeVisitor.prototype.visitHourMinute = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TimeParser#hour.
TimeVisitor.prototype.visitHour = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TimeParser#period.
TimeVisitor.prototype.visitPeriod = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TimeParser#date.
TimeVisitor.prototype.visitDate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TimeParser#yearOrMonth.
TimeVisitor.prototype.visitYearOrMonth = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TimeParser#commonDate.
TimeVisitor.prototype.visitCommonDate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TimeParser#weekDay.
TimeVisitor.prototype.visitWeekDay = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TimeParser#yearMonthDate.
TimeVisitor.prototype.visitYearMonthDate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TimeParser#year.
TimeVisitor.prototype.visitYear = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TimeParser#month.
TimeVisitor.prototype.visitMonth = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TimeParser#simpleDate.
TimeVisitor.prototype.visitSimpleDate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TimeParser#fullDate.
TimeVisitor.prototype.visitFullDate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TimeParser#commonMonth.
TimeVisitor.prototype.visitCommonMonth = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TimeParser#commonYear.
TimeVisitor.prototype.visitCommonYear = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TimeParser#festival.
TimeVisitor.prototype.visitFestival = function(ctx) {
  return this.visitChildren(ctx);
};



exports.TimeVisitor = TimeVisitor;