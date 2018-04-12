/**
 * @module Infura provider
 */
import Web3 from 'web3';

const infrink = 'https://rinkeby.infura.io/FdJHU8ZABTe7w1V3hFkb';
const gethDocker = "http://0.0.0.0:8545";
/**
 * The HTTP provider is deprecated, as it won’t work for subscriptions.
 */
// const providerHttps = new Web3.providers.HttpProvider(infrink)
const providerHttps = new Web3.providers.HttpProvider(gethDocker)
export const web3 = new Web3(providerHttps);

const personalAccountTestRink = '0x8717eD44cEB53f15dB9CF1bEc75a037A70232AC8';
/**
 *  Internal instance for web3
 */
const web3i = {
        web3,
        eth: web3.eth,
        personalAccount: personalAccountTestRink,
        httpsProvider: providerHttps
}
export default web3i;