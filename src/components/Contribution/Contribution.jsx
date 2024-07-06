import React from "react";
import { PiCurrencyDollarSimpleThin } from "react-icons/pi";


const contributionData = [
  {
    head: "5M",
    desc: "Daily User Engagements",
  },
  {
    head: <><PiCurrencyDollarSimpleThin/>500K</>,
    desc: "Revenue Surge for an Platform",
  },
  {
    head: "10X",
    desc: "ROAS on all our marketing campaigns",
  },
];

function Contribution() {
  return (
    <section className="text-white flex justify-center items-center my-16 sm:my-26 md:my-30 lg:my-36 ">
      <div className="w-9/12 flex flex-col items-center gap-6">
        <h1
          className="text-3xl md:text-3xl lg:text-2.7xl font-roboto font-extralight"
        >
          Our Contribution
        </h1>
        <p className="font-poppins font-normal text-gray-300 text-xs md:text-base lg:text-17pxl text-center">
          Our core offering extends beyond mere profit generation; we emphasize
          the growth and active involvement of our user community.Collaborating
          with us represents an investment, rather than a mere expenditure. Our
          dedication to providing distinctive digital interactions guarantees
          unparalleled benefits for our clientele.
        </p>
        <div className="grid sm:grid-cols-3 w-full h-full place-items-center mt-12 md:mt-16 gap-6">
          {contributionData.map((item, index) => (
            <div key={index} className="flex flex-col text-center h-full gap-3 lg:gap-8 items-center">
              <h1 className=" text-4xl lg:text-80pxl h-8.5vh font-roboto font-extralight flex justify-center items-center">{item.head}</h1>
              <p className="w-10/12 text-xs lg:text-2xl font-roboto font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contribution;
