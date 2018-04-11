import * as infuraCtrl from '../controllers/infura';
var Router = require('koa-router');


const router = new Router();


const routes = router
    .get('/infura', infuraCtrl.get )


export default routes;