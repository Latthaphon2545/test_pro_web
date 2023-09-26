const express = require('express');
const path = require('path');
const router = require('./routes/myrouter');
const e = require('express');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.use(router);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});