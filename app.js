var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var router = require('./routes/adminRoute');
const fileUpload = require('express-fileupload');
var app = express();

app.use(fileUpload());

app.use('/img', express.static(__dirname + '\\controller\\uploads'));

app.use(cookieParser());

app.use(express.urlencoded({extended:true}));

app.use('/', router);

app.use(session({secret: "Shh, its a secret!"}));

app.set('view engine','ejs' )

app.listen(3000);