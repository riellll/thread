"use client";
import React from "react";
import profile from "../../../public/assets/profile.svg";
import { useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { updateUser } from "@/lib/actions/user.action";

// import { useRouter, redirect } from "next/navigation";
// import Link from "next/link";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { UserValidation } from "@/lib/validations/user";

const AccountProfile = ({ user, btnTitle }) => {
  const [userImage, setUserImage] = useState([]);

  const pathname = usePathname();
  const router = useRouter();
  // console.log(user.image);
  const fileImage = async (e) => {
    // console.log(e.target.files[0]);
    if (!e.target.files[0]) {
      setUserImage([]);
      return;
    }
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      // console.log(reader.result);
      setUserImage(reader.result);
    };
    reader.onerror = (error) => {
      alert("error image", error);
    };
  };

  const handleSubmit = async (e) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    e.preventDefault();

    const userId = user.id;
    const name = e.target[1].value;
    const path = pathname;
    const username = e.target[2].value;
    const bio = e.target[3].value;
    const image = userImage[0] ? userImage : user.image;

    if (!name || !username || !bio) {
      alert("please input all onboarding forms");
      return;
    }

    console.log({ userId, name, path, username, bio, image });

    await updateUser({ userId, name, path, username, image, bio });

    if (pathname === "/profile/edit") {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-start text-slate-300"
      >
        <div className="flex items-center gap-4 mb-6">
          <label
            htmlFor="logo"
            className="flex h-24 w-24 items-center justify-center rounded-full bg-dark-4"
          >
            {userImage[0] ? (
              <Image
                className="rounded-full h-20 w-24"
                src={userImage}
                alt="profile pic"
                width={100}
                height={100}
                priority
              />
            ) : (
              <Image
                className="rounded-full h-20 w-24"
                src={user?.image || profile}
                alt="profile pic"
                width={100}
                height={100}
                priority
              />
            )}
          </label>
          <input
            accept="image/*"
            type="file"
            className="rounded p-2 w-full"
            name="logo"
            onChange={fileImage}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="Name" className="inline-block text-lg mb-2">
            Name
          </label>
          <input
            type="text"
            className="bg-black rounded p-2 w-full"
            name="name"
            defaultValue={user.name}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="Username" className="inline-block text-lg mb-2">
            Username
          </label>
          <input
            type="text"
            className="bg-black rounded p-2 w-full"
            name="Username"
            defaultValue={user.username}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="Bio" className="inline-block text-lg mb-2">
            Bio
          </label>
          <textarea
            className="bg-black rounded p-2 w-full"
            name="Bio"
            rows="10"
            defaultValue={user.bio}
          ></textarea>
        </div>

        <button
          type="submit"
          className="text-white bg-purple-900 hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2 justify-center"
        >
          {btnTitle}
        </button>
      </form>
    </>
  );
};

export default AccountProfile;
