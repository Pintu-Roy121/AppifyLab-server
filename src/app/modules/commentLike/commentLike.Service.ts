import { JwtPayload } from "jsonwebtoken";
import mongoose from "mongoose";
import AppError from "../../errorHelpers/AppError";
import { Comment } from "../comment/comment.model";
import { ICommentLike } from "./commentLike.interface";
import { CommentLike } from "./commentLike.model";

const createCommentLike = async (
  payload: Partial<ICommentLike>,
  decodedToken: JwtPayload,
) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const comment = await Comment.findById(payload.comment).session(session);
    if (!comment) throw new AppError(404, "Comment not found");

    const filter = { user: decodedToken.userId, comment: payload.comment };
    const existing = await CommentLike.findOne(filter).session(session);

    let result: { liked: boolean; likeCount: number };

    if (existing) {
      await existing.deleteOne({ session });

      const updated = await Comment.findByIdAndUpdate(
        payload.comment,
        { $inc: { likeCount: -1 } },
        { new: true, session },
      );

      result = {
        liked: false,
        likeCount: Math.max(updated?.likeCount ?? 0, 0),
      };
    } else {
      await CommentLike.create([filter], { session });

      const updated = await Comment.findByIdAndUpdate(
        payload.comment,
        { $inc: { likeCount: 1 } },
        { new: true, session },
      );

      result = { liked: true, likeCount: updated?.likeCount ?? 0 };
    }

    await session.commitTransaction();
    return result;
  } catch (err) {
    await session.abortTransaction();
    throw err;
  } finally {
    session.endSession();
  }
};

export const CommentLikeServices = { createCommentLike };
