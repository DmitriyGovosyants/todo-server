const express = require('express');
const app = express();
const PORT = process.env.PORT || 80;

app.get('/', (req, res) => {
    res.send('Home page');
})

app.get('/trololo', (req, res) => {
    res.send('Home');
})

app.listen(PORT, () => {
    console.log('start');
})