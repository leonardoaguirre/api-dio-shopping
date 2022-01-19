import { Router } from "express";
import { CreateMessageController } from "../Controllers/CreateMessage.controller";
import { ListMessageController } from "../Controllers/ListMessage.controller";
import { router } from "./Main.routes";

const messageRoutes = Router()

const createMessageController = new CreateMessageController()
const listMessageController = new ListMessageController()

messageRoutes.get('', listMessageController.handle)
messageRoutes.post('', createMessageController.handle)

export { messageRoutes }