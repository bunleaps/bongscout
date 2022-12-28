import React from "react";

import {
  BsAwardFill,
  BsFillCalendarEventFill,
  BsFillPinMapFill,
} from "react-icons/bs";

const trials = [
  {
    id: 1,
    name: "First Team Trials",
    club: "Svay Rieng FC",
    date: "18/01/2023",
  },
  {
    id: 2,
    name: "Second Team Trials",
    club: "Svay Rsdfdieng FC",
    date: "18/01/2023",
  },
  {
    id: 3,
    name: "Second Team Trials",
    club: "Svay Rsdfdieng FC",
    date: "18/01/2023",
  },
];

export default function Trials() {
  return (
    <div>
      <h1 className="font-semibold text-xl">Discover</h1>
      <div className="w-full flex overflow-auto">
        <div className="flex">
          {trials.map((trial) => (
            <div
              key={trial.id}
              className="w-80 flex items-center cursor-pointer  bg-white rounded text-black p-5 mr-2"
            >
              <BsAwardFill className="text-5xl mr-3" />
              <div>
                <h3 className="font-medium">{trial.name}</h3>
                <p className="flex items-center">
                  <BsFillPinMapFill className="mr-2" />
                  {trial.club}
                </p>
                <p className="flex items-center">
                  <BsFillCalendarEventFill className="mr-2" />
                  {trial.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
