import LoginForm from "@/components/login/LoginForm";
import { handleGithubLogin, login } from "@/lib/action";
import { auth, signIn } from "@/lib/auth";

const LoginPage = () => {
  // const session = await auth()
  // console.log(session)

  return (
    <div className=" mx-auto max-w-md px-3">
      <form action={handleGithubLogin}>
        <button>GITHUB LOGIN</button>
      </form>
      <LoginForm />
    </div>
  );
};
export default LoginPage;
