import sql, { connect, pool } from 'mssql'

const dbSettings = {
    user:'inca',
    password:'inca1234',
    server:'localhost',
    database:'inca',
    options: {
        encrypt:false,
        trustServerCertificate:true,

    },
};

export async function getConnection(){
    try{
    const pool = await sql.connect(dbSettings);
    return pool;
    }
    catch(error){
        console.error(error)
    }
}

export {sql};