"use client";
import { useRouter } from "next/navigation";

const Pagination = ({ path, pageNumber, isNext, Pcount }) => {
  const router = useRouter();
//   console.log(Pcount)
  return (
    <div className="flex flex-col items-center">
      {/*   <!-- Help text -->
  <span class="text-sm text-gray-700 dark:text-gray-400">
      Showing <span class="font-semibold text-gray-900 dark:text-white">1</span> to <span class="font-semibold text-gray-900 dark:text-white">10</span> of <span class="font-semibold text-gray-900 dark:text-white">100</span> Entries
  </span> */}
      {/* <!-- Buttons --> */}
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          className={
            pageNumber === 1
              ? `flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-slate-950 rounded-l dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`
              : `flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-slate-900 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`
          }
          disabled={isNext}
          onClick={() => router.push(`/${path}?page=${--pageNumber}`)}
        >
          Prev
        </button>
        <p className="flex items-center justify-center text-gray-200 px-4">{pageNumber}/{Pcount}</p>

        <button className={Pcount !== pageNumber || isNext ? `flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-slate-900 border-0 border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white` : `flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-slate-950 border-0 border-gray-700 rounded-r dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
        disabled={Pcount === pageNumber}
        onClick={() => router.push(`/${path}?page=${++pageNumber}`)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
