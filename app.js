var express = require('express');
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

var routes = require("./routes/index");
var port = process.env.PORT || 3000;
var app = express();
var fs = require("fs");

// Vistas
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Parseo de los resultados
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//Estaticos
app.use(express.static(path.join(__dirname, "node_modules/angular")));

app.use('/', routes);
app.use('/Log', routes);


app.listen(port, function(){
    console.log(`Listos en el puerto ${port}`);
});

module.exports = app;