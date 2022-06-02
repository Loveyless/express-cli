export default () => {
  return `{const mongoose = require("mongoose");

const testRule = mongoose.Schema({});

module.exports = mongoose.model("test", testRule);

  `;
};
