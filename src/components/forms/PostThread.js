"use client";
import { createThread } from "@/lib/actions/thread.action";
import { usePathname, useRouter } from "next/navigation";

const PostThread = ({userId}) => {
  const pathname = usePathname();
  const router = useRouter();
 console.log(userId)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(e.target[0].value);
    await createThread({
      text: e.target[0].value,
      author: userId,
      path: pathname,
    });
    router.push("/");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mt-10 flex flex-col justify-start gap-10"
      >
        <div>
          <label
            htmlFor="message"
            className="block text-lg pb-3 font-medium text-gray-100 dark:text-white"
          >
            Content
          </label>
          <textarea
            id="message"
            rows="4"
            className="block no-focus p-2.5 w-full h-80 text-sm text-gray-100 bg-gray-800 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Create post..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="text-white bg-purple-900 hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2 justify-center"
        >
          Post Thread
        </button>
      </form>
    </>
  );
};

export default PostThread;
