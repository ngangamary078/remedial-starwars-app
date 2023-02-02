const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000, function () {
    console.log('listening on 3000')
})
let DB_NAME = process.env.DB_NAME;
let DB_USER = process.env.DB_USER;
let DB_PASS = process.env.DB_PASS;
let DB_URL = process.env.DB_URL

let db_url = "mongodb+srv://" + DB_USER + ":" + DB_PASS + "@starwarsapp.io9oyzm.mongodb.net/" + DB_NAME;
console.log(db_url);
let option = {
    maxPoolSize: 10,
    family: 4
};
mongoose.connect(db_url, option);
let db = mongoose.connection
db.once("open", () => {
    console.log("Successful connection to the database");
});
const userSchema = new mongoose.Schema({
    firstName:{type:String,  required:true},
    secondName:{type:String,  required:true},
    emailAddress:{type:String, unique:true, required:true},
    password:{type:String, required: true},
    timmestamp: {type:Date, default: Date.now, immutable:true}

});
let User= mongoose.model('User',userSchema);
let user;

// We normally abbreviate `request` to `req` and `response` to `res`.
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')

    // do something here
})
// We normally abbreviate `request` to `req` and `response` to `res`.
app.post('/quotes', (req, res) => {
    user = {
        firstName:req.body.fName,
        secondName: req.body.sName,
        emailAddress: req.body.email,
        password: req.body.pass,
        
    }
    let newUser = new User(user);
    newUser.save();
    res.redirect('/')
    // do something here
})




