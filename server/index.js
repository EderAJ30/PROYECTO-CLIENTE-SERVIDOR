import express from "express";
import { PORT } from "./config.js";
import cors from "cors";
import router_index from './routes/index.routes.js'
import router_tareas from './routes/tareas.routes.js'


const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
}));
app.use(express.json());

app.use(router_index);
app.use(router_tareas);

app.listen(PORT);
console.log(`se sube a puerto ${PORT}`);
