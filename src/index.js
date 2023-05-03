import express from "express";
import employeesRoutes from './routes/employes.routes.js'
import indexRoutes from './routes/index.routes.js'
import rrhhRoutes from "./routes/rrhh.routes.js";
import {PORT} from "./config.js"

const app = express()

app.use(express.json())
app.use(indexRoutes)
app.use('/api',employeesRoutes)
app.use('/api',rrhhRoutes)

app.listen(PORT)
console.log('Servidor Escuchando en puerto', PORT)