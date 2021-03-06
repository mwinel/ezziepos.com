import { useRouter } from "next/router";
import Link from "next/link";
import SignupForm from "@components/auth/SignupForm";

const SignUp = () => {
  const router = useRouter();

  const signupHandler = async (enteredSignupData) => {
    console.log(enteredSignupData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/auth/login">
            <a className="font-medium text-cyan-600 hover:text-cyan-500">
              Login.
            </a>
          </Link>
        </p>
      </div>
      <SignupForm onSignup={signupHandler} />
    </div>
  );
};

export default SignUp;
