const express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
const ngrok = require("ngrok");
const decodeJWT = require("did-jwt").decodeJWT;
const { Credentials } = require("uport-credentials");
const transports = require("uport-transports").transport;
const message = require("uport-transports").message.util;

let endpoint = "";
const app = express();
app.use(bodyParser.json({ type: "*/*" }));

//setup Credentials object with newly created application identity.
const credentials = new Credentials({
	appName: "Login Example",
	did: "did:ethr:0x31486054a6ad2c0b685cd89ce0ba018e210d504e",
	privateKey:
		"ef6a01d0d98ba08bd23ee8b0c650076c65d629560940de9935d0f46f00679e01"
});

/* GET users listing. */
router.get("/", function(req, res, next) {
	// Comment out this line:
	//res.send('respond with a resource');

	// And insert something like this instead:
	credentials
		.createDisclosureRequest({
			requested: ["name"],
			notifications: true,
			callbackUrl: endpoint + "/callback"
		})
		.then(requestToken => {
			console.log(decodeJWT(requestToken)); //log request token to console
			const uri = message.paramsToQueryString(
				message.messageToURI(requestToken),
				{ callback_type: "post" }
			);
			const qr = transports.ui.getImageDataURI(uri);
			res.json([
				{
					id: 1,
					username: requestToken
				}
			]);
		});
});

module.exports = router;
