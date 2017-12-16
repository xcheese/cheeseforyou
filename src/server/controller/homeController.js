function index(req, res, next){
    res.render('index', { title: 'Express chrese' });
}
exports.index = index
