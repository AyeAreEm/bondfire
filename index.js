const express = require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('views'));

app.get('/', (_req, res) => {
    res.render('index');
});

app.get('/episodes', (_req, res) => {
    res.render('episodes');
})

app.get('/wellbeing', (_req, res) => {
    res.render('wellbeing');
})

const port = process.env.PORT || 5000;
app.listen(port);