import jwt from "jsonwebtoken"
import dotenv from 'dotenv';
dotenv.config();

const jwtSecret = process.env.JSW_SECRET;


const authMiddleware = async(req, res, next)=> {
    const {token} = req.headers;
    if(!token){
        return res.json({success: false, message: "Not authorized, login first"})
    }
    try {
        const tokenDecod = jwt.verify(token, jwtSecret)
        req.body.userId = tokenDecod.id
        next()
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Failed to verify the user"})
    }
}

export default authMiddleware