const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded());
app.use(express.json());

app.use(morgan('combined'));

app.engine('hbs', handlebars.engine({
    extname : ".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', './src/resources/views');

route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
