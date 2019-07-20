import React from "react";
import { Credentials } from "uport-credentials";
import bodyParser from "body-parser";
import ngrok from "ngrok";
import { Button, Label } from "semantic-ui-react";
//const express = require("express");
const decodeJWT = require("did-jwt").decodeJWT;
const transports = require("uport-transports").transport;
const message = require("uport-transports").message.util;

class App extends React.Component {
	state = {
		credentials: "",
		users: "",
		status: ""
	};

	Login = e => {
		e.preventDefault();

		const credentials = new Credentials({
			appName: this.state.credentials.appName,
			did: this.state.credentials.did,
			privateKey: this.state.credentials.privateKey
		});

		this.setState({
			status: "logged in!"
		});
		// console.log(this.state.credentials);
		// console.log(this.state.users);
	};

	createID = async e => {
		e.preventDefault();

		const credentials = await Credentials.createIdentity();
		credentials.appName = "App Name";

		this.setState({
			credentials: credentials
		});
	};

	async componentDidMount() {
		fetch("/users")
			.then(res => res.json())
			.then(users => {
				console.log(users);
				this.setState({ users });
			});
	}

	render() {
		return (
			<div>
				<Button onClick={this.createID}>Create Uport ID</Button>
				<Button onClick={this.Login}>Log into Uport</Button>
				<ul>
					<li>App Name : {this.state.credentials.appName}</li>
					<li>did : {this.state.credentials.did}</li>
					<li>Private Key : {this.state.credentials.privateKey}</li>
					<li>Status : {this.state.status}</li>
				</ul>
			</div>
		);
	}
}

export default App;
