import {
  web3api as web3
} from '../infura';




const _batchRequest = function(account, batch) {
  if (!batch) {
    var batch = web3.web3Instance.createBatch();
    batch.add(web3.eth.getBalance.request(account, 'latest', (res) => {console.log(res) }) );
    batch.execute();
  } else {
    // 
  }
}

export const get = async (ctx, next) => {
  // console.log('web3 deb: ', web3.eth)
  let res;
  const q = ctx.query;

  _batchRequest(web3.account);


  ctx.body = res;
  await next();
}


