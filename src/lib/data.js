import { Post, User } from "./models";
import { connectMongoDB } from "./mongoose";
import { unstable_noStore as noStore } from "next/cache";
export const getPosts = async () => {
  try {
    connectMongoDB();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("failed to get posts");
  }
};
export const getPost = async (slug) => {
  try {
    await connectMongoDB();
    const post = await Post.findOne({ slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("failed to get post");
  }
};
export const getUser = async (id) => {
  noStore();
  try {
    connectMongoDB();
    const user = await User.findById({ id });
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("failed to get user");
  }
};
export const getUsers = async () => {
  try {
    connectMongoDB();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("failed to get users");
  }
};
