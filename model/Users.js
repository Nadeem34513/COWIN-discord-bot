const mongoose = require('mongoose')


const reqString = {
    type: String,
    required: true
}

const reqNumber = {
    type: Number,
    required: true
}

const UserSchema = mongoose.Schema({
    id: reqNumber,
    district_id: reqNumber,
    tag: reqString,
    age_grp: reqString
})

const User = mongoose.model('User', UserSchema)
module.exports = User