import React from "react";

const Section4 = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center py-40 container mx-auto px-10 md:px-20">
      <img
        className="w-full"
        src="921b1ae33edca174b6ebe787bb8b6c3b.svg"
        alt="img"
      />
      <div className="flex flex-col gap-5 justify-center items-center">
        <div className="text-6xl text-gray-800 font-bold">
          From few to a fandom
        </div>
        <div className="leading-8 text-gray-600 text-xl font-light">
          Get any community running with moderation tools and custom member
          access. Give members special powers, set up private channels, and
          more.
        </div>
      </div>
    </section>
  );
};

export default Section4;
