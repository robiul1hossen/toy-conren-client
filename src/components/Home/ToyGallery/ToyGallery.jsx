import Marquee from "react-fast-marquee";
import "./ToyGallery.css";

const ToyGallery = () => {
  return (
    <div className="my-16">
      <div className="text-white">
        <h2 className="font-bold text-4xl text-center mb-4 text-green-500">
          Our toy{" "}
          <span className="text-[#9E8603] pb-4 img-bottom">Gallery</span>
        </h2>
        <p className="mx-auto md:w-1/2 w-4/5 text-sm md:text-lg mb-10 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ullam
          repellat autem a modi dicta doloribus cumque laborum veniam quisquam!
        </p>
      </div>
      <Marquee direction="left">
        <img
          className="w-48 h-60 mx-3"
          src="https://i.ibb.co/Rz1QW81/kids-playing-together-front-view.jpg"
          alt=""
        />
        <img
          className="w-48 h-60 mx-3"
          src="https://i.ibb.co/YfRxHhc/side-view-blurry-mother-girl-indoors.jpg"
          alt=""
        />
        <img
          className="w-48 h-60 mx-3"
          src="https://i.ibb.co/TwcHNrv/front-view-child-boy-cute-adorable-sweet-playing-vr-segway-blue-floor.jpg"
          alt=""
        />
        <img
          className="w-48 h-60 mx-3"
          src="https://i.ibb.co/6Pt827J/boy-putting-shelf-robot.jpg"
          alt=""
        />
        <img
          className="w-48 h-60 mx-3"
          src="https://i.ibb.co/vj3b0VL/child-making-robot-close-up.jpg"
          alt=""
        />
        <img
          className="w-48 h-60 mx-3"
          src="https://i.ibb.co/4mRyZJf/front-view-child-boy-white-t-shirt-playing-vr-segway-blue-space.jpg"
          alt=""
        />
      </Marquee>
      <div className="mt-10 ">
        <Marquee direction="right">
          <img
            className="w-48 h-60 mx-3"
            src="https://i.ibb.co/Rz1QW81/kids-playing-together-front-view.jpg"
            alt=""
          />
          <img
            className="w-48 h-60 mx-3"
            src="https://i.ibb.co/YfRxHhc/side-view-blurry-mother-girl-indoors.jpg"
            alt=""
          />
          <img
            className="w-48 h-60 mx-3"
            src="https://i.ibb.co/TwcHNrv/front-view-child-boy-cute-adorable-sweet-playing-vr-segway-blue-floor.jpg"
            alt=""
          />
          <img
            className="w-48 h-60 mx-3"
            src="https://i.ibb.co/6Pt827J/boy-putting-shelf-robot.jpg"
            alt=""
          />
          <img
            className="w-48 h-60 mx-3"
            src="https://i.ibb.co/vj3b0VL/child-making-robot-close-up.jpg"
            alt=""
          />
          <img
            className="w-48 h-60 mx-3"
            src="https://i.ibb.co/4mRyZJf/front-view-child-boy-white-t-shirt-playing-vr-segway-blue-space.jpg"
            alt=""
          />
        </Marquee>
      </div>
    </div>
  );
};

export default ToyGallery;
