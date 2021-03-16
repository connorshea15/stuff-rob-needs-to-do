const { Schema, model } = require('mongoose');
const moment = require('moment-timezone');
const dateArizona = moment.tz(Date.now(), "America/Los_Angeles").format();
console.log("Date Now!:    " + dateArizona);

const TaskSchema = new Schema({
    taskDetails: {
        type: String
    },
    createdAt: {
        type: Date,
        default: dateArizona
    }
});

// Actually create the model using the schema
const Task = model('Task', TaskSchema);

// export the model
module.exports = Task;