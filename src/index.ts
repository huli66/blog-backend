const express = require("express");
import { getAllFiles, getBlogInfo, getFileNames } from './utils/file';
const app = express();


app.get('/', (req, res) => {
  res.status(200);
  res.send('Hello World!');
});

app.get('/blog/list', (req, res) => {
  getAllFiles('./static').then(result => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200);
    res.json(result);
  });
});

app.get('/blog/detail', (req, res) => {
  getBlogInfo('./static', '装饰器.md').then((result) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200);
    res.json(result);
  });
});

app.listen(4100, () => {
  console.log('4100 端口启动...');
});