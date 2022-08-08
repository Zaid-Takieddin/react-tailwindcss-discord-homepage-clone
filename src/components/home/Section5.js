import React from "react";

const Section5 = () => {
  return (
    <section className="py-40 bg-gray-200">
      <div className="container mx-auto px-20 flex flex-col gap-6 justify-center items-center">
        <div className="text-7xl font-bold text-gray-800 text-center">
          RELIABLE TECH FOR STAYING CLOSE
        </div>
        <div className="leading-8 text-gray-600 text-xl font-light text-center">
          Low-latency voice and video feels like you’re in the same room. Wave
          hello over video, watch friends stream their games, or gather up and
          have a drawing session with screen share.
        </div>

        <img
          className="w-full"
          src="98ea5b9e92e304c7d352ac462996adc5.svg"
          alt="img"
        />

        <div className="text-4xl font-bold">Ready to start your journey?</div>
        <button className="py-2 px-6 rounded-3xl bg-indigo text-white text-2xl hover:shadow-xl transition ease-in delay-100 hover:bg-lightindigo">
          Download for Windows
        </button>
      </div>
    </section>
  );
};

export default Section5;
