import React from "react";
import { Credentials } from "uport-credentials";
import bodyParser from "body-parser";
import ngrok from "ngrok";
import Home from './Home.js'
import { Button, Divider, Input, Segment, Label } from "semantic-ui-react";
import store from 'store'
import './App.css'


//const express = require("express");
const decodeJWT = require("did-jwt").decodeJWT;
const transports = require("uport-transports").transport;
const message = require("uport-transports").message.util;

class App extends React.Component {
	state = {
		credentials: "",
		users: "",
		status: "",
		loggedIn: false
	};

	Login = e => {
		e.preventDefault();

		const credentials = new Credentials({
			appName: this.state.credentials.appName,
			did: this.state.credentials.did,
			privateKey: this.state.credentials.privateKey
		});

		this.setState({
			status: "logged in!",
			loggedIn: true
		});
		console.log(this.state.loggedIn);
		// console.log(this.state.users);
	};

	createID = async e => {
		e.preventDefault();

		const credentials = await Credentials.createIdentity();
		credentials.appName = "Music that Mum's like";

		store.set('user', { credentials: credentials })

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

			<div className="container">
				<Segment basic textAlign='center'>

					<Input
						action={{ color: 'blue', content: 'Continue' }}
						iconPosition='left'
						placeholder='Password'
					/>

					<Divider horizontal>Or</Divider>

					<Button
						color='red'
						content='Log in with Google'
						icon='google'
						labelPosition='left'
					/>

					<Divider horizontal></Divider>

					<Button
						color='purple'
						content='Log in with uPort'
						icon='magnet'
						labelPosition='left'
						onClick={this.createID} />

					<div className="detail">



							<p>App Name : {this.state.credentials.appName}</p>
							<h4>DID : {this.state.credentials.did}</h4>
							<h4>Private Key : {this.state.credentials.privateKey}</h4>
							{/* <p>Status : {this.state.status}</p> */}

					</div>

				</Segment>
			</div>

		);
	}
}

export default App;
