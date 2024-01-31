import React from "react";
const Loader = () => {
  return (
    <div className="flex w-full h-screen absolute top-0 z-50 bg-transparent justify-center items-center">
        <div className="border-2 border-x-loaderCircle  rounded-full w-28 h-28 relative">
        <p className="text-white font-semibold text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">loading...</p>
        </div>
    </div>
  );
};

export default Loader;
