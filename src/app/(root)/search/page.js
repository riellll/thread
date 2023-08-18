import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { fetchUser, fetchUsers } from "@/lib/actions/user.action";
import { redirect } from "next/navigation";

const page = async ({searchParams}) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }
  console.log(searchParams);
  const userInfo = await fetchUser(session?.user.id);
  if (!userInfo?.onboarded) redirect("/");

/*   const result = await fetchUsers({
    userId: session?.user.id,
    searchString: searchParams.q,
    pageNumber: searchParams?.page ? +searchParams.page : 1,
    pageSize: 25,
  }); */
  return (
    <>
    <h1 className='text-3xl font-bold text-white pb-10'>Search</h1>
    <form>   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-gray-500 border text-xl border-gray-300 rounded-lg bg-gray-800 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-900 dark:focus:border-blue-900" placeholder="Search..." required />
    </div>
</form>
</>
  )
}

export default page