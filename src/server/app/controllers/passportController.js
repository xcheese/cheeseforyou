var User = require('../models/user')
var utils = require('../../config/utils')
const SECRET = `Nov's Chopin`;

exports.postApiReg = (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;

    if (username === '') {
        res.format_json(400,'你还没有填写邮箱')
    }

    if (password === '') {
        res.format_json(400,'你还没有填写密码')
    }

    User.findOne({username:username})
        .exec()
        .then(user => {
            if(user && user.username){
                res.format_json(400,'邮箱或密码错误')
                return false
            }

            if(!utils.is_phone_num(username)){
                res.format_json(400,'你输入的手机号格式不正确，再检查一下')
                return false
            }

            var user = new User({
                username: username,
                password: password,
            })

            user.save((err, user) => {
                res.format_json(200,'ok', user)
            })
        })
        .catch(err => {
            res.format_json(400,'err', err)
        })

}


