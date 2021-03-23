const router = require('express').Router();
const taskRoutes = require('./task-routes');

// add prefix of `/tasks` to routes created in `tasks-routes.js`
router.use('/tasks', taskRoutes);

module.exports = router;