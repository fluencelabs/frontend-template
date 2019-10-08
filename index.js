import * as fluence from "fluence";

window.onload = function () {
	// locate button
	const helloBtn = document.querySelector('#hello');
	// locate username input text box
	const usernameInput = document.querySelector('#username');
	// locate output label
	const greetingLbl = document.querySelector('#greeting');

	// address to Fluence contract in Ethereum blockchain. 
	// Interaction with blockchain created by MetaMask or with local/remote Ethereum node
	let contractAddress = "0xeFF91455de6D4CF57C141bD8bF819E5f873c1A01";

	// set ethUrl to `undefined` to use MetaMask instead of Ethereum node
	let ethUrl = "http://geth.fluence.one:8545/"

	// application to interact with that stored in Fluence contract
	let appId = "5";

	// save fluence to global variable, so it can be accessed from Developer Console
	window.fluence = fluence;

	// create a session between client and backend application
	fluence.connect(contractAddress, appId, ethUrl).then((s) => {
		console.log("Session created");
		window.session = s;
		helloBtn.disabled = false;
	});


	// set callback on button click
	helloBtn.addEventListener("click", send)
	
	// send username as a transaction and display results in grettingLbl
	function send() {
		const username = usernameInput.value.trim();
		session.request(username).then((result) => {
			greetingLbl.innerHTML = result.asString();
		});
	}
};
