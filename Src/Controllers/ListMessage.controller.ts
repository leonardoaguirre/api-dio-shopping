import { Request, Response } from "express";
import { NotFound } from "../Errors/NotFound.Error";
import { ListMessageService } from "../Services/ListMessage.service";

export class ListMessageController {
    async handle(request: Request, response: Response) {
        const listMessageService = new ListMessageService()

        try {
            const allMsgs = await listMessageService.execute()
            if (allMsgs.length < 1) return response.json(new NotFound('Message'))
            return response.json(allMsgs)
        } catch (error) {
            return response.status(400).json(error)
        }
    }
}