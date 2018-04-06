var Router = require('koa-router');
var router = new Router();

import * as primaryController from '../controllers/primary';

const routes = router
    .get('/', primaryController.list)
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


export default routes;