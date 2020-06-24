const express = require('express');
const Route = require('./router');
const handlebars = require('express-handlebars');

const app = express();

app.use(express.static('src/public'));


const hbs = handlebars.create({
    extname: 'handlebars',
    defaultLayout: 'default',
    layoutsDir: __dirname+'/view',

})
    
app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');
app.set('views', __dirname+'/view');

app.use(Route);

app.listen(3333);