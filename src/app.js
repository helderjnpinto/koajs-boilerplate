var koa = require('koa');
const mount = require('koa-mount');
var koa = require('koa')
var app = new koa()
// const koaBody = require('koa-body');
var bodyParser = require('koa-bodyparser');

import routes from './routes'

var app = new koa();
app.use(bodyParser());
app.use(routes);
// app.use(koaBody({
//     jsonLimit: '1kb'
// }));
export default app