const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send("User already exists");
        }

        // Create a new user
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).send("User Registered Successfully");
    } catch (error) {
        console.error("Error during user registration:", error);
        res.status(500).send("Internal Server Error");
    }
});


router.post("/login",async(req, res)=>{
    const {email,password} = req.body

    try{
        const user =await User.findOne({email: email, password : password})
        if(user){
            const temp ={
                name: user.name,
                email:user.email,
                isAdmin: user.isAdmin,
                _id: user._id,
            }

            res.send(temp)
        }
        else{
            return res.status(400).json({message : 'Login failed!!!'});
        }
    }catch (error){
        return res.status(400).json({error});
    }
});

module.exports=router