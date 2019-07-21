
<p align='center'> 
<img width="635" alt="u1" position="center" src="https://user-images.githubusercontent.com/29616227/61584625-e91bf880-ab18-11e9-8427-08bdb51fc5fc.png">
</p>


# uport_auth
uPort Auth or simply 'u' is a simple authentication application built on top of uPort identity system. It allows a user to log in with a click of a button and bypass logging in through a centralized third party.

This project is within the usability and dev tooling category for consensus's hackathon.

This Application is a response to the convenient 'one click' log in offered through third party companies, however since this authentication is built on top of blockchain technology it means the user's information isn't stored, used or sold.

Having a lightweight extension that developers can incorporate into their applications will hopefully lead to greater adoption of the technology.

Blockchain technology is posed to solve many of the problems currently facing authentication. Creating lightweight apps that make it possible to start implementing this technology is an important step for the space.





## Wireframes and Ideas
an alternative to google, facebook and twitter
Create a one click authentification so you can keep your information decentralized

<p align='center'> 
<img width="635" alt="u1" src="https://user-images.githubusercontent.com/29616227/61584629-f6d17e00-ab18-11e9-90f3-191e986df9ba.png">
</p>


# No need to enter an email address
An alternative to signing in with your email address
<p align='center'> 
<img width="635" alt="u1" src="https://user-images.githubusercontent.com/29616227/61584653-795a3d80-ab19-11e9-97c4-c13fd259f3c6.png">
</p>


## built with react 
React front end running on an express server


## Minimum Viable Product I
- Create a mock up that uses the uPort login, stores a web token and set state as logged in. 



### Minimum Viable Product II
- Create an npm package that a developer can use to implement the u Button in their applications





## Sneak Peak

```JSX

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
		credentials.appName = "App Name";

		store.set('user', { credentials: credentials })

		this.setState({
			credentials: credentials
		});
	};

	async componentDidMount() {
		fetch("/users")
			.then(res => res.json())
			.then(users => {

```

## npm i uport_auth
Try the npm package! 
npm start
https://www.npmjs.com/package/uport_auth





