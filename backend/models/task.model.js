const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    tasktitle: {type: String, required: true},
    /* taskcomplete: {type: Boolean, default: false},*/
}, {
    timestamps: true,
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;