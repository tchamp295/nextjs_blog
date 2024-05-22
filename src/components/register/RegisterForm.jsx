"use client";
import { register } from "@/lib/action";
import { useEffect } from "react";
import { useFormStatus, useFormState } from 'react-dom'
import { useRouter } from "next/navigation";
import toast from 'react-hot-toast';
const RegisterForm = () => {
  const [state, formAction] = useFormState (register, undefined);
  const router = useRouter();
  useEffect(() => {
   if (state?.success) {
     toast.success('Registration successful!');
      router.push("/login");
    } else if (state?.error) {
      toast.error(state.error);
    }
  }, [state?.success, state?.error, router]);
  return (
    <form action={formAction} className="flex flex-col gap-5">
      <input type="text" placeholder="username" name="username" />
      <input type="email" placeholder="Email" name="email" />
      <input type="password" placeholder="Password" name="password" />
      <input
        type="password"
        placeholder="confirm password"
        name="confirmPassword"
      />
      <button className="bg-gradient-to-r from-pink-300 to-purple-500  text-lg rounded-lg text-white font-bold cursor-pointer py-2 uppercase ">
        Register
      </button>
      {state?.error}
    </form>
  );
};
export default RegisterForm;
