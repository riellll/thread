"use client";

import { deleteThread } from "@/lib/actions/thread.action";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const DeleteThread = ({
  threadId,
  currentUserId,
  authorId,
  parentId,
  isComment,
}) => {
// console.log(threadId);
    const pathname = usePathname();
    const router = useRouter();
  
    if (currentUserId !== authorId || pathname === "/") return null;

    
  return (
    <Image
      src="/assets/delete.svg"
      alt="delte"
      width={18}
      height={18}
      className="cursor-pointer object-contain"
      onClick={async () => {
        await deleteThread(threadId, pathname);
        if (!parentId || !isComment) {
          router.push("/");
        }
        console.log(threadId,
          currentUserId,
          authorId,
          parentId,
          isComment,)
      }}
    />
  );
};

export default DeleteThread;
