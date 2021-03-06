const { Schema, model } = require('mongoose');
const moment = require('moment');

const TaskSchema = new Schema({
    taskDetails: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    completed: {
        type: Number,
        default: 0
    }
});

// Actually create the model using the schema
const Task = model('Task', TaskSchema);

// export the model
module.exports = Task;