var userModel = require('../models/test');

function get(req, res, next){
    console.log(req.query)
    res.json({a:1})
}

function post(req, res, next){
    if(req.body.username != undefined && req.body.email != undefined){
        var newUser = new userModel({
            username: req.body.username,
            email: req.body.email
        })
        newUser.save(function(err, data){
            if(err){ return console.log(err) }
            console.log(data)
            res.json({ec:200})
        })
    }else{
        res.json({ec:302})
    }

}

exports.get = get
exports.post = post