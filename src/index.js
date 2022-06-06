import dotenv from 'dotenv';
import express from "express";
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import authRoute from '../Routes/AuthRoute.js';

dotenv.config();
const app = express();
 
//Middleware

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));

app.use('/auth', authRoute);

//connecting and listening to server

mongoose
    .connect(
        // `mongodb+srv://jayshreebawankar:12345@cluster0.eyoftaz.mongodb.net/?retryWrites=true&w=majority`
        process.env.MONGO_DB,
        // {useNerUrlParser : true,`
        // useUnifiedTopology : true}
    ).then(()=>
        app.listen(5000, ()=>
            console.log('Server is running at Port 5000')
        )
    ).catch(err=>
        console.log('Error while listening port', err)
    )



