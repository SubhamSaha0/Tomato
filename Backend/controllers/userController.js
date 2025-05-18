import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"
import "dotenv/config"

// login user
const loginUser = async(req, res)=> {
    const {email, password} = req.body;
    try {
        const user = await userModel.findOne({email})

        if(!user) {
            res.json({success: false, message: "User doesn't exist"})
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            res.json({success: false, message: "Please enter the correct password"})
        }

        const token = createToken(user._id);
        res.json({success: true, token})

    } catch (error) {
        console.log(error)
        res.json({success: false, message: "Error"})
    }
}

const createToken = (id)=> {
    return jwt.sign({id}, process.env.JSW_SECRET)
}

// register user
const registerUser = async(req, res)=>{
    const {name, email, password} = req.body;
    try {
        // checking if the user already exists
        const exists = await userModel.findOne({email})
        if(exists){
            return res.json({success: false, message: "User already exists"})
        }

        // validation email format and stong password
        if(!validator.isEmail(email)){
            return res.json({success: false, message: "Please enter a valid email"})
        }
        if(password.length < 8) {
            return res.json({success: false, message: "Please enter a string password"})
        }

        // hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // creating a user
        const newUser = new userModel({
            name: name, 
            email: email, 
            password: hashedPassword 
        })

        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success: true, token})

    } catch (error) {
        console.log(error)
        res.json({success:false, message: "Error"})
    }
}

export {loginUser, registerUser}