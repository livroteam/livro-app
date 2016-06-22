// grab the mongoose module
var mongoose = require('mongoose');

// define our user model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('User', {
  name: {
    first: {type: String, required: true},
    last: {type: String, required: true}
  },
  email: {type: String},
  location: {type: String}
});
