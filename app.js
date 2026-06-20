//include Express
const express = require('express');

//server will listen on this port
const port = 3000;

//create instance of Express app
const app = express();

//ejs is templating engine
app.set('view engine','ejs');

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname + '/public'));

//index/home URL
app.get('/',(req,res)=>{
    let title = "Home Page";
    res.render('pages/index',{'title': title});
});

//about URL
app.get('/about',(req,res)=>{
    let title = "About Page";
    res.render('pages/about',{'title': title});
});

//projects URL
app.get('/projects',(req,res)=>{
    let title = "My Projects";
    res.render('pages/projects',{'title': title});
});

//colombia URL
app.get('/colombia',(req,res)=>{
    let title = "Fun Facts About Colombia";
    res.render('pages/colombia',{'title': title});
});

//Set server to listen for requests
app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});

