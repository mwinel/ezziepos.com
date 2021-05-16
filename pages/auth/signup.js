import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import { MailIcon, EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { BaseButton, Alert } from "../../components";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const router = useRouter();

  const handleShowPassword = useCallback(
    () => setShowPassword(!showPassword),
    [showPassword, setShowPassword]
  );

  const handleShowConfirmPassword = useCallback(
    () => setShowConfirmPassword(!showConfirmPassword),
    [showConfirmPassword, setShowConfirmPassword]
  );

  const onSignUp = (event) => {
    // event.preventDefault();
    if (password === confirmPassword) {
      setError("");
      setShowErrorAlert(false);
      router.push("/");
    } else {
      setError("Passwords do not match.");
      setShowErrorAlert(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a
            href="/auth/signin"
            className="font-medium text-cyan-600 hover:text-cyan-500"
          >
            Login.
          </a>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="account_number"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="focus:ring-cyan-500 focus:border-cyan-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md"
                  onChange={setEmail}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <MailIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="account_number"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="focus:ring-cyan-500 focus:border-cyan-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md"
                  onChange={setPassword}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                  {showPassword ? (
                    <EyeOffIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                      onClick={handleShowPassword}
                    />
                  ) : (
                    <EyeIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                      onClick={handleShowPassword}
                    />
                  )}
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="account_number"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="password"
                  name="password"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="focus:ring-cyan-500 focus:border-cyan-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md"
                  onChange={setConfirmPassword}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                  {showConfirmPassword ? (
                    <EyeOffIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                      onClick={handleShowPassword}
                    />
                  ) : (
                    <EyeIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                      onClick={handleShowConfirmPassword}
                    />
                  )}
                </div>
              </div>
            </div>

            {showErrorAlert ? <Alert text={error} /> : <div></div>}

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  I agree to{" "}
                  <a
                    href="/auth/signin"
                    className="font-medium text-cyan-600 hover:text-cyan-500"
                  >
                    terms.
                  </a>
                </label>
              </div>
            </div>

            <div>
              <BaseButton
                variant="primary"
                title="Sign Up"
                className="w-full"
                type="submit"
                onClick={onSignUp}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
