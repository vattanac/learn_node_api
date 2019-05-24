const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

//Import Router
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute); //mindleWare

//ROUTES
app.get('/',(req,res) => {
   res.send("This is home page");
});


//Conect DB

mongoose.connect(process.env.DB_CONNECTION, () => 
    console.log('Connect to DB')

);

//How we start listening port
app.listen(3000);
