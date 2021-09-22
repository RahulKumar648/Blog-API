const router = require('express').Router();

const User = require('../models/User')

// Register
router.post('/register', async (req, res) => {
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })
        const user = await newUser.save();
        const {password,...other} = user._doc;
        res.status(200).json(other);
    } catch (error) {
        res.status(500).json(error);
    } 
})

// login
router.post('/login',async (req, res) =>{
    try {
        const user = await User.findOne({username: req.body.username});
        !user && res.status(400).json('user not found');
        
        const confirm = req.body.password===user.password;
        !confirm && res.status(400).json('Worng passwod');

        const {password,...other} = user._doc;
        res.status(200).json(other);
    } catch (error) {
        res.status(500).json(error);
    }
})


module.exports = router;