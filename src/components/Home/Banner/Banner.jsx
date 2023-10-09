import { FaQuoteRight } from "react-icons/fa";
import "./banner.css";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div className="banner">
      <div className="w-full h-full relative">
        <div className="text-white flex justify-center md:items-center items-start h-full">
          <div>
            <div></div>
            <h2 className=" text-center w-4/5 mx-auto text-xl md:text-3xl text-[#9E8603] my-6">
              <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  "Explore the Future of Play, Today_",
                  1000,
                  "Electrify Your Entertainment Experience_",
                  1000,
                  "Discover Endless Adventures in Electronics_",
                  1000,
                  "From Robots to Remote Controls – Your Adventure Awaits_",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
              <span className="banner-quote">
                <FaQuoteRight></FaQuoteRight>
              </span>
            </h2>
            <p className="w-3/4 mx-auto md:text-xl text-sm">
              Step into a world of electronic wonder where playtime meets
              innovation. Explore our curated collection of cutting-edge
              electronic toys that ignite creativity and captivate all ages.
              From interactive robots to high-tech gadgets, immerse yourself in
              the future of entertainment. Discover endless possibilities and
              elevate your playtime experience with the latest in electronic
              fun.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
