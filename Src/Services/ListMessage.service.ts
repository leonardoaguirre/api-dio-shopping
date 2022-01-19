import { getCustomRepository } from "typeorm";
import { MessageRepository } from "../Repositories/Messages.Repository";


export class ListMessageService {
    async execute() {
        const messageRepository = getCustomRepository(MessageRepository)

        const allMsgs = await messageRepository.find()

        return allMsgs
    }
}