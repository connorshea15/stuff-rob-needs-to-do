const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/stuff-rob-needs-to-do', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});
    // mongoose.connection.dropDatabase();

mongoose.set('debug', true);

module.exports = mongoose.connection;