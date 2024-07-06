import React from "react";
import banner from "../../data/banner.jpg";

function Hero() {
  return (
    <section className="flex flex-col items-center bg-black w-full pb-5">
      <h1 className="text-2xl md:text-3xl lg:text-2.7xl font-roboto text-center font-extralight md:p-6 w-10/12 text-white md:leading-tight mb-6">
        Epic Games : An American Video Game And Software Developer And Publisher
        Based In Cary, North Carolina.
      </h1>
      <div className="banner w-10/12 bg-red-400 md:h-50vh lg:h-60vh xl:h-65vh">
        <img src={banner} alt="" className="object-cover object-top w-full h-full" />
      </div>
      <p style={{width:'77%'}} className="font-poppins py-12 text-gray-300 text-center font-normal text-xs md:text-base lg:text-17pxl">
        Create, play, and battle with friends for free in Fortnite. Be the last
        player standing in Battle Royale and Zero Build, experience a concert or
        live event, or discover over a million creator made games, including
        racing, parkour, zombie survival, and more. Each Fortnite island has an
        individual age rating so you can find the one that's right for you and
        your friends. Find it all in Fortnite ... Drop In.
      </p>
      <button className="w-7/12 h-10 md:h-8.5vh text-sm bg-white md:w-3/12 py-5 md:text-xl font-poppins font-normal hover:bg-black hover:text-white hover:border-white hover:border flex items-center justify-center">Visit Website</button>
    </section>
  );
}

export default Hero;
