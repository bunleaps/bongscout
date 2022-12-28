import React from "react";
import Trials from "@/components/Trials";
import Matches from "@/components/Matches";
import Posts from "@/components/Posts";

export default function Home() {
  return (
    <div>
      <Trials />
      <Matches />
      <Posts />
    </div>
  );
}
