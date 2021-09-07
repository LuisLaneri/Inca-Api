import express from 'express'
import  config  from './config';
import empleadosRoutes from './routes/empleados.routes';

const app = express()



app.set('port',config.port)

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(empleadosRoutes)
export default app