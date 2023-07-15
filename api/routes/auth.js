const router = require("express").Router(); // Router method of mongoose
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    // const salt = await bcrypt.genSalt(10);
    // const hashedPass = await bcrypt.hash(req.body.password, salt);.

    console.log(req.body.username);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      profilePic: req.body.profilePic,
    });

    const saveUser = await newUser.save();
    res.status(200).json(saveUser); // pls use - app.use(express.json());
  } catch (err) {
    res.status(500).json("Something went Wrong");
  }
});

//
router.get("/", async (req, res) => {
  const getUser = await User.find();
  res.json(getUser);
});

//LOGIN -
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("Wrong credentials!");

    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("Wrong credentials!");

    const { password, ...others } = user._doc; // ???????? 35:
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
