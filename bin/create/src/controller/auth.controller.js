export default () => {
  return `const jwt = require("jsonwebtoken");
const { PRIVATE_KEY } = require("../../key/index");
const config = require("config");

class loginController {
  async login(req, res, next) {
    const { id, username } = req.body;

    //添加负载 返回token
    const token = jwt.sign({ id, username }, PRIVATE_KEY, {
      algorithm: "RS256",
      //过期时间
      expiresIn: config.jwt.period_of_validity,
    });
    res.json({
      message: "登录成功",
      username,
      id,
      token,
      status: 200,
    });
  }
}

module.exports = new loginController();

  `;
};
