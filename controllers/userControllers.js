const {Users}=require("../models");
const bcryptjs = require('bcryptjs');

// CODE FOR SIGNUP USER SEND DATA AS {"USERNAME" : "SAMRAT" , "PASSWORD" : "KARKI"}
const login = async (req , res) => {
    const {username , password} = req.body;

    // VALIDATING USERNAME AND PASSWORD IF THEY ARE EMPTY
    if(!username || !password) return res.status(401).send("Please enter username and password");

    const user = await Users.findOne({where : {username}});
    
    if(!user || ! (await bcryptjs.compare(password , user.password))) {
        return res.status(402).send("Username or password is incorrect");
    }

    res.redirect('/home');
}

// CODE FOR SIGNUP USER SEND DATA AS {"USERNAME" : "SAMRAT" , "PASSWORD" : "KARKI"}
const signup  = async (req , res) => {
    const {username} = req.body;
    const existUser = await Users.findOne({where : {username}});
    if(existUser) {
        return res.status(402).send("User already exists with same username");
    }
    // SENDING THAT DATA TO DBs
    // ENCRYPTING THE PASSWORD ( SAMRAT => ALKSDFJ)
    req.body.password = await bcryptjs.hash(req.body.password , 10);

    const user = await Users.create(req.body);


    res.redirect('/');
}

module.exports={login , signup}
 