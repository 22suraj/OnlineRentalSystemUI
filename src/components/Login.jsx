import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // const history = useHistory();
  // const handleClick = () => history.push('/some-route');
  const navigate = useNavigate();
  const [statusMsg, setStatusMsg] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SwitchToDashboard = (props) => {
    console.warn(statusMsg);
    const myArray = statusMsg.split("-");
    if (myArray[0] === "Successfully Authenticated") {
      localStorage.setItem("type", myArray[1])
      navigate("/dashboard");
    } else {
    }
  };

  const getLogin = async () => {
    let data = { email, password };
    const respose = await fetch("https://localhost:7085/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    const json = await respose.json();
    setStatusMsg(json);
    console.warn(statusMsg);
    SwitchToDashboard();
  };

  return (
    <div className="h-screen max flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-300 ">
      <div className="max-w-md w-full space-y-8 bg-white p-5 rounded-lg drop-shadow-2xl">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Online Rental System
          </h2>
          <h2 className="text-center text-sm text-gray-900">
            Pay as you go...
          </h2>
          <h2 className="mt-6 text-center text-lg font-extrabold text-gray-900">
            Login
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          {statusMsg && (
            <div
              class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4"
              role="alert"
            >
              {/* <strong class="font-bold">Oops! </strong> */}
              <span class="block sm:inline">{statusMsg}</span>
            </div>
          )}

          <div>
            <button
              type="button"
              onClick={getLogin}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
              </span>
              Login
            </button>
          </div>
        </form>
        <div>
          <a href="/register">
            <button
              type="submit"
              href="/register"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
              </span>
              Sign Up
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
