"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import home from "../../../public/assets/home.svg";
import search from "../../../public/assets/search.svg";
import creat from "../../../public/assets/create.svg";
import profile from "../../../public/assets/user.svg";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const SideBar = () => {
  const { data: session } = useSession();

  const pathname = usePathname();

  const linkPath = `/profile/${session?.user.id}`

  console.log(session);

  return (
    <>
      {/* <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span className="sr-only">Open sidebar</span>
   <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>
 */}
      {/* <section className='sticky left-0 top-0 z-20 flex h-screen w-fit flex-col justify-between overflow-auto border-r border-r-dark-4 bg-dark-2 pb-5 pt-28 max-md:hidden'> */}
      <section
        id="default-sidebar"
        className="fixed top-16 left-0 z-40 w-56 h-screen transition-transform -translate-x-full md:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 pt-10 bg-slate-900 overflow-y-auto text-white dark:bg-gray-800">
          <ul className="space-y-10 font-medium">
            <li>
              <Link
                href="/"
                className={`flex items-center p-2 text-white rounded-lg dark:text-white ${
                  pathname === "/" && "bg-purple-900"
                } hover:bg-purple-900 dark:hover:bg-gray-700 group`}
              >
                <Image
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  src={home}
                  alt="heart"
                  width={24}
                  height={24}
                />

                <span className="ml-3">Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/search"
                className={`flex items-center p-2 text-white rounded-lg dark:text-white ${
                  pathname === "/search" && "bg-purple-900"
                } hover:bg-purple-900 dark:hover:bg-gray-700 group`}
              >
                <Image
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  src={search}
                  alt="heart"
                  width={24}
                  height={24}
                />

                <span className="ml-3">Search</span>
              </Link>
            </li>
            <li>
              <Link
                href="/create-post"
                className={`flex items-center p-2 text-white rounded-lg dark:text-white ${
                  pathname === "/create-post" && "bg-purple-900"
                } hover:bg-purple-900 dark:hover:bg-gray-700 group`}
              >
                <Image
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                  src={creat}
                  alt="heart"
                  width={24}
                  height={24}
                />

                <span className="ml-3">Creat Post</span>
              </Link>
            </li>
            <li>
              <Link
                href={`/profile/${session?.user.id}`}
                className={`flex items-center p-2 text-white rounded-lg dark:text-white ${
                  pathname === `/profile/${session?.user.id}` && "bg-purple-900"
                } hover:bg-purple-900 dark:hover:bg-gray-700 group`}
              >
                <Image
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white"
                  src={profile}
                  alt="heart"
                  width={24}
                  height={24}
                />

                <span className="ml-3">Profile</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
      {/* </section> */}
    </>
  );
};

export default SideBar;
