import combineRouters from 'koa-combine-routers';
import primary from './primary';

const router = combineRouters([
    primary,
]);

export default router