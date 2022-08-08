import React from "react";

const Section2 = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center py-40 container mx-auto px-10 md:px-20">
      <img
        className="w-fit"
        src="46b2132c01604c9493d558de444929f4.svg"
        alt="img"
      />

      <div className="flex flex-col gap-5 justify-center items-center">
        <div className="text-6xl text-gray-800 font-bold">
          Create an invite-only place where you belong
        </div>
        <div className="leading-8 text-gray-600 text-xl font-light">
          Discord servers are organized into topic-based channels where you can
          collaborate, share, and just talk about your day without clogging up a
          group chat.
        </div>
      </div>
    </section>
  );
};

export default Section2;
