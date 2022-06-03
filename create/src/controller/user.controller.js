export default () => {
  return `const service = require("../service/user.service");

//这里就是放处理逻辑的
class UserController {
  async create(req, res) {
    const { username, password } = req.body;
    //调用service中的创建用户方法
    await service.create(username, password);

    res.json({
      message: "注册成功",
      status: 200,
    });
  }
}

module.exports = new UserController();

  `;
};
