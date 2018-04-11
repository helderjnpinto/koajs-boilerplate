import app from './app'
var logger = require('koa-logger')


app.use(logger())
/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
console.log('...', process.env.NODE_ENV)
/** This is a description of the server function. */
app.listen(4000)
console.log('listening on port 4000')
