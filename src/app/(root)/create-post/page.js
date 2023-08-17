import PostThread from "@/components/forms/PostThread";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { fetchUser } from "@/lib/actions/user.action";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession(authOptions);
  // console.log(session);
  if (!session) {
    redirect("/login");
  }

  const userInfo = await fetchUser(session?.user.id);
  if (!userInfo?.onboarded) redirect("/");
  // console.log(user);
  return (
    <>
      <h1 className="text-3xl font-bold text-white">Create Thread</h1>

      <PostThread userId={userInfo?._id.toString()} />
    </>
  );
};

export default page;
