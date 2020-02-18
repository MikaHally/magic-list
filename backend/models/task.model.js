const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    tasktitle: {type: String, required: true},
    taskcomplete: {type: Boolean, default: false},
    date: { type: Date, required: false, default: null },
    folder: {type: String, required: false, default: null}
}, {
    timestamps: true,
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;