import { JwtPayload } from "jsonwebtoken";
import { IPost, PostVisibility } from "./post.interface";
import { Post } from "./post.model";

const createPost = async (
  payload: Partial<IPost>,
  decodedToken: JwtPayload,
) => {
  const postPayload = {
    text: payload.text,
    image: payload.image ?? "",
    author: decodedToken.userId,
    visibility: payload.visibility,
  };
  const result = await Post.create(postPayload);

  return result;
};

const getAllPost = async () => {
  const posts = await Post.find({ visibility: PostVisibility.PUBLIC })
    .sort({ createdAt: -1 })
    .populate("author", "firstName lastName email");
  const total = await Post.countDocuments();
  return {
    meta: {
      total,
    },
    data: posts,
  };
};

const getMyPosts = async (decodedToken: JwtPayload) => {
  console.log(decodedToken);
  const posts = await Post.find({ author: decodedToken.userId }).populate(
    "author",
    "firstName lastName email",
  );
  return posts;
};

export const PostServices = {
  createPost,
  getAllPost,
  getMyPosts,
};
