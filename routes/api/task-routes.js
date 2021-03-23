const router = require('express').Router();
const {
    getAllTask,
    createTask,
    updateTask
} = require('../../controllers/task-controller');

router  
    .route('/')
    .get(getAllTask)
    .post(createTask);

router  
    .route('/:id')
    .put(updateTask);

module.exports = router;