"use client";

import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

const LoginComp = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;
    if (!email && !password) return null;
    // console.log(email, password);
    signIn("credentials", { email, password });
  };

  return (
    <>
      <div className="flex flex-col justify-center text-gray-200 justify-items-center items-center py-4">
        <h2 className="text-center">
          You can login as a guest if you don&#39;t want to use your <br />
          Google Account.
        </h2>
        <p className="pt-2 text-slate-500">Email: test@gmail.com</p>
        <p className="text-slate-500">Password: test123456</p>
      </div>
      <form onSubmit={handleLogin}>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="inline-block text-lg mb-2 text-gray-200 "
          >
            Email
          </label>
          <input
            type="email"
            className="border border-gray-200 rounded p-2 w-full"
            name="email"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="inline-block text-lg mb-2 text-gray-200"
          >
            Password
          </label>
          <input
            type="password"
            className="border border-gray-200 rounded p-2 w-full"
            name="password"
          />
        </div>

        <div className="mb-6">
          <button
            type="submit"
            className="w-full inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors relative overflow-hidden text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors"
          >
            Sign In
          </button>
        </div>
      </form>
      <div className="m-8 text-center text-gray-200">
        <p>--- OR ---</p>
      </div>
      <button
        className="w-full inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors relative overflow-hidden text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors"
        onClick={() => signIn("google", { callbackUrl: "/" })}
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-icon="google"
          className="mr-8 w-5"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 488 512"
        >
          <path
            fill="red"
            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
          ></path>
        </svg>
        Continue with Google
      </button>
    </>
  );
};

export default LoginComp;
