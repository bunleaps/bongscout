import React from "react";

import {
  BsAwardFill,
  BsFillCalendarEventFill,
  BsFillPinMapFill,
} from "react-icons/bs";

const matches = [
  {
    id: 1,
    team1: "PPCFC",
    team1_image: "/static/images/ppcfc.png",
    team2: "Svay Rieng FC",
    team2_image: "/static/images/svfc.png",
    date: "18 Jan",
    time: "01:00 PM",
  },
  {
    id: 2,
    team1: "BK FC",
    team1_image: "/static/images/bkfc.jpg",
    team2: "Svay Rieng FC",
    team2_image: "/static/images/svfc.png",
    date: "18 Jan",
    time: "01:00 PM",
  },
  {
    id: 3,
    team1: "PPCFC",
    team1_image: "/static/images/ppcfc.png",
    team2: "Svay Rieng FC",
    team2_image: "/static/images/svfc.png",
    date: "18 Jan",
    time: "01:00 PM",
  },
];

export default function Matches() {
  return (
    <div className="mt-5">
      <h1 className="font-semibold text-xl">Matches</h1>
      <div className="w-full flex overflow-auto">
        <div className="flex">
          {matches.map((match) => (
            <div
              key={match.id}
              className="w-80 flex items-center justify-between rounded bg-white text-black p-5 mr-2 cursor-pointer"
            >
              <div className="text-center">
                <picture>
                  <img
                    src={match.team1_image}
                    width={80}
                    height={80}
                    alt="logo"
                  />
                </picture>
                <p className="font-semibold">{match.team1}</p>
              </div>
              <div className="text-center">
                <p className="flex items-center">
                  <BsFillCalendarEventFill className="mr-1" />
                  {match.date}
                </p>
                <p className="font-semibold text-2xl">vs</p>
                <p>{match.time}</p>
              </div>
              <div className="text-center">
                <picture>
                  <img
                    src={match.team2_image}
                    width={80}
                    height={80}
                    alt="logo"
                  />
                </picture>
                <p className="font-semibold">{match.team2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
