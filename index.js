const express = require('express');
const path = require('path');

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'index.html'));
})

app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'about.html'));
})

app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'contact-me.html'));
})

app.listen(3000, () => {
    console.log('App listening on port 3000')
});