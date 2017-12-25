let User = require('../models/user')
let utils = require('../config/utils')
const SECRET = `Nov's Chopin`;

exports.postApiReg = (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;


    if (username === '') {
        res.format_json(400,'你还没有填写邮箱')
    }

    if (password === '') {
        res.format_json(400,'你还没有填写密码')
    }

    User.findOne({username:username})
        .exec()
        .then(user => {
            if(user != null){
                res.format_json(400,'邮箱或密码错误')
            }

            if(!utils.is_phone_num(username)){
                res.format_json(400,'你输入的手机号格式不正确，再检查一下')
            }

            let user = new User({
                username:username,
                password:utils.get_hash(`${req.headers['user-agent']}${password}${SECRET}`),
            })
            // if(check_password === user.password){
            //
            // }
            console.log(user)
            res.format_json(200,'ok', user)
        })
        .catch(err => {
            res.format_json(400,'err', err)
        })
    // user.save((err,user) => {
    //     if(err){
    //         res.format_json(400,'error',err)
    //         return false;
    //     }
    //     console.log(user);
    //     res.format_json(200,'ok',user)
    // })

    // user.save()
    //     .then(() => {
    //
    //     })
    //     .catch(err => {
    //         res.format_json(400,'err', err)
    //     })
    // let headers = req.headers
    // hash(headers['user-agent'])
    // console.log(get_hash(password))



}


