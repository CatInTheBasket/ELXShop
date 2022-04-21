var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();

app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));
app.set('view engine','ejs' )
app.get('/', function(req, res){
   if(!req.query.username || !req.query.password ){
      res.render('formLogin');
   }else{
      req.session.login = req.query.username;
      req.session.password = req.query.password;
      res.redirect('/home');
   }
   
});
app.get('/home',function(req,res){

   if(req.session.page_views){
      req.session.page_views++;
      res.send("You visited this page " + req.session.page_views + " times with User: "+req.session.login);
   } else {
      req.session.page_views = 1;
      res.send("Welcome to this page for the first time!");
   }
})
app.listen(3000);