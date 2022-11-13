import express = require('express');
import { getAllFiles, getFileNames } from './utils/file';
const app = express();


app.get('/', (req, res) => {
  res.status(200);
  res.send('Hello World!');
});

app.get('/blog', (req, res) => {
  console.log(req.url, 'new');
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.status(200);
  res.send('hello');
})

app.get('/blog/list', (req, res) => {
  console.log(req.url);
  getAllFiles('./static').then(result => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200);
    console.log('result', result);
    res.json(result);
  });
});

app.get('/blog/[id]', (req, res) => {

});

app.get('/blog/detail', (req, res) => {
  const query = req.query;
})

app.listen(4100, () => {
  console.log('4100 端口启动...');
});