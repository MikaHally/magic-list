const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const folderSchema = new Schema({
    foldername: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
}, {
    timestamps: true,
});

const Folder = mongoose.model('Folder', folderSchema);

module.exports = Folder;