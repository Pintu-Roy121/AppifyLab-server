import { Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { validateRequest } from "../../middlewares/validateRequest";
import { PostLikeController } from "./postLike.controller";
import { postLikeZodSchema } from "./postLike.validation";

const router = Router();

router.post(
  "/create",
  checkAuth(),
  validateRequest(postLikeZodSchema),
  PostLikeController.createPostLike,
);

export const PostLikeRoutes = router;
