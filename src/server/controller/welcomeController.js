function index(req, res, next){
    res.render('welcome', { title: 'Express chrese' });
}
exports.index = index
