"use client";
import { addCommentToThread } from "@/lib/actions/thread.action";
import profile from "../../../public/assets/profile.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Comment = ({ threadId, currentUserImg, currentUserId }) => {
  const pathname = usePathname();
/*   console.log(
    typeof threadId,
    typeof currentUserImg,
    typeof currentUserId,
    typeof pathname
  ); */

  const handleSubmit = async (e) => {
    e.preventDefault();
    const comment = e.target[0].value;
    if(!comment) return null
    // console.log(e.target[0].value)
    await addCommentToThread(threadId, comment, currentUserId, pathname);

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="chat" className="sr-only">
        Your message
      </label>
      <div className="flex items-center px-3 py-3 bg-black border-y border-y-gray-500 dark:bg-gray-700">
        <div className="inline-flex justify-center p-2 text-gray-500 rounded-full dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
          <Image
            src={currentUserImg}
            alt="heart"
            width={48}
            height={48}
            className="object-contain rounded-full"
          />
        </div>

        <textarea
          id="chat"
          rows="1"
          className="block mx-4 p-2.5 w-full text-sm text-gray-200 bg-black rounded-lg border border-gray-300  outline-none ring-0 shadow-none focus:shadow-none focus:outline-none border-none focus:border-none focus:ring-0 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your message..."
          required
        ></textarea>
        <button
          type="submit"
          className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer dark:text-blue-500 dark:hover:bg-gray-600"
        >
          <svg
            className="w-5 h-5 rotate-90"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 20"
          >
            <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
          </svg>
          <span className="sr-only">Send message</span>
        </button>
      </div>
    </form>
  );
};

export default Comment;
