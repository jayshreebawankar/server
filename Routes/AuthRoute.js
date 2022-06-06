import express from 'express';
const route = express.Router();
import {registerUser, loginUser} from '../Controllers/AuthController.js'

route.post('/register', registerUser);
route.post('/login',loginUser)

// route.post('/register', register);

// route.get('/', (req, res, next)=>{
//     res.send('Auth send the response');
// })

export default route;
