const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => res.render('index', {title: 'Home'}));
app.get('/about', (req, res) => res.render('about', {title: 'About'}));
app.get('/contact', (req, res) => res.render('contact', {title: 'Contact'}));
app.post('/contact/send', (req, res) => {
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'user',
			pass: 'password'
		}
	});

	var mailOptions = {
		from: 'Kifah Seif <kifahhk@gmail.com>',
		to: 'kifahhk@yahoo.com',
		subject: 'Contact',
		text: 'Name: '+req.body.name+'Email: '+req.body.email+ 'Message: '+req.body.message,
		html: '<ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>'
	};

	transporter.sendMail(mailOptions, function(error, info){
		if(error){
			console.log(error);
			res.redirect('/');
		} else {
			console.log('Message Sent: '+info.response);
			res.redirect('/');
		}
	});
});


app.listen(2200);
console.log('Server is running on Port', 2200);