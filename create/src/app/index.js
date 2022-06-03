export default () => {
  return `const express = require("express");
const app = express();
const config = require("config");

//Mysql connection   连接数据库 导入路由也会导致数据库启动 因为里面的controller下service引入了db来操作数据库
require("./mysql.database");

//MongoDB connection
if (config.mongodb.open) require("./mongodb.database");

//解析
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//express-jwt验证
app.use(require("./express-jwt"));

//注册路由
// const useRouter = require("../router");
// useRouter(app);

//注册路由(递归)
const eachFile = require("../router");
eachFile(app);

//错误路由
app.use((err, req, res, next) => {
  res.json({
    message: err.message,
    state: 400,
  });
});

//404
app.use((res, req) => {
  req.json({
    message: "请求不存在",
    static: 404,
  });
});

module.exports = app;

  `;
};
