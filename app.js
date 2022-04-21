var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();

app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));
app.set('view engine','ejs' )
app.get('/', function(req, res){
   console.log(req.query.username)
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
      let message="You visited this page " + req.session.page_views + " times with User: "+req.session.login;
      res.render('home',{message});
   } else {
      req.session.page_views = 1;
      res.send("Welcome to this page for the first time!");
   }
})

app.get('/logout',function(req,res){
   req.session.destroy();
   res.redirect('/');
})
app.listen(3000);