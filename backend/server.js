const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const {login, signup} =  require('./controllers/authController')
const dotenv = require('dotenv'); // require dotenv package

dotenv.config(); // call dotenv.config() to load environment variables
dotenv.config({ path: '.env.local' });

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/muvitime",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("db connected")
    
})

app.post('/api/signup', signup);
app.post('/api/login', login);

app.listen(5000,console.log("server started"))
// console.log(dotenv,process.env.JWT_SECRET,process.env.JWT_EXPIRES_IN)
