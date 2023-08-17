import Image from "next/image";
import profile from "../../../public/assets/profile.svg";
import Link from "next/link";

const ProfileHeader = ({
  accountId,
  authUserId,
  name,
  username,
  imgUrl,
  bio,
  type,
}) => {
  return (
    <div className="flex w-full flex-col justify-start">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-20 w-20 object-cover">
            <Image
              src={imgUrl}
              alt="logo"
              fill
              className="rounded-full object-cover shadow-2xl"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-left text-xl font-semibold text-white">
              {name}
            </h2>
            <p className="text-base-medium text-gray-400">@{username}</p>
          </div>
        </div>
        {accountId === authUserId && type !== "Community" && (
        <Link href="/profile/edit">
          <div className="flex cursor-pointer gap-3 rounded-lg bg-[#24292F]/90 px-4 py-2">
            <Image src="/assets/edit.svg" alt="logout" width={16} height={16} />

            <p className="text-gray-200 max-sm:hidden">Edit</p>
          </div>
        </Link>
        )}
      </div>

      <p className="mt-6 max-w-lg text-base-regular text-gray-100">{bio}</p>

      <div className="mt-12 h-0.5 w-full bg-dark-3" />
    </div>
  );
};

export default ProfileHeader;
