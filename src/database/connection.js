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

async function getConnection(){
    const pool = await sql.connect(dbSettings);
    const result = await pool.request().query('SELECT * from Empleadoo');
    console.log(result);
}

getConnection();