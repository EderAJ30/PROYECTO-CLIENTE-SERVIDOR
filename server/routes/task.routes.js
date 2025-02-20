import {Router} from "express";
import {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask  
} from "../controllers/tasksController.js";

const router = Router()

router.get('/tasks', getTasks)

router.get('/tasks/:id', getTask)

router.post('/tasks', createTask)

router.put('/tasks/:id', updateTask) //parametro generico

router.delete('/tasks/:id', deleteTask)

export default router