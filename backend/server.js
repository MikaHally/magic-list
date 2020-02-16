const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully.");
});

const foldersRouter = require('./routes/folders');
const tasksRouter = require('./routes/tasks');

app.use('/folders', foldersRouter);
app.use('/tasks', tasksRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});