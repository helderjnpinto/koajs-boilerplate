import combineRouters from 'koa-combine-routers'
import primary from './primary'
import infura from './infura'


export default combineRouters(infura, primary)