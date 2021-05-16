const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    district: {
        type: String,
        required: true
    },

    ageGrp: {
        type: String,
        required: true
    }
})







const User = mongoose.model('User', UserSchema)
module.exports = User