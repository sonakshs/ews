import web3 from './web3';
//access our local copy to contract deployed on rinkeby testnet
//use your own contract address
const address = '0x93b0849fe42Eed60C656915b18f2B0241b94A885';
//use the ABI from your contract
const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "str",
				"type": "string"
			},
			{
				"name": "_add",
				"type": "address"
			},
			{
				"name": "size",
				"type": "uint256"
			}
		],
		"name": "addHash",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "uint8"
			}
		],
		"name": "AddressToDetail",
		"outputs": [
			{
				"name": "theHash",
				"type": "string"
			},
			{
				"name": "size",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_add",
				"type": "address"
			},
			{
				"name": "ind",
				"type": "uint8"
			}
		],
		"name": "getHash",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
export default new web3.eth.Contract(abi, address);