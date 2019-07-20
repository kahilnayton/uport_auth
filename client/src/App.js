import React from "react";
import { Credentials } from "uport-credentials";
import bodyParser from "body-parser";
import ngrok from "ngrok";
import { Button } from "semantic-ui-react";
//const express = require("express");
const decodeJWT = require("did-jwt").decodeJWT;
const transports = require("uport-transports").transport;
const message = require("uport-transports").message.util;

class App extends React.Component {
	state = {
		credentials: ""
	};

	Login() {
		console.log("we are loggin in");
	}

	async componentDidMount() {
		this.setState({
			credentials: await Credentials.createIdentity()
		});
	}

	render() {
		return (
			<div>
				<Button onClick={this.Login}>Login</Button>
				<div>{this.state.credentials.privateKey}</div>
			</div>
		);
	}
}

export default App;
