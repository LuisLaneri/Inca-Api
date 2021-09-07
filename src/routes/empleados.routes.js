import { Router } from "express";
import { getEmpleados } from "../controllers/empleados.controller";
import {createEmpleado} from"../controllers/empleados.controller";
const router = Router();

router.get('/empleados',getEmpleados);

router.post('/empleadosCrear',createEmpleado);

router.delete('/empleadosBorrar',getEmpleados);

router.put('/empleadosModificar',getEmpleados);

router.get('/empleadosFiltrar',getEmpleados);



export default router;