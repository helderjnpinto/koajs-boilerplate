import Web3 from 'web3';
import Eth from 'web3-eth';


const infrink = 'https://rinkeby.infura.io/FdJHU8ZABTe7w1V3hFkb';

const web3 = {
        web3Instance: new Web3(infrink)
}

export default web3;