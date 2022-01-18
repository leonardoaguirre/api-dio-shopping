import { Request, Response, Router } from "express";

const router = Router()

router.get('/', (request: Request, response: Response) => {
    return response.json({ message: 'Bem vindo a API do DIO Shopping' })
})

export { router }