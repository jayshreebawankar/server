import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import UserModel from '../Model/UserModel.js';

export const registerUser = async(req, res) =>{
    // console.log(res);
    // console.log(req.body);
    const {username, password, firstname, lastname} = req.body;

    const salt = await bcrypt.genSalt(10);
    // console.log(salt);
    const hashPassword = await bcrypt.hash(password, salt)
    console.log(hashPassword);

    const newUser = new UserModel({
        username, password:hashPassword, firstname, lastname
    });

    try{
        await newUser.save();
        res.status(200).json(newUser);
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

//login user

export const loginUser = async(req, res, user)=> {
    const {username, password} = req.body;

    try{
        const user = await UserModel.findOne({username: username})

        if(user){
            const validity = await bcrypt.compare(password, user.password);
        
            validity ? res.status(200).json(user) : res.status(400).json("Wrong Password")
        }else{
            res.status(404).json("User does not exist");
        }
               
    }catch(error){
        res.status(404).json({message: error.message});
    }
    
}