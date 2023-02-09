import * as express from "express";
import * as path from "path";
import { getAllFiles, getBlogInfo, getFileNames } from './utils/file';

const app = express();
const PORT = 4090;
const staticPath =  path.resolve(process.cwd(), "../blogs");

app.get('/', (req, res) => {
  res.status(200);
  res.send('Hello World!');
});

app.get('/blog/list', (req, res) => {
  getFileNames(staticPath).then(result => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200);
    res.json(result);
  });
});

app.get('/blog/datalist', (req, res) => {
  getAllFiles(staticPath).then(result => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200);
    res.json(result);
  });
});

app.get('/blog/detail', (req, res) => {
  const { fileName } = req.query;
  getBlogInfo(staticPath, fileName as string).then((result) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200);
    res.json(result);
  });
});

app.listen(PORT, () => {
  console.log(`${PORT} 端口启动...`);
  console.log(process.cwd());
});