const mongoose = require('mongoose')
const { StaticRouter } = require('react-router-dom')

const Schema = mongoose.Schema

const userSchema = new Schema({
    phoneNumber: {
        type: Number,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    birtDate: {
        type: String,
        required: true,
    },
    profession: {
        type: String
    },
    jobDescription: {
        type: String
    },
    priceRate: {
        type: Number
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User