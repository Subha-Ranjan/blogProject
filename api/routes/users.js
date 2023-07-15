const router = require("express").Router(); // Router method of mongoose
const User = require("../models/User");

//UPDATE
router.put("/:id", async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json(err);
  }
});



//LOGIN -

router.post("/login", async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
