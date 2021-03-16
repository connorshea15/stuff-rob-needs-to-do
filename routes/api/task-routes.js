const router = require('express').Router();
const {
    getAllTask,
    createTask
} = require('../../controllers/task-controller');

router  
    .route('/')
    .get(getAllTask)
    .post(createTask);

module.exports = router;