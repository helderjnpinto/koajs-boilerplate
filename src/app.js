var koa = require('koa')
var app = new koa()

import routes from './routes'

app.use(routes)
export default app
