var logger = require('koa-logger');
var Router = require('koa-router');
var parse = require('co-body');
var koa = require('koa');


var app = new koa();

app.use(logger());

var router = new Router();


const routes = router
    .get('/', list)
    .post('/users', (ctx, next) => {
        // ...
    })
    .put('/users/:id', (ctx, next) => {
        // ...
    })
    .del('/users/:id', (ctx, next) => {
        // ...
    })
    .all('/users/:id', (ctx, next) => {
        // ...
    });

app.use(routes.routes());

function list(ctx, next) {
    let a = 1;
    ctx.body = 'Hello World!';
    next();
}



app.listen(4000);
console.log('listening on port 3000');