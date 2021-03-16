const router = require('express').Router();
const taskRoutes = require('./task-routes');

// add prefix of `/pizzas` to routes created in `pizza-routes.js`
router.use('/tasks', taskRoutes);

module.exports = router;