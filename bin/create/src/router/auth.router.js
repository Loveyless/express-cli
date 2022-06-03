export default () => {
  return `const authRouter = require("express").Router();

const { verifyLogin } = require("../middleware/auth.middleware");

const { login } = require("../controller/auth.controller");

authRouter.post("/", verifyLogin, login);

//测试token是否有用
authRouter.get("/islogin", (req, res) => {
  res.json({
    message: "查询成功",
    status: 200,
    auth: req.auth,
  });
});

module.exports = authRouter;

  `;
};
