const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/dbItems')
    .then(db => console.log('db is working'))
    .catch(err => console.log(err))