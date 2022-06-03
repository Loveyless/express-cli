export default () => {
  return `const md5 = require("md5");

const md5password = (password) => {
  //返回md5加密后的密码
  return md5(password);
};

module.exports = md5password;

// //crypto加密(鉴于都是md5所以我就直接用md5库了
// const crypto = require('crypto');

// const md5password = (password) => {
//   //选择加密算法
//   const md5 = crypto.createHash("md5");
//   //用算法进行加密 digest()就是拿到2进制buffer digest(hex)意思是拿到16进制字符串
//   return md5.update(password).digest("hex");
// }

  `;
};
