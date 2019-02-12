import React, { Component } from "react";
import "./App.css";
import Web3 from "web3";
import AuctionCard from "./AuctionCard.js";
import contract from "./contract";
import AppBar from "./AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

const request = require("request");
const web3 = new Web3(window.ethereum);
var invert = false;

var auc = {"media":{"beds":"Two Bed","rent_type":"Studio Apartment","desc":"","amount":"5","baths":"One Bath","furnished":"Furnished","images":["data:image/jpeg;base64,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"],"txHash":""},"address":"0xB60424F0Dd15fd9b4c72eB5bc7A1446A502B1E67"};

class App extends Component {
  state = {
    cardArray: [],
    auctions: [],
		addresses: [],
		checked: false,
		ledgerAbi: '',
		ledger: '',
    exchange: 0
  };

  componentDidMount = async () => {
    this.handleExchangeRate();
    await this.enableWeb3();
		this.setState({ ledgerAbi: contract.ledger }); 
		var ledger = new web3.eth.Contract(
			JSON.parse(this.state.ledgerAbi),
			"0x9d7c1161d3726313627bc4cdfa0c7acbc87efed5"
		);
		this.setState({ledger: ledger});
		setInterval(async()=>{await this.getAddresses();}, 1000);
  }
  
  handleExchangeRate = async() => {
    await request("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=EUR", { json: true }, (err, res, body) => {
      if (err) {
        return console.log(err);
      } else {
        this.setState({exchange: body});
        console.log(body);
      }
    });
  };

  enableWeb3 = async () => {
    if (typeof web3 !== "undefined") {
      try {
        await window.ethereum.enable();
      } catch (e) {
        console.log("You must enable connection to use this app");
        await window.ethereum.enable();
      }
      this.setState({ web3: web3 });
    } else if (window.web3) {
      this.setState({ web3: window.web3 });
    } else {
      console.log("You must use metamask to interact with this website");
      this.setState({ web3: null });
    }
  };
	
	getAddresses = async () => {
			var auctions = await this.state.ledger.methods.getAuctions()
				.call({from: web3.eth.getAccounts[0]})
				.then(result => result);
			var oldAddresses = this.state.addresses.slice(0);
      this.setState({ addresses: auctions });
      var newAddresses = this.state.addresses.slice(0);
      
      let difference = oldAddresses
                 .filter(x => !newAddresses.includes(x))
                 .concat(newAddresses.filter(x => !oldAddresses.includes(x)));  // https://stackoverflow.com/questions/1187518/how-to-get-the-difference-between-two-arrays-in-javascript    
      
      if(oldAddresses.toString() !== this.state.addresses.toString() && this.state.auctions.length !== auctions.length){
        await this.handleContracts(difference);
      }
	}

  handleContracts = async (addresses) => {
    try {
      for (var address of addresses) {
        var auctionAbi = contract.interf;
        var auction = new web3.eth.Contract(JSON.parse(auctionAbi), address);
        var auctionIPFS = await auction.methods
          .ipfsHash()
          .call({ from: web3.eth.getAccounts[0] })
          .then(result => result);
        var auctionMediaURL = "https://gateway.ipfs.io/ipfs/" + auctionIPFS;
        await this.handleGetIPFS(auctionMediaURL, address);
      }
    } catch (e) {
      console.log(e);
    }
  };
	
	handleGetIPFS = async (auctionMediaURL, address) => {
    await request(auctionMediaURL, { json: true }, (err, res, body) => {
      if (err) {
        return console.log(err);
      } else {
        var nAuction = {
          media: body,
          address: address
        };
				this.setState({
					auctions: [...this.state.auctions, nAuction]
				}) 
      }
    });
  };

  handleSort = async () => {

    if(this.state.auctions.length > 1){
      var aucSort = this.state.auctions.slice(0);
      if(invert === false){
        aucSort.sort((a, b) => (parseInt(a.media.amount) > parseInt(b.media.amount)) ? 1 : -1);
      }else{
        aucSort.sort((a, b) => (parseInt(a.media.amount) > parseInt(b.media.amount)) ? -1 : 1);
      }
      await this.setState({ auctions: aucSort });
      invert = !invert;
    }

  }
  
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <div className="App">
          <AppBar web3={web3} contract={contract} sort={this.handleSort} ex={this.state.exchange} />
          <Grid style={{ padding: "15px", marginTop: "60px" }} container justify="center" spacing={16}>
            {this.state.auctions.map((content, x) => <AuctionCard key={content.address} data={content} ex={this.state.exchange} />
            )}
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}
export default App;

/*
{this.state.cardArray.map((card, x) => {
	return <this.AuctionCard key={"card"+x}/>;
})}
*/
