const { Schema, model } = require('mongoose');

const TaskSchema = new Schema({
    taskDetials: {
        String
    },
    createdAt: {
        type: Date.UTC,
        default: Date.now
    }
});

// Actually create the model using the schema
const Task = model('Task', TaskSchema);

// export the model
module.exports = Task;