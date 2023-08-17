import React from "react";
import { fetchThreadById } from "@/lib/actions/thread.action";
import PostCard from "@/components/cards/PostCard";
import Comment from "@/components/forms/Comment";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { fetchUser } from "@/lib/actions/user.action";
import { redirect } from "next/navigation";


const page = async ({ params }) => {
    const session = await getServerSession(authOptions);
    if (!session) {
      redirect("/login");
    }

  const userInfo = await fetchUser(session?.user.id);
  if (!userInfo?.onboarded) redirect("/");


  const thread = await fetchThreadById(params.id);
//   console.log(thread.author);

  return (
    <section className="relative">
      <div>
        <PostCard
          id={thread._id}
          currentUserId={session?.user.id}
          parentId={thread.parentId}
          content={thread.text}
          author={thread.author}
          createdAt={thread.createdAt}
          comments={thread.children}
        />
      </div>

      <div className='mt-7'>
        <Comment
          threadId={params.id}
          currentUserImg={session?.user.image}
          currentUserId={userInfo?._id.toString()}
        />
      </div>

      <div className='mt-10'>
        {thread.children.map((childItem) => (
          <PostCard
            key={childItem._id}
            id={childItem._id}
            currentUserId={session?.user.id}
            parentId={childItem.parentId}
            content={childItem.text}
            author={childItem.author}
            community={childItem.community}
            createdAt={childItem.createdAt}
            comments={childItem.children}
            isComment={true}
          />
        ))}
      </div>
    </section>
  );
};

export default page;
