import PostCard from "@/components/cards/PostCard";
import { fetchPosts } from "@/lib/actions/thread.action";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { fetchUser } from "@/lib/actions/user.action";
import { redirect } from "next/navigation";
import Pagination from "@/components/shared/Pagination";


export default async function Home({searchParams}) {
  // const session = await getServerSession(authOptions);
 /*  if (!session) {
    redirect("/login");
  } */
  // console.log(searchParams);
  // const userInfo = await fetchUser(session?.user.id);
  // if (!userInfo?.onboarded) redirect("/onboarding");


  const result = await fetchPosts(searchParams.page ? searchParams.page : 1, 10);
  // console.log(result);

  return (
    <>
      <h1 className="text-4xl text-white font-bold text-left">Home</h1>

      <section className="mt-9 flex flex-col gap-10">
      {result.posts.length === 0 ? (
          <p className='no-result'>No threads found</p>
        ) : (
          <>
            {result.posts.map((post) => (
              <PostCard
                key={post._id}
                id={post._id}
                currentUserId={'session?.user.id'}
                parentId={post.parentId}
                content={post.text}
                author={post.author}
                createdAt={post.createdAt}
                comments={post.children}
              />
            ))}
          </>
        )}
      </section>

       <Pagination
        path='/'
        pageNumber={searchParams?.page ? +searchParams.page : 1}
        isNext={result.isNext}
        Pcount={result.pageCount}
      />
    </>
  );
}
