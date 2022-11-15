const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const userSchema = require("../Schema/user");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");

// register 
router.post("/register", async (req, res) =>{
    const { username, password, email } = req.body;

    try {
        const hash = await bcrypt.hash(password, 10);
        
        const data = await userSchema.create({
            username: username,
            password: hash,
            email: email,
        });

        if (data){
            res.send(data);
        }else{
            res.send("error");
        }
        
    } catch (err){
        res.send(err);
    }

});

//login
router.post("/login", async (req, res) => {
    const { username, password } = req.body;

try{
    const checkUsername = await userSchema.findOne({
        username: username,
    });

    if (checkUsername){
        const checkPass = await bcrypt.compare(password, checkUsername.password);
    
    if(checkPass) {
      const token = jsonwebtoken.sign(
      {
        username: checkUsername.username,
      },

      process.env.JWT_KEY);

    res.send(token);
    } else {
        res.send ("salah password");
    }

    } else {
        console.log("salah username");
    }

} catch (err) {
    res.send("akun tidak ditemukan");
}
});

module.exports = router;