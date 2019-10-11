const http = require('http');

var fs = require('fs');

var express = require('express');
var app = express();

app.use("/static", express.static(__dirname + '/assets'));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render("index");
});

app.get('/contact', (req, res) => {
    res.render("contact")

});
app.use(function (req, res, next) {
    console.log('comme un 404');
    res.status(404).render("404");
});
//manque 404

app.listen(3000);
console.log("c'est parti");