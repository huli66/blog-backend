import * as express from "express";
import * as path from "path";
import { getAllFiles, getBlogInfo, getFileNames } from './utils/file';

const app = express();
const PORT = 4090;
const staticPath =  path.resolve(process.cwd(), "./blogs");

app.get('/', (req, res) => {
  console.log("result");
  res.status(200);
  res.send('Hello World!');
});

app.get('/blog/list', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200);
  console.log("访问列表");
  getFileNames(staticPath).then(result => {
    res.json({
      statusCode: "000",
      data: result,
      message: null,
    });
  }).catch((err) => {
    console.log("Error", err);
    res.json({
      statusCode: "001",
      data: null,
      message: `staticPath: ${staticPath} is Not Found`,
    });
  });
});

app.get('/blog/datalist', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200);
  console.log("/blog/datalist")
  getAllFiles(staticPath).then(result => {
    res.json({
      statusCode: "000",
      data: result,
      message: null,
    });
  }).catch((err) => {
    console.log("Error", err);
    res.json({
      statusCode: "001",
      data: null,
      message: `staticPath: ${staticPath} is Not Found`,
    });
  });
});

app.get('/blog/detail', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200);
  const { fileName } = req.query;
  console.log(`/blog/detail?fileName=${fileName}`);
  getBlogInfo(staticPath, fileName as string).then((result) => {
    res.json({
      statusCode: "000",
      data: result,
      message: null,
    });
  }).catch((err) => {
    console.log("Error", err);
    res.json({
      statusCode: "001",
      data: null,
      message: `FileName: ${fileName} is Not Found`,
    });
  });
});

app.listen(PORT, () => {
  console.log(`${PORT} 端口启动...`);
  console.log(process.cwd());
});