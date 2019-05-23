const express = require('express');
const app = express();

//ROUTES
app.get('/',(req,res) => {
   res.send("This is home page");
});

//How we start listening port
app.listen(3000);
