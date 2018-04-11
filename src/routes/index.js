/** 
 * 
 * @module ApiRoutesModule
 *  */

import combineRouters from 'koa-combine-routers'
/** will be module:ApiRoutesModule~infura */
import primary from './primary'
import infura from './infura'


export default combineRouters(infura, primary)