const express = require('express');
const app = express();
var bodyParser=require('body-parser');
const port = 8080;
var opn= require('opn');
var routeLogin= require('./Routes/Login');
var routesalle=require('./Routes/salle')
var routeAjoutersalle=require('./Routes/Ajouter')
var routesupprimersalle=require('./Routes/supprimer')
var routemodifiersalle=require('./Routes/modifier')
// Setting up the public directory
// Configuration

app.use(bodyParser.urlencoded({    //obligatoire 
    extended: true
 }));                 
 
app.use(bodyParser.json());

app.use(express.static('public'))

// API'S

app.use(routeLogin);
app.use(routesalle);
app.use(routeAjoutersalle);
app.use(routesupprimersalle);
app.use(routemodifiersalle);
app.listen(port, () => {console.log(`listening on port ${port}!`);
//opn("http://localhost:8080/vue/login.html")
});