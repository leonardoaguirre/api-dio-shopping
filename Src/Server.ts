import "reflect-metadata"
import Express from "express"
import cors from "cors"
import { Constantes } from "./Constants"
import { router } from "./Routes/Main.routes"

const app = Express()

app.use(cors())

app.use(Express.json())
app.use(router)

app.listen(Constantes.API_PORT, () =>
    console.log(`Server na porta ${Constantes.API_PORT}`)
);
