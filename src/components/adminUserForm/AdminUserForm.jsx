"use client";
import { addUser } from "@/lib/action";
import { useFormState } from "react-dom";
const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);
  return (
    <form action={formAction}>
      <h1>Add New User</h1>

      <input type="text" placeholder="Username" name="username" />
      <input type="text" placeholder="Email" name="email" />
      <input type="text" placeholder="img" name="img" />
      <input type="password" name="password" placeholder="password" />
      <select name="isAdmin" id="">
        <option value="false">Is Admin</option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
      <button>Add</button>
      {state && state.error}
    </form>
  );
};

export default AdminUserForm;
