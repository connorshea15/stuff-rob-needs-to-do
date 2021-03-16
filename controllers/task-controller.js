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
  }
};

module.exports = taskController;