import * as fluence from "fluence";

// address to Fluence contract in Ethereum blockchain. Interaction with blockchain created by MetaMask or with local Ethereum node
let contractAddress = "0xe9bbe60d525c7c5d4f3d85036f3ea23003879106";

// application to interact with that stored in Fluence contract
let appId = "<put your app id here>";

let fluenceSession;

// creates a session between client and backend application
fluence.createAppSession(contractAddress, appId).then((s) => {
		console.log("Session created");
		window.fluenceSession = s;
		fluenceSession = s;
});

// gets a result and logs it
window.logResultAsString = function (request) {
	request.result().then((r) => console.log(r.asString()))
};

