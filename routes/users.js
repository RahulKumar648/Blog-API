const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

// Update
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      req.body.password = req.body.password;
    }
    try {
      const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updateUser);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(401).json("you cannot update other account");
  }
});

// Delete

router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
        const user = await User.findById(req.params.id);
      try {
        await Post.deleteMany({username: user.username});
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("USer deleted");
      } catch (error) {
        res.status(500).json(error);
      }
    } catch (error) {
      res.status(404).json("user does not exist");
    }
  } else {
    res.status(401).json("you cannot delete other account");
  }
});

// get user
router.get('/:id',async (req, res)=> {
    try {
        const user = await User.findById(req.params.id);
        const {password,...other}=user._doc
        res.status(200).json(other);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;
