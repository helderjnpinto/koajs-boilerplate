import routes from './routes';
var koa = require('koa');

var bodyParser = require('koa-bodyparser');


var app = new koa();

app.use(bodyParser());

app.use(routes);

export default app;