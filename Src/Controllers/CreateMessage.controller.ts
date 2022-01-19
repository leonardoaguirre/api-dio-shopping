import { Request, Response } from "express";
import { CreateMessageService } from "../Services/CreateMessage.service";

export class CreateMessageController {
    async handle(request: Request, reponse: Response) {
        const { email, message } = request.body

        const createMessageService = new CreateMessageService()

        const newMsg = await createMessageService.execute({ email, message })

        return reponse.json(newMsg)
    }
}