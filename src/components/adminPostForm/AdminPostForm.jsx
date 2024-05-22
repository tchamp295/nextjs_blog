"use client";
import { addPost } from "@/lib/action";
import { useFormStatus, useFormState } from "react-dom";
const AdminPostForm = ({userId}) => {
  const [state, formAction] = useFormState(addPost, undefined);
  return (
    <form action={formAction}>
      <h1>Add New Post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" placeholder="Title" name="title" />
      <input type="text" placeholder="slug" name="slug" />
      <input type="text" placeholder="img" name="img" />
      <textarea type="text" placeholder="desc" name="desc" rows={10} />
      <button>Add</button>
      {state && state.error}
    </form>
  );
};

export default AdminPostForm;
