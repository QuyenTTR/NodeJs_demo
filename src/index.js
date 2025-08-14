const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded());
app.use(express.json());

app.use(morgan('combined'));

app.engine('hbs', handlebars.engine({
    extname : ".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', './src/resources/views');



app.get('/hello-world', (req, res) => {
    res.send('Hello World!');
})

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/search', (req, res) => {
    res.render('search');
})

app.get('/news', (req, res) => {
    res.render('news');
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
