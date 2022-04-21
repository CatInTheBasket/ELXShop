var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();

app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));

app.get('/', function(req, res){
   if(req.session.page_views){
      req.session.page_views++;
      res.send("You visited this page " + req.session.page_views + " times with User: "+req.session.login);
   } else {
      req.session.login = "USER1";
      req.session.password = "PASSWORDNYA";
      req.session.page_views = 1;
      res.send("Welcome to this page for the first time!<button>A</button>");
   }
});
app.listen(3000);