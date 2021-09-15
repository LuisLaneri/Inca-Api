import { pool } from 'mssql';
import {getConnection, sql, consultas} from '../database'

export const getEmpleados= async(req,res)=>{
    try{
    const pool= await getConnection();
    const result = await pool.request().query(consultas.mostrarEmpleados)
    console.log(result);
    res.json(result.recordset);
    }
    catch (error){
        res.status(500);
        res.send(error.message);

    }
}

export const createEmpleado= async (req,res)=>{
    const{nombre,apellido, documento, fechanac,domicilio} = req.body
    if( nombre==null || apellido==null || documento==null || fechanac==null || domicilio==null )
    {
        return res.status(400).json ({msg:'no llenaste todo, bobo'})
    }

    const pool = await getConnection();

    try {
        await pool.request()
    .input("nombre", sql.VarChar, nombre)
    .input("apellido", sql.VarChar, apellido)
    .input("documento", sql.Int, documento)
    .input("fechanac", sql.Date, fechanac)
    .input("domicilio", sql.VarChar, domicilio)
    .query(consultas.insertEmpleados);

    console.log(nombre,apellido,documento,fechanac,domicilio)
    res.json(nombre,apellido,documento,fechanac,domicilio)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
}

export const buscarEmpleadoPorID = async (req,res)=>{
    const{id} =req.params;

    const pool =await getConnection();

    const result =await pool
    .request()
    .input("ID",id)
    .query(consultas.buscarPorID);

    console.log(result);

    res.send(result.recordset[0]);
}

export const borrarEmpleado = async (req,res)=>{
    const{id} =req.params;

    const pool =await getConnection();

    const result =await pool
    .request()
    .input("ID",id)
    .query(consultas.borrarEmpleado);

    console.log(result);

    res.send(result);
}

export const actualizarEmpleado = async (req, res)=>{
    
    const{nombre,apellido, documento, fechanac,domicilio} = req.body;
    const{id} =req.params

    if( (nombre==null || apellido==null || documento==null || fechanac==null || domicilio==null) )
    {
        return res.status(400).json ({msg:'no llenaste todo, gil'})
    }

    const pool = await getConnection();
    await pool
    .request()
    .input("nombre", sql.VarChar, nombre)
    .input("apellido",sql.VarChar,apellido)
    .input('documento',sql.Int,documento)
    .input("fechanac",sql.Date,fechanac)
    .input("domicilio",sql.VarChar,domicilio)
    .input('id',sql.Int,id)
    .query(consultas.actualizarEmpleado)
   
    res.json({nombre,apellido,documento,fechanac,domicilio});
}