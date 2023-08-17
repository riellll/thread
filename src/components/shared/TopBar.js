import React from "react";
import logout from "../../../public/assets/logout.svg";
// import signedIn from '../../../public/assets/user.svg'
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SignOut from "../login_comp/SignOut";

const TopBar = async () => {
  const session = await getServerSession(authOptions);
  // console.log(session);
  return (
    <>
      <nav className="fixed top-0 z-50 w-full h-20 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-4 lg:px-5 lg:pl-3 text-white bg-slate-900">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              {/*    <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button> */}
              <a href="https://flowbite.com" className="flex ml-2 md:mr-24">
                <Image
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 mr-3"
                  alt="FlowBite Logo"
                  width={24}
                  height={24}
                />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Postchain
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <SignOut session={session} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopBar;