// #!/usr/bin/env node

import fs from "fs";
import { sep } from "path";
//可执行命令行 如npm i
import { execa } from "execa";
//发光的log
import chalk from "chalk";
// inquirer 用户交互
import inquirer from "inquirer";

// 创建文件
// import createIndexTemplate from "./createIndexTemplate.js";
// import createDbTemplate from "./createDbTemplate.js";
// import createPackagejson from "./createPackagejson.js";

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
fs.rmSync(
  `./${getRootPath()}`,
  {
    recursive: true,
    force: true,
  },
  (err) => {
    console.log(err.message);
  }
);

// 创建文件夹 hei
console.log(chalk.gray(`creating project files ...`));
//创建项目名的文件夹
fs.mkdirSync(getRootPath());

fs.mkdirSync(`${getRootPath()}/config`);
fs.writeFileSync(`${getRootPath()}/config/default.json`, "*");

fs.mkdirSync(`${getRootPath()}/key`);
fs.writeFileSync(`${getRootPath()}/key/index.js`, "*");
fs.writeFileSync(`${getRootPath()}/key/private.key`, "*");
fs.writeFileSync(`${getRootPath()}/key/public.key`, "*");

fs.mkdirSync(`${getRootPath()}/src`);
fs.mkdirSync(`${getRootPath()}/src/app`);
fs.mkdirSync(`${getRootPath()}/src/controller`);
fs.mkdirSync(`${getRootPath()}/src/middleware`);
fs.mkdirSync(`${getRootPath()}/src/mongodb`);
fs.mkdirSync(`${getRootPath()}/src/router`);
fs.mkdirSync(`${getRootPath()}/src/service`);
fs.mkdirSync(`${getRootPath()}/src/utils`);
fs.writeFileSync(`${getRootPath()}/src/main.js`, "*");

fs.writeFileSync(`${getRootPath()}/.gitignore`, "*");
fs.writeFileSync(`${getRootPath()}/package.json`, "*");

fs.writeFileSync(`${getRootPath()}/README.md`, "*");
console.log(chalk.gray(`creating project files success`));

// 4. 安装依赖
console.log(chalk.gray(`install dependencies ...`));
// await execa("npm i", {
//   //设置执行路径
//   cwd: getRootPath(),
//   //执行的时候有个输出
//   stdio: [2, 2, 2],
// });

//善后工作
console.log(chalk.gray(`install success`));
console.log(chalk.gray(`cd ${getRootPath()}`));
console.log(chalk.gray(`mysql> CREATE DATABASE test_db or change ./config/default.json`));
console.log(chalk.gray(`npm start`));
// console.log(chalk.gray(`open the`), chalk.red(`http://localhost:${port}/ \n`));
