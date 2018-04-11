import * as web3 from '../infura/index';

export const get = async (ctx, next) => {
  ctx.body = JSON.stringify(web3);
  await next()
}



