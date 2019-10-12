import { Meteor } from 'meteor/meteor';  
const express = require('express');
import { HTTP } from 'meteor/http';
const bodyParser = require("body-parser");


let app = express();

export async function setupApi() {
	
	// app.use(cors());
	app.use(bodyParser.json()); 
	app.use(bodyParser.urlencoded({ extended: true }));


	app.get('/api/v1/test', (req,res) => {
		var content = req.body;
		console.log(content);
		res.status(200).send('Success');
    });

    WebApp.connectHandlers.use(app);
}