var mongoose = require('../config/db')

var userSchema = new mongoose.Schema({
    username: String,
    email: String
})

module.exports  = mongoose.model('user', userSchema);
