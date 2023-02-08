import * as path from "path";

/**
 * 相对路径转换为绝对路径
 * @param dirPath 输入指定相对路径
 * @returns 输出对应绝对路径
 */
export function absPath (dirPath: string) {
  return path.isAbsolute(dirPath) ? dirPath : path.resolve(process.cwd(), dirPath);
}