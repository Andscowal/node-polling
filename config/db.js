const mongoose = require("mongoose");

//Map Global Promises
mongoose.Promise = global.Promise;

//Mongoose Connect
mongoose
  .connect("mongodb://yourmlabstring")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));
