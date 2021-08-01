const router = require("express").Router();
const User = require("../models/User");

router.get("/", (req,res)=>{
    res.send("hey its auth route");
});

//REGISTER
router.get("/register", async (req,res)=>{
    const user = await new User({
        username:"john",
        email:"johnny@gmail.com",
        password:"123456",
    })

    await user.save();
    res.send("ok");
});

module.exports = router;