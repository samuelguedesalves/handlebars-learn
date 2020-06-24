const express = require('express');

const Route = express.Router();

function fakeApi(){
    return 'Handlebars';
}

Route.get('/', (req, res) => {
    return res.render('default', { layout: 'default', title: fakeApi});
});

Route.get('/about', (req, res) => {
    return res.render('about', { layout: 'about'});
});

module.exports = Route;