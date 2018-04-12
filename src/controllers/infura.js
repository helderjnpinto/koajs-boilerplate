import web3i, {
  web3
} from '../infura';
var geth = require("geth");

/**
 * _batchRequest 
 * - Batch process is not working
 * @param {string} account 
 * @param {web3i} _web3i 
 */
const _batchRequest = function (account, _web3i) {
  var batch = new _web3i.web3.BatchRequest();
  batch.add(_web3i.eth.getBalance.request(account, 'latest', (res) => {
    console.log('res', res);
  }));
  batch.execute();
  console.log('res batch', batch);
}


export const get = async (ctx, next) => {
  var options = {
    networkid: "10101",
    port: 30303,
    rpcport: 8545,
    mine: false
};
 
geth.start(options, function (err, proc) {
    if (err) return console.error(err);
    console.log('proc', proc)

});





  const q = ctx.query;

  const account = web3i.personalAccount;
  _setDefaultAccount(web3i, account);


  const balance = await _getBalance(web3i, account);
  const trans = await _getTransaction(web3i, '0xf3954b44881adc77a05bc2ab1538032344e8e2542ad68e3d391eaedcb7c08859');
  ctx.body = {
    balance: _convertWeiToEth(web3i, balance),
    trans,
    gasPrice: await _getGasPrice(web3i)
  }
  await next()
}



/**
 * _getBalance
 *  
 * @param {any} account 
 * @param {any} _web3i 
 * @param {string} [block='latest'] 
 * @returns Promise with data
 */
const _getBalance = async function (_web3i, account, block = 'latest') {
  return _web3i.eth.getBalance(account, block);
}

/**
 * set default account eth account 
 * 
 * @param {any} _web3i 
 * @param {any} addr 
 * @see http://web3js.readthedocs.io/en/1.0/web3-eth.html#defaultaccount
 */
const _setDefaultAccount = (_web3i, addr) => {
  _web3i.eth.defaultAccount = addr;
}

/**
 * Convert to wei to eth
 * 
 * @param {any} _web3i 
 * @param {any} wei 
 * @returns 
 */
const _convertWeiToEth = (_web3i, wei) => {
  return _web3i.web3.utils.fromWei(wei, 'ether');
}

/**
 * Get current gas price in eth
 * 
 * @param {any} _web3i 
 * @returns 
 */
const _getGasPrice = async (_web3i) => {
  return _convertWeiToEth(_web3i, await _web3i.eth.getGasPrice());
}


/**
 * Get transaction details
 * 
 * @param {any} _web3i 
 * @param {any} txHash 
 * @returns 
 */
const _getTransaction = async (_web3i, txHash ) => {
  return await _web3i.eth.getTransaction(txHash);
}