'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import home from '../../../public/assets/home.svg'
import search from '../../../public/assets/search.svg'
import creat from '../../../public/assets/create.svg'
import profile from '../../../public/assets/user.svg'
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";


const BottomBar = () => {

  const { data: session } = useSession();
   const pathname = usePathname();


  return (
    
<section className="fixed bottom-0 z-10 w-full rounded-t-3xl bg-glassmorphism p-4 backdrop-blur-lg xs:px-7 md:hidden">
    {/* <div className="flex items-center justify-between gap-3 xs:gap-5"> */}
    <ul className=" flex items-center justify-between gap-3 xs:gap-5 text-white">
         <li>
            <Link href="/" className={`relative flex flex-col items-center gap-2 rounded-lg p-2 sm:flex-1 sm:px-2 sm:py-2.5 ${pathname === '/' && 'bg-purple-900'}`}>
               <Image className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                src={home}
                alt='heart'
                width={24}
                height={24}
                />

               <span>Home</span>
            </Link>
         </li>
         <li>
            <Link href="/search" className={`relative flex flex-col items-center gap-2 rounded-lg p-2 sm:flex-1 sm:px-2 sm:py-2.5 ${pathname === '/search' && 'bg-purple-900'}`}>
               <Image className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                src={search}
                alt='heart'
                width={24}
                height={24}
                />

               <span>Search</span>
            </Link>
         </li>
         <li>
            <Link href="/create-post" className={`relative flex flex-col items-center gap-2 rounded-lg p-2 sm:flex-1 sm:px-2 sm:py-2.5 ${pathname === '/create-post' && 'bg-purple-900'}`}>
               <Image className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                src={creat}
                alt='heart'
                width={24}
                height={24}
                />

               <span>Creat Post</span>
            </Link>
         </li>
         <li>
            <Link href={`/profile/${session?.user.id}`} className={`relative flex flex-col items-center gap-2 rounded-lg p-2 sm:flex-1 sm:px-2 sm:py-2.5 ${pathname === `/profile/${session?.user.id}` && 'bg-purple-900'}`}>
               <Image className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white"
                src={profile}
                alt='heart'
                width={24}
                height={24}
                />

               <span>Profile</span>
            </Link>
         </li>
      
      </ul>
    {/* </div> */}
</section>

  )
}

export default BottomBar