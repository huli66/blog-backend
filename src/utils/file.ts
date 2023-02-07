const fsp = require("fs/promises");
const path = require("path");
import { absPath } from './path';


export interface FileDataProps {
  id: string;
  [key: string]: any;
}

export async function getFileNames(dir = "./") {
  const location = absPath(dir);
  const files = await fsp.readdir(location);
  return files;
}

export async function getBlogInfo(
  dir = "./",
  id: string
) {
  const file = path.join(absPath(dir), `${id}`);
  const status = await fsp.stat(file);
  const data = await fsp.readFile(file, "utf-8");
  
  return {
    data,
    status,
    id,
  }
}

export async function getAllFiles(dir: string) {
  const files = await getFileNames(dir);
  const data = await Promise.allSettled(
    files.map((id: string) => getBlogInfo(dir, id))
  );

  return data.filter(a => a !== undefined);
}