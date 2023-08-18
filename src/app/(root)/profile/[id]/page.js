import ProfileHeader from "@/components/shared/ProfileHeader";
import { profileTabs } from "@/constants";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { fetchUser } from "@/lib/actions/user.action";
import { redirect } from "next/navigation";
import PostCard from "@/components/cards/PostCard";
import ThreadsTab from "@/components/shared/ThreadsTab";

const page = async ({ params }) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }

  const userInfo = await fetchUser(params.id);
  if (!userInfo?.onboarded) redirect("/");
  // console.log(params.id);
  return (
    <section>
      <ProfileHeader
        accountId={userInfo.id}
        authUserId={session.user.id}
        name={userInfo.name}
        username={userInfo.username}
        imgUrl={userInfo.image}
        bio={userInfo.bio}
      />

      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select your country
        </label>
        <select
          id="tabs"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option>Profile</option>
          <option>Canada</option>
          <option>France</option>
          <option>Germany</option>
        </select>
      </div>
      <ul className="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
        {profileTabs.map((tab) => (
          <li
            className="w-full flex min-h-[50px] flex-1 justify-center items-center gap-3 bg-[#24292F]/90 text-gray-200 data-[state=active]:bg-[#0e0e12] data-[state=active]:text-light-2"
            key={tab.label}
          >
            <Image
              src={tab.icon}
              alt={tab.label}
              width={24}
              height={24}
              className="object-contain"
            />
            <p className="max-sm:hidden">{tab.label}</p>
            {tab.label === "Threads" && (
              <p className="ml-1 rounded-sm bg-gray-400 px-2 py-1 !text-tiny-medium text-gray-200">
                {userInfo.threads.length}
              </p>
            )}
          </li>
        ))}

        {/* <li className="w-full">
        <a href="#" className="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Dashboard</a>
    </li> */}
      </ul>
      <ThreadsTab
        currentUserId={session.user.id}
        accountId={userInfo.id}
        accountType="User"
      />
    </section>
  );
};

export default page;
