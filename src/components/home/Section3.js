import React from "react";

const Section3 = () => {
  return (
    <section className="py-40 bg-gray-200">
      <div className="flex flex-col md:flex-row justify-center items-center container mx-auto px-10 md:px-20">
        <div className="flex flex-col gap-5 justify-center items-start">
          <div className="text-6xl text-gray-800 font-bold">
            Where hanging out is easy
          </div>
          <div className="leading-8 text-gray-600 text-xl font-light">
            Grab a seat in a voice channel when you’re free. Friends in your
            server can see you’re around and instantly pop in to talk without
            having to call.
          </div>
        </div>

        <img
          className="w-full"
          src="575a0322f3b36ca2fecb23ad2c6dd5ad.svg"
          alt="img"
        />
      </div>
    </section>
  );
};

export default Section3;
