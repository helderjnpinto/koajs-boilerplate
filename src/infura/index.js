import Web3 from 'web3';

const infrink = 'https://rinkeby.infura.io/FdJHU8ZABTe7w1V3hFkb';
const personalAccountTestRink = 'https://rinkeby.infura.io/FdJHU8ZABTe7w1V3hFkb';
const web3 = new Web3(infrink || 'http:localhost');

export const web3api = {
        web3Instance: web3,
        eth: web3.eth,
        account: personalAccountTestRink
}