import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="top-0 relative w-screen h-screen ">
      <div
        className="flex flex-col px-10 absolute mx-10 top-1/4 
        lg:top-1/4 lg:left-1/4  lg:transform lg:translate-x-1/2 
      lg:translate-y-1/2 lg:justify-center lg:items-center"
      >
        <div>
          <h1 className="italic text-5xl font-serif">Decent</h1>
        </div>
        <div>
          <h1 className="italic text-2xl">Your Very own Stylist.</h1>
        </div>
      </div>
    </div>
  );
}

export default Banner;
