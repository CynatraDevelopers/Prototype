//All the routes or pages that anyone has access to i.e login, register or landing pages

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
// Load User model
const User = require("../../models/User");
const Userinfo = require("../../models/UserInfo");
const Jobs = require("../../models/Jobs")

// @route POST api/auth/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route POST api/auth/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 3600 // 1 hour in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

router.post("/userinfo", (req, res) => {

  const email = req.body.email;

  Userinfo.findOne({ email: email })
    .then(data => {
      if (data == null) {
        res.json({ email: "Email Not Found" })
      }
      else {
        res.json(data)
      }
    })
    .catch(err => res.status(400).json(err));

});

//test
router.get("/userfullinfo", (req, res) => {

  const email = req.body.email;

  Userinfo.find({})
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));

});

//test
router.post("/userprof", (req, res) => {

  const email = req.body.email;

  const newuser = new Userinfo({
    email: req.body.email
  });

  newuser.save()
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err))

});

router.get("/jobs", (req, res) => {

  Jobs.find({})
    .then(data => {
      if (data == null) {
        res.status(400).json({ Data: "No Data Found" })
      }
      else {
        res.json(data)
      }
    })
    .catch(err => res.status(400).json(err));

});

router.post("/postjobs", (req, res) => {

  const newJob = new Jobs({
    title: req.body.title,
    desc: req.body.desc,
    applied: 1
  });
  newJob
    .save()
    .then(data => {
      if (data == null) {
        res.status(400).json({ Data: "Cannot Post" })
      }
      else {
        res.json(data)
      }
    })
    .catch(err => res.status(400).json(err));

});

router.post("/applied", (req, res) => {

  const newJob = new Jobs({
    title: req.body.title,
    desc: req.body.desc
  });
  newJob
    .save()
    .then(data => {
      if (data == null) {
        res.status(400).json({ Data: "Cannot Post" })
      }
      else {
        res.json(data)
      }
    })
    .catch(err => res.status(400).json(err));

});


module.exports = router;