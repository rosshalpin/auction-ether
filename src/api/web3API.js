import Web3 from "web3";
const HDWalletProvider = require('truffle-hdwallet-provider');

let web3 = null

class web3API {
  static enable() {
    
    window.ethereum.enable();
    web3 = new Web3(window.ethereum);
    
    const test = false;
    if(test === true){
      const provider = new HDWalletProvider(
        '<REDACTED>',
        'https://rinkeby.infura.io/v3/<REDACTED>'
      );
      web3 = new Web3(provider);
    }
    return web3;
  }
  
  static async getAuctions(ledger) {
    return await ledger.methods.getAuctions()
				.call({from: web3.eth.getAccounts[0]})
				.then(result => result);
  }
  
  static async getIPFS(auction){
    return await auction.methods
      .ipfsHash()
      .call({ from: web3.eth.getAccounts[0] })
      .then(result => result);
  }
}


export default web3API;