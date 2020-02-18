const router = require('express').Router();
let Task = require('../models/task.model');

router.route('/').get((req, res) => {
    Task.find()
        .then(tasks => res.json(tasks))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const tasktitle = req.body.tasktitle;
    const taskcomplete = req.body.taskcomplete;

    const newTask = new Task({
        tasktitle,
        taskcomplete
    });

    newTask.save()
        .then(() => res.json('Task added'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Task.findById(req.params.id)
        .then(task => res.json(task))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Task.findByIdAndDelete(req.params.id)
        .then(() => res.json('Task deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Task.findById(req.params.id)
        .then(task => {
            task.tasktitle = req.body.tasktitle;
            task.taskcomplete = req.body.taskcomplete;

            task.save()
                .then(() => res.json('Task updated!'))
                .catch(err => res.status(400).json('Error' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/updateDate/:id').put((req, res) => {
    Task.findById(req.params.id)
        .then(task => {
            task.date = Date.parse(req.body.date);

            task.save()
                .then(() => res.json('Date updated!'))
                .catch(err => res.status(400).json('Error' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/updateFolder/:id').put((req, res) => {
    Task.findById(req.params.id)
        .then(task => {
            task.folder = req.body.folder;

            task.save()
                .then(() => res.json('Folder updated!'))
                .catch(err => res.status(400).json('Error' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;