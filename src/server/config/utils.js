let crypto = require('crypto');

exports.is_phone_num = value => {
    let pattern=/^1[358][0123456789]\d{8}$/;
    if(!pattern.test(value)){
        return false;
    }
    return true;
}

exports.get_hash = pre_str => {
    let hash = crypto.createHash('sha1');
    hash.update(pre_str);
    return hash.digest('hex')
}

