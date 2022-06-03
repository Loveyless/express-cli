export default () => {
  return `const userRouter = require("express").Router();

//中间件
const { verifyUser, handlePassword } = require("../middleware/user.middleware");

//逻辑
const { create } = require("../controller/user.controller");

//只负责处理注册路由 具体的逻辑放在controller里面
userRouter.post("/", verifyUser, handlePassword, create);

module.exports = userRouter;

  `;
};
