
<img width="635" alt="u1" src="https://user-images.githubusercontent.com/29616227/61584625-e91bf880-ab18-11e9-8427-08bdb51fc5fc.png">


# uport_auth
A simple log in application that allows a user to log into a website using their credentials stored on uport.


<!-- ![u_logo](https://user-images.githubusercontent.com/29616227/61584625-e91bf880-ab18-11e9-8427-08bdb51fc5fc.png) -->



# alternative to google, facebook and twitter
Create a one click authentification so you can keep your information decentralized

<img width="635" alt="u1" src="https://user-images.githubusercontent.com/29616227/61584629-f6d17e00-ab18-11e9-90f3-191e986df9ba.png">

<!-- ![logo_this_others](https://user-images.githubusercontent.com/29616227/61584629-f6d17e00-ab18-11e9-90f3-191e986df9ba.png) -->


# No need to enter an email address
An alternative to signing in with your email address
<img width="635" alt="u1" src="https://user-images.githubusercontent.com/29616227/61584653-795a3d80-ab19-11e9-97c4-c13fd259f3c6.png">

<!-- ![login](https://user-images.githubusercontent.com/29616227/61584653-795a3d80-ab19-11e9-97c4-c13fd259f3c6.png) -->

## built with react 
React 


## Minimum Viable Product



## Sneak Peak

```JSX

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

```





