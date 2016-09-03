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


app.listen(2200);
console.log('Server is running on Port', 2200);