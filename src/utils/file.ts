import { Stats } from "fs";
import * as fsp from "fs/promises";
import * as path from "path";
import { absPath } from './path';


export interface FileDataProps {
  id: string;
  [key: string]: any;
}

/**
 * 读取指定目录下所有文件名
 * @param dir 指定文件夹路径名
 * @returns [ 'markdown相关.md', '装饰器.md', '文件夹' ]
 */
export async function getFileNames(dir = "./"): Promise<Array<string>> {
  const location = absPath(dir);
  const files = await fsp.readdir(location);
  return files;
}

export interface BlogInfoProps {
  data: string;
  status: Stats;
  fileName: string;
}

/**
 * 读取指定文件的状态和数据
 * @param dir 文件所在目录
 * @param fileName 文件名
 * @returns
 */
export async function getBlogInfo(
  dir = "./",
  fileName: string
): Promise<BlogInfoProps> {
  const file = path.join(absPath(dir), `${fileName}`);
  const status = await fsp.stat(file);
  const data = await fsp.readFile(file, "utf-8");
  
  return {
    data,
    status,
    fileName,
  }
}

/**
 * 获取指定目录下所有文件数据
 * @param dir 指定目录
 * @returns 过滤后的数据
 */
export async function getAllFiles(dir: string) {
  const files = await getFileNames(dir);
  const data = await Promise.allSettled(
    files.map((fileName: string) => getBlogInfo(dir, fileName))
  );
  const result = data.filter(a => a !== undefined);
  return result;
}