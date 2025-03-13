import {Router} from "express";
import {
    getTareas,
    getTarea,
    createTarea,
    updateTarea,
    deleteTarea  
} from "../controllers/tareasController.js";

const router_tareas = Router()

router_tareas.get('/tareas', getTareas) 

router_tareas.get('/tareas/:id_tarea', getTarea) 

router_tareas.post('/tareas', createTarea) 

router_tareas.put('/tareas/:id_tarea', updateTarea) 

router_tareas.delete('/tareas/:id_tarea', deleteTarea) 

export default router_tareas