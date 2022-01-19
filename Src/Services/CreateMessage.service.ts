import { getCustomRepository } from "typeorm";
import { IMessage } from "../Interfaces/IMessage.interface";
import { MessageRepository } from "../Repositories/Message.repository";

export class CreateMessageService {
    async execute({ email, message }: IMessage) {
        const messageRepository = getCustomRepository(MessageRepository)

        try {
            if (!email) {
                throw new Error("Por favor Informe um email")
            }
            if (!message) {
                throw new Error("Por favor escreva uma mensagem")
            }

            const newMsg = messageRepository.create({
                email,
                message
            })

            await messageRepository.save(newMsg)

        } catch (error) {
            throw error
        }
    }
}