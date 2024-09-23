import React from "react";
import { Firstpage } from "./Firstpage";
import { Latestcollection } from "./Latestcollection";
import { Ourpolicy } from "./Ourpolicy";
import { TopRated } from "./TopRated";

export const Home = () => {
  return (
    <div>
      <Firstpage />
      <Latestcollection />
      <TopRated />
      <Ourpolicy />
    </div>
  );
};
