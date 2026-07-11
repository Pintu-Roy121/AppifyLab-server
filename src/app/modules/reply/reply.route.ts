import { Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { ReplyController } from "./reply.controller";

const router = Router();

router.post("/create", checkAuth(), ReplyController.createReply);

export const ReplyRoutes = router;
