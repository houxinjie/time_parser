const antlr4 = require('antlr4')
const {TimeLexer} = require('./Time/TimeLexer')
const {TimeParser} = require('./Time/TimeParser')
const {TimeParserVisitor} = require('./TimeParserVisitor')


const parseTime = text => {
    const chars = new antlr4.InputStream(text);
    const lexer = new TimeLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new TimeParser(tokens);
    parser.buildParseTrees = true;
    const tree = parser.expr();
    return tree.accept(new TimeParserVisitor())
}

exports.parseTime = parseTime
