"use server";
import { revalidatePath } from "next/cache";
import bcrypt from "bcryptjs";
import { connectMongoDB } from "./mongoose";
import { Post, User } from "./models";
import { signIn, signOut } from "./auth";
import { AuthError } from "next-auth";
// export const addPost = async (formData) = {
//     const { title, desc, slug, userId } = Object.fromEntries(formData)
//     try {
//        await  connectMongoDB()
//         const newPost = new Post({
//             title: title,
//             desc: desc,
//             slug: slug,
//             userId: userId
//         })
//         await newPost.Save()
//         console.log("saved to database");
//         revalidatePath("/blog")

//     } catch (error) {
//         console.log(error);
//         return{error:"something went wrong"}
//     }
// }

export const addPost = async (previousState, formData) => {
  const { title, desc, slug, userId } = Object.fromEntries(formData);
  try {
    await connectMongoDB();
    const newPost = new Post({
      title: title,
      desc: desc,
      slug: slug,
      userId: userId,
    });
    await newPost.save();
    console.log("saved to database");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "something went wrong" };
  }
};
export const addUser = async (previousState, formData) => {
  const { username, password, email, img, isAdmin } = Object.fromEntries(
    formData
  );
  try {
    await connectMongoDB();
    const newUser = new User({
      username,
      email,
      img,
      password,
      isAdmin,
    });
    await newUser.save();
    console.log("saved to database");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "something went wrong" };
  }
};
export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    await connectMongoDB();

    const deletedPost = await Post.findByIdAndDelete(id);

    if (!deletedPost) {
      throw new Error("Post not found");
    }

    console.log("Post deleted from database");
    revalidatePath("/blog"); // Revalidate the path to update the cache
    revalidatePath("/admin "); // Revalidate the path to update the cache
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    await connectMongoDB();
    await Post.deleteMany({ userId: id });

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      throw new Error("User not found");
    }

    console.log("User deleted from database");
    revalidatePath("/admin"); // Revalidate the path to update the cache
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
export const register = async (previousState, formData) => {
  const {
    username,
    email,
    password,
    img,
    confirmPassword,
  } = Object.fromEntries(formData);

  if (password !== confirmPassword) {
    return { error: "Passwords do not match" };
    // throw new Error("Passwords do not match" );
  }

  try {
    await connectMongoDB();

    const user = await User.findOne({ username });

    if (user) {
      return { error: "Username already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });
    // console.log(newUser);
    await newUser.save();
    console.log("saved to db");

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};
// export const login = async (previousState, formData) => {
//   const { username, password } = Object.fromEntries(formData);
//   try {
//     const result = await signIn("credentials", { redirect: false, username, password });

//     if (result?.error) {
//       return { error: "Invalid username or password" };
//     }

//     console.log("logged in successfully");
//     return { success: true };
//   } catch (error) {
//     return { error: "An unexpected error occurred. Please try again." };
//   }
// };
export const login = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);
  // console.log(username, password);
  try {
    // console.log(username,password);
    const result = await signIn("credentials", { username, password });

    console.log("logged in successfully");
    return { success: true };
  } catch (error) {
    // console.log("Authorize Error:", error.message);
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials" };
        default:
          return { error: "Something went wrong" };
      }
    }

    throw error;
  }
};
export const handleLogout = async () => {
  await signOut();
};
export const handleGithubLogin = async () => {
  await signIn("github");
};
