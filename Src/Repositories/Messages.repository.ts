import { EntityRepository, Repository } from "typeorm";
import Message from "../Entities/Messages";

@EntityRepository(Message)
export class MessageRepository extends Repository<Message>{ }