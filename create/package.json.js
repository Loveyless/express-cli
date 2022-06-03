import ejs from "ejs";
import fs from "fs";
import path, { sep } from "path";
import { fileURLToPath } from "url";

//因为用的esm 所以没有__dirname 只能自己造
// 然后使用path.resolve() 方法将路径或路径片段的序列解析为绝对路径。
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 传一个项目名
export default (packageName) => {
  //把ejs内容拿过来
  const Template = fs.readFileSync(path.resolve(__dirname, "./package.json.ejs"));

  //这里需要变为字符串
  const code = ejs.render(Template.toString(), { packageName });

  return code;
};
