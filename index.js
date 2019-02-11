import * as fluence from "fluence";

// address to Fluence contract in Ethereum blockchain. Interaction with blockchain created by MetaMask or with local Ethereum node
let contractAddress = "0x5faa7b8d290407460e0ec8585b2712acf27290f9";

let ethUrl = "http://46.101.213.180:8545"

// application to interact with that stored in Fluence contract
let appId = "1";

window.fluence = fluence;

// creates a session between client and backend application
fluence.connect(contractAddress, appId, ethUrl).then((s) => {
		console.log("Session created");
		window.session = s;
		session = s;
});

// gets a result and logs it
window.logResultAsString = function (request) {
	request.result().then((r) => console.log(r.asString()))
};

