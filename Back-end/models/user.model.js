const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({

    firstname: String,
    lastname: String,
    email: { type: String, unique: true },
    password: String,
    image: {
        type: String,
        default: 'avatar.png'
    },
    phone:String,
    location:String,
    birthday : String,
    last_login: {
        type: Date,
        default: null
    }

})

module.exports = mongoose.model('User' , userSchema );