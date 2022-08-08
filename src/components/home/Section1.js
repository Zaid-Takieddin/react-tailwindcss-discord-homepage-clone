import React from "react";

const Section1 = () => {
  return (
    <section className="h-fit py-20 relative cursor-default bg-purple">
      <div className="container mx-auto px-20 z-10 flex flex-col items-start md:items-center justify-center gap-10 md:gap-20">
        <div className="md:text-center font-bold text-white text-3xl md:text-7xl lg:text-8xl z-10">
          IMAGINE A PLACE...
        </div>
        <div className="md:text-center font-light text-lg text-white md:w-1/2 z-10">
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </div>
        <div className="flex gap-4 z-10 flex-col md:flex-row justify-around items-start md:w-1/2">
          <button className="rounded-3xl p-3 bg-white md:w-1/2 h-fit hover:shadow-xl hover:text-purple transition ease-in delay-100 text-xl">
            Download for Windows
          </button>
          <button className="rounded-3xl p-3 w-fit md:w-1/2 h-fit bg-darkgray text-white hover:shadow-xl hover:bg-neutral-700 transition ease-in delay-100 text-xl">
            Open Discord in your browser
          </button>
        </div>
      </div>
      {/* <img
        className="absolute bottom-0 object-cover"
        src="e6d57714479874c665b36c7adee76b1d.svg"
        alt="img"
      /> */}

      {/* <img
        className="absolute bottom-0 -left-56"
        src="8a8375ab7908384e1fd6efe408284203.svg"
        alt="img"
      /> */}

      {/* <img
        className="absolute bottom-0 -right-44"
        src="c40c84ca18d84633a9d86b4046a91437.svg"
        alt="img"
      /> */}
    </section>
  );
};

export default Section1;
