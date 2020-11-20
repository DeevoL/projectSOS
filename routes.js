var express = require('express');
var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
const path = require('path');

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 2109);
app.use(express.static(path.join(__dirname, '/public')));



app.get('/',function(req,res){ 
  res.render('home')
});

app.get('/gallery',function(req,res){
  res.render('gallery')
});

app.get('/help',function(req,res){
  res.render('help')
});

app.get('/random',function(req,res){
  res.render('random')
});

app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
    });