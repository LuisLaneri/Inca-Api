import {config} from "dotenv"
config();

console.log(process.env.nombre)

export default {
    port: 4000
}