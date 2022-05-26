const express = require('express');
const app = express();
const PORT = process.env.PORT || 80;

const todos = [
    { "id": 1, "text": "Boob", "isActive": false },
    { "id": 2, "text": "Name", "isActive": true },
    { "id": 3, "text": "Liza", "isActive": false }
]

app.get('/', (req, res) => {
    res.send(todos);
})

app.get('/trololo', (req, res) => {
    res.send('Home');
})

app.listen(PORT, (PORT) => {
    console.log(`Our express server is up on port ${PORT}`);
})