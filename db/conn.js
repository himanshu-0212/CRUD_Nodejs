const mongoose = require("mongoose");

mongoose
  .connect("mongodb://0.0.0.0:27017/crud", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected scucesss");
  })
  .catch((e) => {
    console.log("Failed " + e);
  });

module.exports = mongoose.connection;
