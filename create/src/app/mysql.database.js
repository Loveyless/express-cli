export default () => {
  return `const mysql = require("mysql2");
const config = require("config");
const { mysql: mysql_config } = config;

//连接池
const db = mysql.createPool({
  host: mysql_config.host,
  port: mysql_config.port,
  database: mysql_config.database,
  user: mysql_config.user,
  password: mysql_config.password,
  waitForConnections: true,
  connectionLimit: 10, //最多会建立几个连接
  queueLimit: 0, //在getConnection返回错误之前，池将排队的最大连接请求数。如果设置为O，则对排队的连接请求数量没有限制。(默认值:0)
});

//测试连接 会拿到错误和connection参数
db.getConnection((err, conn) => {
  if (err) {
    console.log("Mysql connection fail", err);
    return;
  }
  conn.connect((err) => {
    if (!err) {
      console.log("Mysql connection success");
    } else {
      console.log("Mysql connection fail", err);
      return;
    }
  });
  //这里可以创建表 初始化一下
  //创建user表
  conn.execute( " CREATE TABLE IF NOT EXISTS users( id INT PRIMARY KEY AUTO_INCREMENT, username VARCHAR(30) NOT NULL UNIQUE, password VARCHAR(50) NOT NULL, createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP ) ",
    (err, result) => {
      // console.log(result);
      console.log("Mysql create user table");
      if (err) {
        console.log("Mysql create user table fail", err);
        return;
      }
    }
  );
});

module.exports = db.promise(); //有一种异步写法是.promise()所以这里加了别的地方就不用加了

//这里加个promise()就是为了让后面的操作可以使用then
// db.promise().execute("SELECT * FROM products p WHERE p.id = ?", [5])
//   .then(([result, fields]) => {
//     console.log(result);
//   });

  `;
};
