import { Router } from "express";
import {getEmpleados} from "../controllers/empleados.controller";
import {createEmpleado} from"../controllers/empleados.controller";
import {buscarEmpleadoPorID} from "../controllers/empleados.controller";
import {borrarEmpleado} from "../controllers/empleados.controller";
import {actualizarEmpleado} from "../controllers/empleados.controller"
const router = Router();

router.get('/empleados',getEmpleados);

router.post('/empleadosCrear',createEmpleado);

router.delete('/empleadosBorrar/:id',borrarEmpleado);

router.put('/empleadosModificar/:id',actualizarEmpleado);

router.get('/empleadosBuscar/:id',buscarEmpleadoPorID);


export default router;