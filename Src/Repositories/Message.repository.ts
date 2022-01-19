import { EntityRepository, Repository } from "typeorm";
import { Message } from "../Entities/Message";

@EntityRepository(Message)
export class MessageRepository extends Repository<Message>{ }