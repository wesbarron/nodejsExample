const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TodoSchema = new Schema({
    teamName: {type: String, required: true, max: 100},
    score: {type: Number, required: true}
});

module.exports = mongoose.model('Todo', TodoSchema);
