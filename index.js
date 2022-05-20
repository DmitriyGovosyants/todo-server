const express = require('express');
const app = express();
const PORT = process.env.PORT || 80;

app.get('/', (req, res) => {
    res.send(__dirname + '/src/data.json');
})

app.get('/trololo', (req, res) => {
    res.send('Home');
})

app.listen(PORT, (PORT) => {
    console.log(`Our express server is up on port ${PORT}`);
})