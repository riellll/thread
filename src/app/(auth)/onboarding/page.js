import AccountProfile from "@/components/forms/AccountProfile";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { fetchUser } from "@/lib/actions/user.action";
import { redirect } from "next/navigation";

const page = async () => {
  const { user } = await getServerSession(authOptions);
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (userInfo?.onboarded) redirect("/");
  // console.log(user);
   const userData = {
    id: user.id,
    objectId: userInfo?._id.toString(),
    username: userInfo ? userInfo?.username : user.username ?? "",
    name: userInfo ? userInfo?.name : user.name ?? "",
    bio: userInfo ? userInfo?.bio : "",
    image: userInfo ? userInfo?.image : user.image,
  };


  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <h1 className="font-bold text-3xl text-white">Onboarding</h1>
      <p className="mt-3 text-base-regular text-slate-300">
        Complete your profile now, to use Postchain.
      </p>

      <section className="mt-9 bg-zinc-950 p-10">
        <AccountProfile user={userData} btnTitle='Continue'/>
      </section>
    </main>
  );
};

export default page;