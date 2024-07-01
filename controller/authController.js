const User = require("../model/authModel");
const {hashPassword,comparePassword} = require("../utils/authUtils");
const jwt = require("jsonwebtoken");


//! Register User 

exports.registerUser = async (req , res) => {
    try {
        
        //! Create User
        const{ email,password,name,gender,profilePicture } = req.body;
        //!Checkin user is existing
        const existUser = await User.findOne({email});
        if(existUser){
            return res.status(400).json({
                message:"User already exist",
                success: false,
                statusCode:0,
            })
        }
        
        // ! Validation

        if(!email || !password || !name || !gender){
            return res.status(400).json({
                message:"Please fill all the fields",
                success: false,
                statusCode:0,
            });
        }

        //! password Condition

        if(password.length < 6){
            return res.status(400).json({
                message:"Password must be atleast 6 characters",
                success: false,
                statusCode:0,
            });
        }
        // Hash password
        
        const hashedPassword = await hashPassword(password);


        //Create User
        const newUser = new User({
            email,
            password:hashedPassword,
            name,
            gender,
            profilePicture,
        })
        //! save User
        const savedUser = await newUser.save(); 
        

        // ! jwt TOken
        let token = jwt.sign({userId: savedUser._id }, process.env.JWT_SECRET, { expiresIn: "7d" });


        //!response

        res.status(200).json({
            message:"User created successfully",
            success: true,
            statusCode:1,
            data:{
                id: savedUser._id,
                email:savedUser.email,
                name:savedUser.name,
                token,
            }
        })

    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message:"server error",
            success: false,
            statusCode:0,
        })
    }
};

//! Login User 

exports.loginUser = async (req , res) => { 
   try{
    const {email,password} = req.body;
    
    //!Checkin user is existing
    const existUser = await User.findOne({email});
        if(!existUser){
            return res.status(400).json({
                message:"User not found",
                success: false,
                statusCode:0,
            });
        }

    //! compare password
    const passwordmatch = await comparePassword(password,existUser.password);
    if(!passwordmatch){
        return res.status(400).json({
            message:"Invalid password",
            success: false,
            statusCode:0,
        });
     }

     //create jwt token
     let token = jwt.sign(
        {userId: existUser._id },
        process.env.JWT_SECRET,
        { expiresIn: "7d" });

     //!response

     res.status(200).json({
        message:"User login successfully",
        success: true,
        statusCode:1,
        data:{
            id: existUser._id,
            email:existUser.email,
            name:existUser.name,
            token,
        }
    });

    }catch(err){
        console.log(err);
        res.status(500).json({
            message:"server error",
            success: false,
            statusCode:0,
        })
    }  
};