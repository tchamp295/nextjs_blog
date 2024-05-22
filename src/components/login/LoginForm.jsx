"use client";
import { login, register } from "@/lib/action";
import { useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);
  const router = useRouter();
//   useEffect(() => {
//     if (state?.success) {
//       toast.success("Registration successful!");
//       router.push("/login");
//     } else if (state?.error) {
//       toast.error(state.error);
//     }
  //   }, [state?.success, state?.error, router]);
  useEffect(() => {
    if (state?.success) {
      toast.success("Login successful!");
      router.push("/admin"); // Redirect to a protected route after login
    } else if (state?.error) {
      toast.error(state.error);
    }
  }, [state?.success, state?.error, router]);
  return (
    <form action={formAction} className="flex flex-col gap-5">
      <input type="text" placeholder="username" name="username" />

      <input type="password" placeholder="Password" name="password" />

      <button className="bg-gradient-to-r from-pink-300 to-purple-500  text-lg rounded-lg text-white font-bold cursor-pointer py-2 uppercase ">
        Login
      </button>
      {state?.error}
    </form>
  );
};
export default LoginForm;
