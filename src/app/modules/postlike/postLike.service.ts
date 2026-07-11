import { JwtPayload } from "jsonwebtoken";
import { Post } from "../post/post.model";
import { IPostLike } from "./postLike.interface";
import { PostLike } from "./postLike.model";

const createPostLike = async (
  payload: Partial<IPostLike>,
  decodedToken: JwtPayload,
) => {
  const filter = { user: decodedToken.userId, post: payload.post };
  const isExist = await PostLike.findOne(filter);

  if (isExist) {
    await isExist.deleteOne();
    const post = await Post.findByIdAndUpdate(
      payload.post,
      { $inc: { likeCount: -1 } },
      { new: true },
    );
    return { liked: false, likeCount: Math.max(post?.likeCount ?? 0, 0) };
  }

  await PostLike.create(filter);
  const post = await Post.findByIdAndUpdate(
    payload.post,
    { $inc: { likeCount: 1 } },
    { new: true },
  );
  return { liked: true, likeCount: post?.likeCount ?? 0 };
};

export const PostLikeServices = { createPostLike };
