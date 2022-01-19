import { getCustomRepository } from "typeorm";
import { NotEmpty } from "../Errors/NotEmpty.error";
import { IMessage } from "../Interfaces/IMessage.interface";
import { MessageRepository } from "../Repositories/Message.repository";

export class CreateMessageService {
    async execute({ email, message }: IMessage) {
        const messageRepository = getCustomRepository(MessageRepository)

        if (!email) {
            throw new NotEmpty('Email')
        }
        if (!message) {
            throw new NotEmpty('Mensagem')
        }

        const newMsg = messageRepository.create({
            email,
            message
        })

        await messageRepository.save(newMsg)
    }
}