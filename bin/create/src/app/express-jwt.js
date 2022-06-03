export default () => {
  return `const { expressjwt: expressJwt } = require("express-jwt");
const { PUBLIC_KEY } = require("../../key/index");
const config = require("config");

module.exports = expressJwt({
  secret: PUBLIC_KEY,
  algorithms: ["RS256"],
}).unless({
  //添加不需要token验证的路由
  path: config.expressJwt.exclude,
});

  `;
};
