const router = require('express').Router();
let Folder = require('../models/folder.model');

router.route('/').get((req, res) => {
    Folder.find()
        .then(folders => res.json(folders))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const foldername = req.body.foldername;

    const newFolder = new Folder({foldername});

    newFolder.save()
        .then(() => res.json('Folder added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;