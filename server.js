const express = require("express");
const path = require("path")
const members = require('./Members')

const app = express();

const controller = (req, res, next) => {
    console.log('404 Error Occured')
    next();
}

//Initialize middle-ware
app.use(controller);

//GET ALL MEMBERS API
app.get('/api/appointmentdate', (req, res) => res.json(members));

//Static Folder
app.use(express.static(path.join(__dirname, 'public')));


app.listen(5000);
