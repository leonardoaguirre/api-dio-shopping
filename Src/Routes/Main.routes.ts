import { Request, Response, Router } from "express";
import { messageRoutes } from "./Message.routes";

const router = Router()

router.get('/', (request: Request, response: Response) => {
    return response.json({ message: 'Bem vindo a API do DIO Shopping' })
})

router.use('/message', messageRoutes)

export { router }