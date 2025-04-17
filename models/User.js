const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ 
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: false,
        unique: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    departement: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
})

const User = mongoose.model('User', userSchema);
module.exports = User;
