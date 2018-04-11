import Web3 from 'web3';

const infrink = 'https://rinkeby.infura.io/FdJHU8ZABTe7w1V3hFkb';
const web3 = new Web3(infrink || 'http://localhost:8545');
const personalAccountTestRink = '0x8717eD44cEB53f15dB9CF1bEc75a037A70232AC8';

export const web3api = {
        web3Instance: web3,
        eth: web3.eth,
        personalAccount: personalAccountTestRink
}