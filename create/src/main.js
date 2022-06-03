export default () => {
  return `const app = require("./app");
const config = require("config");
const chalk = require("chalk");

console.log(chalk.gray("open the"), chalk.red("http://localhost:"+config.express.port ));
app.listen(config.express.port, (err) => {
  !err && console.log("express success port "+config.express.port);
});

  `;
};
