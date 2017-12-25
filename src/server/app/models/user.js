var mongoose = require('../../config/db');
var bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10;

var UserSchema = new mongoose.Schema({
    username: { type: String , unique: true},
    password: { type: String },
    name:  { type: String ,default: '' },
    avatar:  { type: String,default: ''  },
    level:  { type: Number,default: 1 },
    video_count:  { type: Number,default: 0 },
    series_count:  { type: Number,default: 0 },
    following_count:  { type: Number,default: 0 },
    follower_count:  { type: Number,default: 0 },
    vote_count: { type: Number,default: 0 },
    create_time: { type: Date, default: Date.now() },
    update_time: { type: Date, default: Date.now() },
    hidden: { type: Boolean },
})

UserSchema.pre('save', function(next){
    var user = this;
    if(this.isNew){
        this.create_time = this.update_time = Date.now()
    }
    else{
        this.update_time = Date.now();
    }

    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
        if(err) return next(err)

        bcrypt.hash(user.password, salt, function(err, hash){
            if(err) return next(err)

            user.password = hash
            next();
        })
    })

})

module.exports  = mongoose.model('User', UserSchema);
