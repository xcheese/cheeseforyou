// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/cheese');
// export default mongoose

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/cheese',{useMongoClient: true});
module.exports = mongoose;