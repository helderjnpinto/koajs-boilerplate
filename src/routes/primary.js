require('utils-strings');


var Router = require('koa-router');
var router = new Router();

import * as primaryController from '../controllers/primary';


const routes = router
  .get('/', primaryController.get)
  .post('/',  primaryController.post)
  .put('/:id', (ctx, next) => {
    // ...
  })
  .del('/:id', (ctx, next) => {
    // ...
  })
  .all('/:id', (ctx, next) => {
    // ...
  })

export default routes
