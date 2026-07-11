import { Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { validateRequest } from "../../middlewares/validateRequest";
import { CommentLikeController } from "./commentLike.controller";
import { commentLikeCreateZodSchema } from "./commentLike.validation";

const router = Router();

router.post(
  "/create",
  checkAuth(),
  validateRequest(commentLikeCreateZodSchema),
  CommentLikeController.createCommentLike,
);

export const CommentLikeRoutes = router;
