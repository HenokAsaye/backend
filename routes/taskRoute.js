import express from 'express';
import {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask
} from '../controller/taskController.js';

const router = express.Router();

// GET /api/tasks — Return all tasks
router.get('/', getAllTasks);

// POST /api/tasks — Add a new task
router.post('/', createTask);

// PUT /api/tasks/:id — Mark as completed
router.put('/:id', updateTask);

// DELETE /api/tasks/:id — Delete a task
router.delete('/:id', deleteTask);

export default router;