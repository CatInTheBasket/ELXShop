var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var router = require('./routes/router');
var routeradmin = require('./routes/adminRoute');
const fileUpload = require('express-fileupload');
var app = express();

app.use(fileUpload());

app.use('/img', express.static(__dirname + '\\controller\\uploads'));

app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));
app.use(express.urlencoded({extended:true}));

app.use('/', routeradmin);

app.use('/', router);



app.set('view engine','ejs' )

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });