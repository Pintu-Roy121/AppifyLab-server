import httpStatus from "http-status-codes";
import { JwtPayload } from "jsonwebtoken";
import AppError from "../../errorHelpers/AppError";
import { Comment } from "../comment/comment.model";
import { IReply } from "./reply.interface";
import { Reply } from "./reply.mode";

const createReply = async (payload: IReply, decodedToken: JwtPayload) => {
  const comment = await Comment.findById(payload.comment);
  if (!comment) throw new AppError(httpStatus.NOT_FOUND, "Comment not found!");

  const reply = await Reply.create({
    user: decodedToken.userId,
    comment: payload.comment,
    text: payload.text,
  });

  // ← this is the "comment's replyCount updates" part
  await Comment.updateOne(
    { _id: payload.comment },
    { $inc: { replyCount: 1 } },
  );

  return reply;
};

export const ReplyServices = { createReply };
