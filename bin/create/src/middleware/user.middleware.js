export default () => {
  return `const { isExist } = require("../service/user.service");
const md5password = require("../utils/md5");

//验证用户
const verifyUser = async (req, res, next) => {
  const { username, password } = req.body;

  //用户名密码不能为空
  if (!username || !password) return next(new Error("用户名或密码不能为空"));

  //用户是否存在
  const result = await isExist(username);
  if (result.length) return next(new Error("用户名已被注册"));

  next();
};

//加密密码
const handlePassword = async (req, res, next) => {
  let { password } = req.body;

  //加密密码
  req.body.password = md5password(password);

  next();
};

module.exports = {
  verifyUser,
  handlePassword,
};

  `;
};
