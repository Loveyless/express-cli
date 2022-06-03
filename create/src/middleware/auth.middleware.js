export default () => {
  return `const { isExist, isLogin } = require("../service/user.service");
const md5password = require("../utils/md5");

const verifyLogin = async (req, res, next) => {
  const { username, password } = req.body;

  //用户名密码不能为空
  if (!username || !password) return next(new Error("用户名或密码不能为空"));

  //用户是否存在
  const result = await isExist(username);
  if (!result.length) return next(new Error("用户不存在"));

  //判断帐号密码是否正确(加密)
  const result2 = await isLogin(username, md5password(password));
  if (!result2.length) return next(new Error("用户名或密码不正确"));

  //添加一个id作为负载
  req.body.id = result2[0].id;
  next();
};

module.exports = { verifyLogin };

  `;
};
