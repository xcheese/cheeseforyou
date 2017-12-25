function format_json(res) {
    res.format_json = (ec = 200, em = '', data = {} ) => {
        return res.json({
            ec:ec,
            em:em,
            data:data
        })
    }
}

module.exports = (req, res, next) => {
    format_json(res)
    next();
}