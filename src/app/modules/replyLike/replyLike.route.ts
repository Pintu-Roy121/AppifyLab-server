import { Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { ReplyLikeController } from "./replyLike.controller";

const router = Router();

router.post("/create", checkAuth(), ReplyLikeController.createReplyLike);

export const ReplyLikeRoutes = router;
