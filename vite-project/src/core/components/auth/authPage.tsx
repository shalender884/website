import { useState } from "react";
import { AxiosError } from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";
import { CircleDashed } from "lucide-react";
import { signUp } from "../services/user-auth/authservice";

type View = "login" | "signup" | "forgot";

interface signupData {
  username: string;
  email: string;
  password: string;
}
interface signupResponse {
  statusCode: number;
  // "data": {
  //   "user": {
  //     "_id": "696f3e3b31f6515c61e912f2",
  //     "avatar": {
  //       "url": "https://via.placeholder.com/200x200.png",
  //       "localPath": "",
  //       "_id": "696f3e3b31f6515c61e912f1"
  //     },
  //     "username": "doejohn",
  //     "email": "user.email@domain.com",
  //     "role": "ADMIN",
  //     "loginType": "EMAIL_PASSWORD",
  //     "isEmailVerified": false,
  //     "createdAt": "2026-01-20T08:35:07.453Z",
  //     "updatedAt": "2026-01-20T08:35:07.536Z",
  //     "__v": 0
  //   }
  // },
  message: string;
  success: boolean;
}

interface ApiErrorResponse {
  statusCode: number;
  message: string;
  success: boolean;
  data: null;
  errors?: {
    username?: string;
    email?: string;
    password?: string;
  }[];
}

function AuthPage() {
  const [view, setView] = useState<View>("login");
  const [visible, setVisible] = useState<boolean>(false);
  const [signUpState, setSignup] = useState<signupData>({
    username: "",
    email: "",
    password: "",
  });

  const changeHanlder = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignup((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { mutate, data, isPending, isError, isSuccess, error } = useMutation<
    signupResponse,
    AxiosError<ApiErrorResponse>,
    signupData
  >({
    mutationFn: signUp,
  });

  const sumbitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(signUpState);
  };

  const apiError = error?.response?.data;
  const fieldErrors = apiError?.errors?.[0];
  const isValidationError = apiError?.message === "Received data is not valid";

  return (
    <div className=" bg-gray-50  flex flex-col h-screen justify-center font-sans">
      {isPending && (
        <CircleDashed
          className="animate-spin text-blue-800 left-[50%] absolute mr-2"
          size={50}
        />
      )}
      <div className="">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {view === "login" && "Sign in to your account"}
          {view === "signup" && "Create your account"}
          {view === "forgot" && "Reset your password"}
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-100">
          <form className="" onSubmit={sumbitHandler}>
            {view === "signup" && (
              <div className="">
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                onFocus={()=>fieldErrors?.username===""}
                  autoComplete="true"
                  onChange={changeHanlder}
                  name="username"
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="John Doe"
                />
              </div>
            )}
            {isValidationError && fieldErrors?.username && (
              <p className="text-red-500 text-sm">{fieldErrors.username}</p>
            )}

            <div className="mt-5">
              <label className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
              
                autoComplete="true"
                onChange={changeHanlder}
                type="email"
                name="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
                placeholder="you@example.com"
              />
            </div>
            {view !== "forgot" && (
              <div className="mt-5">
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1 flex relative overflow-hidden  w-full items-center border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm">
                  <input
                    autoComplete="true"
                    onChange={changeHanlder}
                    type={visible ? "text" : "password"}
                    name="password"
                    className="h-full py-2 ps-3 w-full  focus:outline-none"
                    required
                    placeholder="••••••••"
                  />
                  {visible ? (
                    <FaEyeSlash
                      className="absolute right-2"
                      onClick={() => setVisible(false)}
                    />
                  ) : (
                    <FaEye
                      className="absolute right-2"
                      onClick={() => setVisible(true)}
                    />
                  )}
                </div>
                {isSuccess && (
                  <div className="mt-4 ">
                    <p className=" text-green-500">
                      {data.message || "successfully SignUp"}
                    </p>
                  </div>
                )}
               
                {isError && !isValidationError && (
                  <p className="text-red-500">{apiError?.message}</p>
                )}
              </div>
            )}

            {view === "login" && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>
                <button
                  type="button"
                  onClick={() => setView("forgot")}
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </button>
              </div>
            )}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center mt-5 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >
                {view === "login" && "Sign In"}
                {view === "signup" && "Register"}
                {view === "forgot" && "Send Reset Link"}
              </button>
            </div>
          </form>

          {/* Navigation links */}
          <div className="mt-6 text-center text-sm">
            {view === "login" ? (
              <p className="text-gray-600">
                New here?{" "}
                <button
                  onClick={() => setView("signup")}
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Create an account
                </button>
              </p>
            ) : (
              <button
                onClick={() => setView("login")}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Back to sign in
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default AuthPage;
