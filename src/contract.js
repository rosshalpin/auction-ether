import {web3} from "./Web3Provider.js";

const interf = '[{"constant":true,"inputs":[],"name":"auctionSeller","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"bidderLog","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"auctionEnd","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdrawBid","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"getBidderLog","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"auctionLedger","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"auctionHasEnded","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"auctionBegin","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minIncrementValue","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"highestBidder","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"auctionManager","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"reserveValue","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getBidLog","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"bidLog","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ipfsHash","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"highestBid","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"placeBid","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"endAuction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_reserveValue","type":"uint256"},{"name":"_minIncrementValue","type":"uint256"},{"name":"_auctionDuration","type":"uint256"},{"name":"_ipfsHash","type":"string"}],"payable":true,"stateMutability":"payable","type":"constructor"}]';
const bytecode = '6080604052604051610c21380380610c21833981016040908152815160208301519183015160608401519193909101655af3107a400034116100c857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f596f75206d7573742070617920746865206164766572746973656d656e74206660448201527f6565000000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b60008054600160a060020a03191673e3e36c15027be15aeabf2a71f6920a9429aa893717808255604051600160a060020a0391909116913480156108fc02929091818181858888f19350505050158015610126573d6000803e3d6000fd5b50670de0b6b3a76400008085026006558302600755426008819055820160095560018054600160a060020a03191633179055600a805460ff19169055805161017590600b906020840190610222565b5060038054600160a060020a031916739d7c1161d3726313627bc4cdfa0c7acbc87efed51790819055604080517f38eada1c0000000000000000000000000000000000000000000000000000000081523060048201529051600160a060020a0392909216916338eada1c9160248082019260009290919082900301818387803b15801561020157600080fd5b505af1158015610215573d6000803e3d6000fd5b50505050505050506102bd565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061026357805160ff1916838001178555610290565b82800160010185558215610290579182015b82811115610290578251825591602001919060010190610275565b5061029c9291506102a0565b5090565b6102ba91905b8082111561029c57600081556001016102a6565b90565b610955806102cc6000396000f3006080604052600436106101115763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630cf9181681146101165780631973b9ab146101475780632a24f46c1461015f57806337271cc714610186578063453c2acc1461019057806348458af5146101f5578063485994e81461020a57806349a5b8801461023357806370a08231146102485780637d1921ec1461026957806383197ef01461027e57806391f9015714610293578063b0192f9a146102a8578063b3a16872146102bd578063b3ea2f30146102d2578063c3c941fc146102e7578063c623674f146102ff578063d57bde7914610389578063ecfc7ecc1461039e578063fe67a54b146103a6575b600080fd5b34801561012257600080fd5b5061012b6103bb565b60408051600160a060020a039092168252519081900360200190f35b34801561015357600080fd5b5061012b6004356103ca565b34801561016b57600080fd5b506101746103f2565b60408051918252519081900360200190f35b61018e6103f8565b005b34801561019c57600080fd5b506101a5610456565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156101e15781810151838201526020016101c9565b505050509050019250505060405180910390f35b34801561020157600080fd5b5061012b6104b8565b34801561021657600080fd5b5061021f6104c7565b604080519115158252519081900360200190f35b34801561023f57600080fd5b506101746104d0565b34801561025457600080fd5b50610174600160a060020a03600435166104d6565b34801561027557600080fd5b506101746104e8565b34801561028a57600080fd5b5061018e6104ee565b34801561029f57600080fd5b5061012b6104f1565b3480156102b457600080fd5b5061012b610500565b3480156102c957600080fd5b5061017461050f565b3480156102de57600080fd5b506101a5610515565b3480156102f357600080fd5b5061017460043561056c565b34801561030b57600080fd5b5061031461058b565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561034e578181015183820152602001610336565b50505050905090810190601f16801561037b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561039557600080fd5b50610174610619565b61018e61061f565b3480156103b257600080fd5b5061018e610890565b600154600160a060020a031681565b600c8054829081106103d857fe5b600091825260209091200154600160a060020a0316905081565b60095481565b600254600090600160a060020a031633141561041057fe5b5033600081815260056020526040808220805490839055905190929183156108fc02918491818181858888f19350505050158015610452573d6000803e3d6000fd5b5050565b6060600c8054806020026020016040519081016040528092919081815260200182805480156104ae57602002820191906000526020600020905b8154600160a060020a03168152600190910190602001808311610490575b5050505050905090565b600354600160a060020a031681565b600a5460ff1681565b60085481565b60056020526000908152604090205481565b60075481565b33ff5b600254600160a060020a031681565b600054600160a060020a031681565b60065481565b6060600d8054806020026020016040519081016040528092919081815260200182805480156104ae57602002820191906000526020600020905b81548152602001906001019080831161054f575050505050905090565b600d80548290811061057a57fe5b600091825260209091200154905081565b600b805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156106115780601f106105e657610100808354040283529160200191610611565b820191906000526020600020905b8154815290600101906020018083116105f457829003601f168201915b505050505081565b60045481565b600a5460ff161561067a576040805160e560020a62461bcd02815260206004820152601160248201527f41756374696f6e2068617320656e646564000000000000000000000000000000604482015290519081900360640190fd5b3360009081526005602052604090205415610705576040805160e560020a62461bcd02815260206004820152602360248201527f596f75206d75737420776974686472617720796f75722070726576696f75732060448201527f6269640000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b60065434101561075f576040805160e560020a62461bcd02815260206004820152601e60248201527f526573657276652076616c756520686173206e6f74206265656e206d65740000604482015290519081900360640190fd5b600754600254600160a060020a0316600090815260056020526040902054013410156107d5576040805160e560020a62461bcd02815260206004820152601960248201527f4d696e696d756d20696e6372656d656e74206e6f74206d657400000000000000604482015290519081900360640190fd5b3360008181526005602052604081208054349081019091556002805473ffffffffffffffffffffffffffffffffffffffff19908116909417908190556004918255600c805460018181019092557fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c7018054909516600160a060020a03929092169190911790935554600d805493840181559091527fd7b6990105719101dabeb77144f2a3385c8033acd3af97e9423a695e81ad1eb590910155565b60008054600160a060020a031633146108a557fe5b506008546009544282900391820111156108c757600a805460ff191660011790555b600a5460ff161515600114610926576040805160e560020a62461bcd02815260206004820152601560248201527f41756374696f6e20686173206e6f7420656e6465640000000000000000000000604482015290519081900360640190fd5b505600a165627a7a72305820a2e0fe7f295f9596e2e985356d49cfa10a8bbd7eed09f61594365b51119be2f20029';
const ledgerABI = '[{"constant":false,"inputs":[{"name":"auctionAddress","type":"address"}],"name":"addAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getAuctions","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"reset","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]';
const ledger = new web3.eth.Contract(
			JSON.parse(ledgerABI),
			"0x9d7c1161d3726313627bc4cdfa0c7acbc87efed5"
		);
const contract = {interf: interf,bytecode: bytecode, ledger: ledger};

export default contract;