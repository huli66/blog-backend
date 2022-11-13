import fsp = require('node:fs/promises');
import path = require('node:path');
import { absPath } from './path';


export interface FileDataProps {
  id: string;
  [key: string]: any;
}

export async function getFileNames(dir = "./") {
  const location = absPath(dir);
  console.log(location);
  const files = await fsp.readdir(location);
  console.log('files', files);
  return files;
}

export async function getBlogInfo(
  dir = "./",
  id: string
) {
  const file = path.join(absPath(dir), `${id}`);
  console.log('info', file);
  const status = await fsp.stat(file);
  const data = await fsp.readFile(file, "utf-8");
  
  return {
    data,
    status,
  }
}

export async function getAllFiles(dir: string) {
  const files = await getFileNames(dir);
  const data = await Promise.allSettled(
    files.map((id) => getBlogInfo(dir, id))
  );

  return data.filter(a => a !== undefined);
}