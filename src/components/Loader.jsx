import React from "react";
import { ScaleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen">
      <ScaleLoader size={100} color="#36d7b7" />
    </div>
  );
};

export default Loader;
