import React from "react";
import Posts from "@/components/Posts";

import {
  BsAwardFill,
  BsFillCalendarEventFill,
  BsFillPinMapFill,
  BsFillPersonFill,
} from "react-icons/bs";

const player = {
  name: "Thierry Chantha Bin",
  position: "Striker",
  club: "Visakha FC",
  age: 31,
  games: 28,
  goals: 18,
  assists: 5,
};

export default function Profile() {
  return (
    <div>
      <h1 className="font-semibold text-xl pb-2 mb-5 border-b border-b-white">
        Profile
      </h1>
      <div className="w-80 flex items-center cursor-pointer p-3">
        <div className="w-4/5">
          <p className="text-lg font-semibold">{player.name}</p>
          <p className="flex items-center">
            <BsFillPersonFill className="mr-2" />
            {player.position}
          </p>
          <p className="flex items-center">
            <BsFillPinMapFill className="mr-2" /> {player.club}
          </p>
        </div>
        <div>
          <div>
            <picture>
              <img
                className="rounded-full mr-2"
                src="/static/images/player_profile.jpg"
                width={100}
                height={100}
                alt="profile"
              />
            </picture>
          </div>
        </div>
      </div>
      <div className="w-80 flex justify-between items-center cursor-pointer rounded bg-white text-black p-5 mt-2">
        <div className="flex flex-col items-center">
          <p className="font-bold text-2xl">{player.age}</p>
          Yearsold
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold text-2xl">{player.games}</p>
          Games
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold text-2xl">{player.goals}</p>
          Goals
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold text-2xl">{player.assists}</p>
          Assists
        </div>
      </div>
      <Posts />
    </div>
  );
}
