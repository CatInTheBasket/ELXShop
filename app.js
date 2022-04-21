var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();

app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));
app.set('view engine','ejs' )
app.get('/', function(req, res){
   console.log(req.query.username)
   if(!req.query.username || !req.query.password || req.query.username==""||req.query.password==""){
      res.render('formLogin');
   }else{
      req.session.login = req.query.username;
      req.session.password = req.query.password;
      let role= req.query.role;
      if(!role){
         role="User"
      }else{
         if(role=="Admin"){
            req.session.role = role;
            res.redirect('/homeAdmin');
         }else{
            req.session.role = "User";
            res.redirect('/home');
         }
      }
   }
   
});
app.get('/register',function(req,res){
   res.render('formRegister');
})
app.post('/register',function(req,res){

   res.render('formRegister');
})
app.get('/homeAdmin',function(req,res){

   if(req.session.role=="Admin"){
      let message="Welcome " + req.session.role + " "+req.session.login;
      res.render('homeAdmin',{message});
   } else {
      res.redirect("/home");
   }
})

app.get('/home',function(req,res){
   if(req.session.role=="Admin"){
      res.redirect("/homeAdmin");
   }else{
      if(req.session.page_views){
         req.session.page_views++;
         let message="You visited this page " + req.session.page_views + " times with User: "+req.session.login;
         res.render('home',{message});
      } else {
         req.session.page_views = 1;
         res.send("Welcome to this page for the first time!");
      }
   }
   
})

app.get('/logout',function(req,res){
   req.session.destroy();
   res.redirect('/');
})
app.listen(3000);