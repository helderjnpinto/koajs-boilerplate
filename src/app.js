
import routes from './routes';

var koa = require('koa');
var bodyParser = require('koa-bodyparser');
var params = require('koa-strong-params');

var app = new koa();

app.use(routes);
app.use(bodyParser());
app.use(params());

export default app;