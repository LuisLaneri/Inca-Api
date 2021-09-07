import {getConnection} from '../database/connection'

export const getEmpleados= async(req,res)=>{
    const pool= await getConnection();
    const result = await pool.request().query("select* from Empleadoo")
    console.log(result);
    res.json(result.recordset);

}

export const createEmpleado= (req,res)=>{
    const{nombre,apellido, documento, fechanac,domicilio} = req.body
    console.log(nombre,apellido,documento,fechanac,domicilio)
    res.json('new empleado')
}