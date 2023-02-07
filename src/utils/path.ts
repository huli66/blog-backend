const path = require('node:path');


export function absPath (dirPath: string) {
  return path.isAbsolute(dirPath) ? dirPath : path.resolve(process.cwd(), dirPath);
}