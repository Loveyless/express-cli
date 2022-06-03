export default () => {
  return `const app = require("./app");
const config = require("config")

app.listen(config.express.port, (err) => {
  !err && console.log("express success port"+config.express.port);
});

  `;
};
