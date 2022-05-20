const express = require('express');
const app = express();
const PORT = process.env.PORT || 80;

app.get('/', (req, res) => {
    res.send('Home page');
})

app.listen(PORT, () => {
    console.log('start');
})