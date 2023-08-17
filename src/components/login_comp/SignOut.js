"use client";

import Image from "next/image";
import logout from "../../../public/assets/logout.svg";
import login from "../../../public/assets/login.svg";
import Link from "next/link";

const SignOut = ({ session }) => {
  return (
    <>
      <div className="flex cursor-pointer gap-3 p-2 hover:bg-purple-900 rounded-lg">
        <Image
          src={session ? logout : login}
          alt="logout"
          width={24}
          height={24}
          className="text-white"
        />
        {session ? (
          <button
            type="submit"
            className="block py-2 pl-3 pr-4 mt-1 text-light-2 max-lg:hidden text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            onClick={() => signOut("google", { callbackUrl: "/" })}
          >
            Logout
          </button>
        ) : (
          <Link
          href={'/login'}
            // type="submit"
            className="block py-2 pl-3 pr-4 mt-1 text-light-2 max-lg:hidden text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            // onClick={() => signOut("google", { callbackUrl: "/" })}
          >
            Login
          </Link>
        )}
        {/* <p className='text-light-2 max-lg:hidden'>Logout</p> */}
      </div>
    </>
  );
};

export default SignOut;
