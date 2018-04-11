import { web3api as web3 } from '../infura';

export const get = async (ctx, next) => {
  console.log('web3 deb: ', web3.eth)
  ctx.body = JSON.stringify(web3.account);
  await next()
}



