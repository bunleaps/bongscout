import React from "react";
import Image from "next/image";

import {
  BsAwardFill,
  BsFillCalendarEventFill,
  BsFillPinMapFill,
} from "react-icons/bs";

import { BiLike, BiCommentDots, BiShare } from "react-icons/bi";

const posts = [
  {
    id: 1,
    name: "Thierry Chantha Bin",
    content: "It was fun!",
    date: "13/20/2025",
    image: "/static/images/posts.jpg",
  },
  {
    id: 2,
    name: "Thierry Chantha Bin",
    content: "Second Post!",
    date: "13/20/2025",
    image: "/static/images/posts.jpg",
  },
];

export default function Posts() {
  return (
    <div className="mt-5 mb-5">
      <h1 className="font-semibold text-xl">Posts</h1>
      <div className="w-full flex flex-wrap">
        {posts.map((post) => (
          <div
            key={post.id}
            className="w-full rounded bg-white text-black mb-2 cursor-pointer"
          >
            <div className="flex p-2">
              <div>
                <Image
                  className="rounded-full mr-2"
                  src="/static/images/player_profile.jpg"
                  width={45}
                  height={45}
                  alt="profile"
                />
              </div>
              <div>
                <p className="font-semibold">{post.name}</p>
                <p>{post.date}</p>
              </div>
            </div>
            <p className="p-2">{post.content}</p>
            <div>
              <picture>
                <img src={post.image} alt="picture" />
              </picture>
            </div>
            <div className="h-[50px] flex items-center justify-around">
              <div className="flex items-center justify-center">
                <BiLike className="mr-1" />
                Like
              </div>
              <div className="flex items-center justify-center">
                <BiCommentDots className="mr-1" />
                Comment
              </div>
              <div className="flex items-center justify-center">
                <BiShare className="mr-1" />
                Share
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
