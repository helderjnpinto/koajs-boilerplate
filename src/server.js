/** @module Server*/
import app from './app'
var logger = require('koa-logger')


app.use(logger())
//TODO: configure envs console.log('...', process.env.NODE_ENV)

app.listen(4000)
console.log('listening on port 4000')
