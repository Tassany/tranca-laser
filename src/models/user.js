const mongoose = require('../database');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
        lowercase:true,
    },
    RFID:{
        type:String,
        required:true,
        select:false,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
});

const User = mongoose.model('User',UserSchema);

module.exports = User;