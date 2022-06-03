// #!/usr/bin/env node

// 引入创建文件
import default_json from "./create/config/default.json.js";


import { fileURLToPath } from "url";
import fs from "fs";
import path, { sep } from "path";
//可执行命令行 如npm i
import { execa } from "execa";
//发光的log
import chalk from "chalk";
// inquirer 用户交互
import inquirer from "inquirer";
//造一个__filename __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//用户输入
//这里使用了esm模块支持顶层await 如果不支持的话就用立即执行函数async
const r = await inquirer.prompt([
  {
    type: "input",
    name: "packageName",
    message: "set package name",
    validate(val) {
      //校验
      if (val) return true;
      return "Please enter package name";
    },
  },
  // {
  //   type: "input",
  //   name: "port",
  //   default() {
  //     return 8080;
  //   },
  //   message: "set port number",
  // },

  //暂时默认就是mysql+mongo
  // {
  //   type: "checkbox",
  //   name: "middleware",
  //   choices: [
  //     { name: "jwt", checked: true },
  //     { name: "mongodb", disabled: true },
  //   ],
  // },
]);
// 获取用户输入 这里可以操作一下默认值
const inputConfig = {
  packageName: r.packageName,
  // port: r.port || 8080,
  // middleware: {},
};
//解构用户输入
const { packageName } = inputConfig;
// const {  } = inputConfig.middleware;

//把根路径抽离一下
function getRootPath() {
  return `./${packageName}`;
}
//先删除项目名的文件夹
// fs.rmSync(
//   `./${getRootPath()}`,
//   {
//     recursive: true,
//     force: true,
//   },
//   (err) => {
//     console.log(err.message);
//   }
// );


//累了不写了 太耗费脑子了
//#region

// 引入创建文件     创建的文件夹/文件名  文件名
// const eachFile = (file, fileName) => {
//   //判断是否是文件夹
//   const isDir = fs.statSync(file).isDirectory();

//   if (!isDir) {
//     //文件

//     console.log(getRootPath(), () => import(file));
//     // fs.writeFileSync(getRootPath(), () => import(file));
//   } else {
//     //文件夹就创建+递归
//     console.log(file); //C:\AA New Projects\express-cli\create

//     //用户的项目文件夹
//     const packageFile = file.match(/(?<=\\create)\S+$/g);
//     fs.mkdirSync(getRootPath() + packageFile);

//     fs.readdirSync(file).forEach((item) => {
//       //递归 如:eachFile(文件夹 / 文件名,文件名);
//       eachFile(file + sep + item, item);
//     });
//   }
// };
// // C:\...\express-cli\create
// eachFile(__dirname + sep + `create`);
//#endregion


//直接苦力活了
// 创建文件夹 hei
console.log(chalk.gray(`creating project files ...`));
//创建项目名的文件夹
fs.mkdirSync(getRootPath());

console.log(() => import("./create/config/default.json.js")());
fs.mkdirSync(`${getRootPath()}/config`);
fs.writeFileSync(`${getRootPath()}/config/default.json`, default_json());

fs.mkdirSync(`${getRootPath()}/key`);
fs.writeFileSync(`${getRootPath()}/key/index.js`, (() => import("./create/key/index")()));
fs.writeFileSync(`${getRootPath()}/key/private.key`, () => import("./create/key/private.key"));
fs.writeFileSync(`${getRootPath()}/key/public.key`, () => import("./create/key/public.key"));

fs.mkdirSync(`${getRootPath()}/src`);

    fs.mkdirSync(`${getRootPath()}/src/app`);
    fs.writeFileSync(`${getRootPath()}/src/app/express-jwt.js`, () => import("./create/src/app/express-jwt"));
    fs.writeFileSync(`${getRootPath()}/src/app/index.js`, () => import("./create/src/app/index"));
    fs.writeFileSync(`${getRootPath()}/src/app/mongodb.database.js`, () => import("./create/src/app/mongodb.database"));
    fs.writeFileSync(`${getRootPath()}/src/app/mysql.database.js`, () => import("./create/src/app/mysql.database"));

    fs.mkdirSync(`${getRootPath()}/src/controller`);
    fs.writeFileSync(`${getRootPath()}/src/controller/auth.controller.js`, () => import("./create/src/controller/auth.controller") );
    fs.writeFileSync(`${getRootPath()}/src/controller/user.controller.js`, () => import("./create/src/controller/user.controller") );

    fs.mkdirSync(`${getRootPath()}/src/middleware`);
    fs.writeFileSync(`${getRootPath()}/src/middleware/auth.middleware.js`, () => import("./create/src/controller/auth.middleware") );
    fs.writeFileSync(`${getRootPath()}/src/middleware/user.middleware.js`, () => import("./create/src/controller/user.middleware") );

    fs.mkdirSync(`${getRootPath()}/src/mongodb`);
    fs.writeFileSync(`${getRootPath()}/src/mongodb/test.js`, () => import("./create/src/mongodb/test"));

    fs.mkdirSync(`${getRootPath()}/src/router`);
    fs.writeFileSync(`${getRootPath()}/src/router/index.js`, () => import("./create/src/router/index"));
    fs.writeFileSync(`${getRootPath()}/src/router/auth.router.js`, () => import("./create/src/router/auth.router"));
    fs.writeFileSync(`${getRootPath()}/src/router/user.router.js`, () => import("./create/src/router/user.router"));

    fs.mkdirSync(`${getRootPath()}/src/service`);
    fs.writeFileSync(`${getRootPath()}/src/service.js`, () => import("./create/src/service"));

    fs.mkdirSync(`${getRootPath()}/src/utils`);
    fs.writeFileSync(`${getRootPath()}/src/utils/md5.js`, () => import("./create/src/utils/md5"));

    fs.writeFileSync(`${getRootPath()}/src/main.js`, () => import("./create/src/main"));

fs.writeFileSync(`${getRootPath()}/.gitignore.js`, "node_modules/");
fs.writeFileSync(`${getRootPath()}/package.json`, () => import("./create/package.json"));
fs.writeFileSync(`${getRootPath()}/README.md`, "*");
console.log(chalk.gray(`creating project files success`));

// 4. 安装依赖
console.log(chalk.gray(`install dependencies ...`));
await execa("npm i", {
  //设置执行路径
  cwd: getRootPath(),
  //执行的时候有个输出
  stdio: [2, 2, 2],
});

//善后工作
console.log(chalk.gray(`install success`));
console.log(chalk.gray(`cd ${getRootPath()}`));
console.log(chalk.gray(`mysql> CREATE DATABASE test_db or change ./config/default.json`));
console.log(chalk.gray(`npm start`));
