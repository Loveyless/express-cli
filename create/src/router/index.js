export default () => {
  return `{const fs = require("fs");

// 递归写法
// sep根据系统来创建分割符号
const { sep } = require("path");

const eachFile = (app, fileName, file = __dirname) => {
  //判断是否是文件夹
  const isDir = fs.statSync(file).isDirectory();

  if (!isDir) {
    //是文件直接注册
    // console.log(file, "---"); //C:\AA New Projects\codeHub_mysql\src\router\authafnoiagbaoaiao\auth.router.js ---
    // console.log(fileName, "==="); //auth.router.js ===

    // index是不需要被导入的
    if (file.includes("index.js")) return;

    //把文件名前面提取出来 如:user.router.js => user
    let routerPath = fileName.replace(".router.js", "");

    //这里把auth文件名改为login方便发请求
    if (routerPath == "auth") routerPath = "login";

    //引入 如：C:\AA New Projects\codeHub_mysql\src\router\authafnoiagbaoaiao\auth.router.js
    const router = require(file);

    //注册 如：app.use("/login", "C:\AA New Projects\codeHub_mysql\src\router\authafnoiagbaoaiao\auth.router.js")
    app.use("/" + routerPath, router);
  } else {
    //文件夹是递归
    fs.readdirSync(file).forEach((item) => {
      //递归 如:eachFile(app, 文件名, 文件夹 / 文件名);
      eachFile(app, item, file + sep + item);
    });
  }
};

module.exports = eachFile;

  `;
};
