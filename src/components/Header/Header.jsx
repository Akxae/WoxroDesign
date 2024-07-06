import React from "react";
import { TfiClose } from "react-icons/tfi";

function Header() {
  return (
    <header className="grid bg-black w-full py-4">
      <div className="col-start-12 col-end-13 text-white flex justify-end py-2 pr-3 lg:pr-10">
        <TfiClose className=" sm:text-2xl md:text-3xl lg:text-4xl" />
      </div>
    </header>
  );
}

export default Header;
