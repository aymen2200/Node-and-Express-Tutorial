const express = require('express')
const router = express.Router()
const {getAllTasks,getTask,createTask,updateTask,deleteTask} = require('../Controllers/tasks.js')



router.route('/').get(getAllTasks).post(createTask)

router.route('/api/v1/tasks/:id')
.get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router;