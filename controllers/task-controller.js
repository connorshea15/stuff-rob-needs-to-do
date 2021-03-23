const { Task } = require('../models');

const taskController = {
  // the functions will go in here as methods
  getAllTask(req, res) {
      Task.find({})
        .then(dbTaskData => res.json(dbTaskData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
  },

  createTask({ body }, res) {
      Task.create(body)
        .then(dbTaskData => res.json(dbTaskData))
        .catch(err => res.status(400).json(err));
  },

  updateTask({ params }, res) {
    // First I need to find the task in question so I can reference its completed value in my findByIdAndUpdate
    Task.findOne({ _id: params.id }) 
      .then(dbTaskData => {
        Task.findOneAndUpdate({ _id: params.id }, { $set: { completed: 1 - dbTaskData.completed } }, { new: true })
        .then(dbTaskData2 => {
          if (!dbTaskData2) {
            res.status(404).json({ message: 'Could not find this task!' });
            return;
          }
          res.json(dbTaskData2);
        })
        .catch(err => res.status(400).json(err));
      })
      .catch(err => res.status(400).json(err));
  }
};

module.exports = taskController;