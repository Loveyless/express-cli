export default () => {
  return `const mysql = require("../app/mysql.database");

//这里存放对数据库进行操作的逻辑

class UserService {
  //用户名是否存在
  async isExist(username) {
    const [result] = await mysql.execute( " SELECT * FROM users WHERE username = ? ",
      [username]
    );
    return result;
  }
  //添加用户
  async create(username, password) {
    const [result] = await mysql.execute( " INSERT INTO users (username,password) VALUES (?,?) ",
      [username, password]
    );
    return result;
  }
  //判断帐号密码是否正确(加密)
  async isLogin(username, password) {
    const [result] = await mysql.execute( " SELECT * FROM users WHERE username = ? AND password = ? ",
      [username, password]
    );
    return result;
  }
}

module.exports = new UserService();

  `;
};
