const express = require("express");
const bcryptjs= require("bcryptjs");
const router = express.Router();
const { Users } = require("../models");
const {sign}= require ("jsonwebtoken")

router.post("/", async (req, res) => {
    const { username, password } = req.body;
    bcryptjs.hash(password, 10).then((hash) => {
      Users.create({
        username: username,
        password: hash,
      });
      res.json("SUCCESS");
    });
  })

router.post("/login",async(req,res)=> {
    const { username, password } =req.body;

    const user= await Users.findOne({where :{ username: username}});

    if (!user) res.json({ error: "User Doesn't Exist" });

    bcryptjs.compare(password, user.password).then((match) => {
        if (!match) res.json({ error: "Wrong Username And Password Combination" });
        
        const accessToken= sign({username:user.username ,id:user.id},"importantsecret");
    
        res.json(accessToken);
      });
    


});

module.exports = router;
