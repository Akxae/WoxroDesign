import React from "react";

function Contact() {
  return (
    <section className="text-white flex justify-center items-center mb-28 md:mb-60">
      <div className="w-9/12 flex flex-col items-center gap-8 md:gap-14">
        <h1 className="font-roboto font-light text-center text-2xl lg:text-5xl">
          Interested In Delving Deeper Into The Project?
        </h1>
        <p  className="font-roboto font-light w-12/12 lg:w-9/12 text-center md:text-xl lg:text-28px lg:leading-10">
          If you'd like to explore further details about our initiatives or any
          of our affiliated brands, don't hesitate to connect. You can reach out
          to us via email at <span className="font-medium">hello@abc.com</span> or give us a call at{" "}
          <span className="font-medium">+91 480 20802730</span>
        </p>
        <div className="grid md:grid-cols-2 w-8/12 gap-10 place-items-center mt-4 ">
          <button className="w-full border flex items-center justify-center md:h-8.5vh h-10 font-poppins font-medium  md:text-lg  border-white py-4  hover:text-black hover:bg-white">Ring is on Skype</button>
          <button className="w-full h-10 flex items-center justify-center md:h-8.5vh bg-white text-black font-poppins  font-medium md:text-lg py-4 hover:bg-black hover:text-white hover:border-white hover:border">Contact Us</button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
