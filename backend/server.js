const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
//const users = require("./routes/api/users");
const auth = require("./routes/api/auth");
const db = require("./config/keys").mongoURI;

// Bodyparser middleware to parse the request
//Can use express instead of bodyparser if bodyparser gives a warning of being deprecated
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Connect to MongoDB

mongoose.set('useFindAndModify', false);
//Make sure local mongod server is running to use localhost mongodb server. Later connected to mongo atlas for testing
mongoose
  .connect(
    db,
    { useNewUrlParser: true,
      useUnifiedTopology: true  }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

  //initialise passport dependency
  app.use(passport.initialize());
    
  //passport configuration to jsonwebtoken strategy
  require("./config/passport")(passport);

  //api route for registration and login
  app.use("/api/auth",auth);

  //passport.authenticate("jwt",{session:false}) should be used later to secure routes
  //app.use("/api/users",users);

  //port configuration
const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));