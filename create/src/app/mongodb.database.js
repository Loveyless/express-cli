export default () => {
  return `{const mongoose = require("mongoose");
const mongo_config = require("config");

mongoose.connect(
  mongo_config.mongodb.url,
  { useUnifiedTopology: true, useNewUrlParser: true, config: { autoIndex: mongo_config.mongodb.autoIndex } },
  (err, res) => {
    if (err) console.log("MongoDB connection fail", err);
    console.log("MongoDB connection success");
  }
);

  `;
};
