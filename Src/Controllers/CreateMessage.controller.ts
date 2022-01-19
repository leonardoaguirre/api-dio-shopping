import { Request, Response } from "express";
import { CreateMessageService } from "../Services/CreateMessage.service";

export class CreateMessageController {
    async handle(request: Request, reponse: Response) {
        const { email, message } = request.body

        const createMessageService = new CreateMessageService()
        try {
            await createMessageService.execute({ email, message })

            return reponse.status(201).json('Inserido com sucesso!')

        } catch (error) {
            return reponse.status(400).json(error)
        }
    }
}