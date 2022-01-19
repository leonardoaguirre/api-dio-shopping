import { getCustomRepository } from "typeorm";
import { MessageRepository } from "../Repositories/Message.repository";


export class ListMessageService {
    async execute() {
        const messageRepository = getCustomRepository(MessageRepository)

        const allMsgs = await messageRepository.find()

        return allMsgs
    }
}