import * as fluence from "fluence";

window.onload = function () {
	// locate button
	const helloBtn = document.querySelector('#hello');
	// locate username input text box
	const usernameInput = document.querySelector('#username');
	// locate output label
	const greetingLbl = document.querySelector('#greeting');

	// address to Fluence contract in Ethereum blockchain. Interaction with blockchain created by MetaMask or with local Ethereum node
	let contractAddress = "0x074a79f29c613f4f7035cec582d0f7e4d3cda2e7";

	// set ethUrl to `undefined` to use MetaMask instead of Ethereum node
	let ethUrl = "http://207.154.240.52:8545/"

	// application to interact with that stored in Fluence contract
	let appId = "6";

	// save fluence to global variable, so it can be accessed from Developer Console
	window.fluence = fluence;

	// create a session between client and backend application
	fluence.connect(contractAddress, appId, ethUrl).then((s) => {
		console.log("Session created");
		window.session = s;
		helloBtn.disabled = false;
	});


	// convert result to a string
	window.getResultString = function (result) {
		return result.result().then((r) => r.asString())
	};

	window.logResultAsString = function(result) {
		return getResultString(result).then((r) => console.log(r))
	}

	// set callback on button click
	helloBtn.addEventListener("click", send)
	
	// send username as a transaction and display results in grettingLbl
	function send() {
		const username = usernameInput.value.trim();
		let result = session.invoke(username);
		getResultString(result).then(function (str) {
			greetingLbl.innerHTML = str;
		});
	}

};
