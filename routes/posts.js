const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//ROUTES
router.get('/',(req, res) => {
    res.send("we are on the post page");
});

router.post('/', (req, res) => {
    console.log(req.body);
    
});
module.exports = router;
