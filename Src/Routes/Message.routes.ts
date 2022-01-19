import { Router } from "express";
import { CreateMessageController } from "../Controllers/CreateMessage.controller";
import { ListMessageController } from "../Controllers/ListMessage.controller";
import { router } from "./Main.routes";

const messageRoutes = Router()

const createMessageController = new CreateMessageController()
const listMessageController = new ListMessageController()

router.get('/message', listMessageController.handle)
router.post('/message', createMessageController.handle)

export { messageRoutes }