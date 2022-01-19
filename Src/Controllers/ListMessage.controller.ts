import { Request, Response } from "express";
import { ListMessageService } from "../Services/ListMessage.service";

export class ListMessageController {
    async handle(request: Request, response: Response) {
        const listMessageService = new ListMessageService()

        const allMsgs = await listMessageService.execute()

        return response.json(allMsgs)
    }
}