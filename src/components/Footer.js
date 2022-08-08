import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-darkgray pt-40 pb-20 w-full">
      <div className="container mx-auto px-10 md:px-20">
        <div className="flex flex-col md:flex-row gap-6 md:gap-0 md:justify-around items-start">
          <div className="flex flex-col gap-4 w-full">
            <div className="text-indigo font-bold text-3xl">
              IMAGINE A PLACE
            </div>
            <div className="text-white">English, USA</div>
            <div className="flex text-white gap-5">
              <div>
                <a href="https://twitter.com/discord">
                  <svg
                    fill="#FFFFFF"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="25px"
                    height="25px"
                  >
                    <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z" />
                  </svg>
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/discord/">
                  <svg
                    fill="#FFFFFF"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="25px"
                    height="25px"
                  >
                    {" "}
                    <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z" />
                  </svg>
                </a>
              </div>
              <div>
                <a href="https://www.facebook.com/discord/">
                  <svg
                    fill="#FFFFFF"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="25px"
                    height="25px"
                  >
                    {" "}
                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z" />
                  </svg>
                </a>
              </div>
              <div>
                <a href="https://www.youtube.com/discord/">
                  <svg
                    fill="#FFFFFF"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="25px"
                    height="25px"
                  >
                    <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex md:justify-around md:gap-0 gap-3 justify-between w-full">
            <ul className="text-white flex flex-col gap-5 w-1/2">
              <div className="text-indigo">Product</div>
              <Link
                className="hover:border-b-2 w-fit h-5 font-light"
                to="/download"
              >
                Download
              </Link>
              <Link
                className="hover:border-b-2 w-fit h-5 font-light"
                to="/nitro"
              >
                Nitro
              </Link>
              <Link
                className="hover:border-b-2 w-fit h-5 font-light"
                to="/status"
              >
                Status
              </Link>
            </ul>
            <ul className="text-white flex flex-col gap-5 w-1/2">
              <div className="text-indigo">Company</div>
              <Link
                className="hover:border-b-2 w-fit h-5 font-light"
                to="/about"
              >
                About
              </Link>
              <Link
                className="hover:border-b-2 w-fit h-5 font-light"
                to="/jobs"
              >
                Jobs
              </Link>
              <Link
                className="hover:border-b-2 w-fit h-5 font-light"
                to="/branding"
              >
                Branding
              </Link>
              <Link
                className="hover:border-b-2 w-fit h-5 font-light"
                to="/newsroom"
              >
                Newsroom
              </Link>
            </ul>
          </div>
          <div className="flex md:justify-around md:gap-0 gap-3 justify-between w-full">
            <ul className="text-white flex flex-col gap-5 w-1/2">
              <div className="text-indigo">Resources</div>
              <Link
                className="hover:border-b-2 w-fit h-5 font-light"
                to="/college"
              >
                College
              </Link>
              <Link
                className="hover:border-b-2 w-fit h-5 font-light"
                to="/support"
              >
                Support
              </Link>
              <Link
                className="hover:border-b-2 w-fit h-5 font-light"
                to="/safety"
              >
                Safety
              </Link>
              <Link
                className="hover:border-b-2 w-fit h-5 font-light"
                to="/blog"
              >
                Blog
              </Link>
              <Link
                className="hover:border-b-2 w-fit h-5 font-light"
                to="/feedback"
              >
                Feedback
              </Link>
              <Link
                className="hover:border-b-2 w-fit h-5 font-light"
                to="/developers"
              >
                Developers
              </Link>
              <Link
                className="hover:border-b-2 w-fit h-5 font-light"
                to="/streamkit"
              >
                Streamkit
              </Link>
            </ul>
            <ul className="text-white flex flex-col gap-5 w-1/2">
              <div className="text-indigo">Policies</div>
              <Link
                className="hover:border-b-2 w-fit h-5 font-light"
                to="/terms"
              >
                Terms
              </Link>
              <Link
                className="hover:border-b-2 w-fit h-5 font-light"
                to="/privacy"
              >
                Privacy
              </Link>
              <Link
                className="hover:border-b-2 w-fit h-5 font-light leading-5"
                to="/cookie-settings"
              >
                Cookie Settings
              </Link>
              <Link
                className="hover:border-b-2 w-fit h-5 font-light"
                to="/guidelines"
              >
                Guidelines
              </Link>
              <Link
                className="hover:border-b-2 w-fit h-5 font-light"
                to="/acknowledgements"
              >
                Acknowledgements
              </Link>
              <Link
                className="hover:border-b-2 w-fit h-5 font-light"
                to="/licenses"
              >
                Licenses
              </Link>
              <Link
                className="hover:border-b-2 w-fit h-5 font-light"
                to="/moderation"
              >
                Moderation
              </Link>
            </ul>
          </div>
        </div>
        <div className="h-0.5 bg-indigo my-10"></div>
        <div className="flex flex-col gap-4 justify-between items-center text-white sm:flex-row">
          <Link className="font-bold text-3xl" to="/">
            Discord
          </Link>
          <button className="bg-indigo py-2 px-4 rounded-3xl hover:bg-lightindigo">
            <Link to="/app">Open Discord</Link>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
