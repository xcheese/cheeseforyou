function index(req, res, next){
    res.render('index', { title: 'Express user' });
}
exports.index = index
