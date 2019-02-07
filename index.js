import * as fluence from "js-fluence-client";

// address to Fluence contract in Ethereum blockchain. Interaction with blockchain created by MetaMask or with local Ethereum node
let contractAddress = "0x99d3a4e348eb218cfa3edc654f518e030629d30c";

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

