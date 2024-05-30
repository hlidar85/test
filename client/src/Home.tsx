import React from "react";
import { trpc } from "./utils/trpc";

const Home = () => {
  return <div>{trpc.sayHi.useQuery().data}</div>;
};

export default Home;
