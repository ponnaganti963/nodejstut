// const http = require('http');

// const hostname = '127.0.0.1';

const express = require('express');
const app = express();
app.use(express.static('public'))

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello, world all');
// });

app.get('/', (req, res) => {
    // res.send('Hello World!!')
    res.write('Hello, world!!!!');
    res.write('\nafdfasgsa');
    res.end('\nEnd!!');
})

app.get('/main', (req, res) => {
    console.log(__dirname);
    res.sendFile(__dirname + '/views/index.html');
})


const port = 3000;

app.listen(port,(req, res) => {
    console.log(`listening on port ${port}`);
});

// server.listen(port,() => {
//     console.log(`listening on port ${port} and hostname ${hostname}`);
// });