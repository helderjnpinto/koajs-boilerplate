var koa = require('koa')
var app = new koa()
// const koaBody = require('koa-body');
var bodyParser = require('koa-bodyparser');

import routes from './routes'

app.use(bodyParser());
app.use(routes);
// app.use(koaBody({
//     jsonLimit: '1kb'
// }));
export default app