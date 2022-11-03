import React from "react";
import { useEffect } from "react";
const Home = () => {
  const mouseOverFunc = (e) => {
    console.log(e.clientX);
    console.log(e.clientY);
  };
  useEffect(() => {
    document.addEventListener("mousemove", mouseOverFunc);

    return () => {
      document.removeEventListener("mousemove", mouseOverFunc);
    };
  }, []);

  return <div>Home</div>;
};

export default Home;
