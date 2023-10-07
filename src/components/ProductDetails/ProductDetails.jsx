import { useContext } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { AuthContext } from "../providers/AuthProvider";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="text-white">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <img className="w-full h-[410px]" src={user.photoURL} alt="" />
        </div>
        <div>
          <h1 className="font-semibold text-3xl">title</h1>
          <p className="font-bold text-2xl my-6">
            $22.59<sub className="font-normal">only</sub>
          </p>
          <Rating
            placeholderRating={3.5}
            emptySymbol={<FaRegStar></FaRegStar>}
            readonly
            placeholderSymbol={<FaStar className="text-warning"></FaStar>}
            fullSymbol={<FaStar></FaStar>}></Rating>
          <span className="ml-2">( rating)</span>
          <h3 className="font-bold mt-6">Member Ship</h3>
          <div className="flex gap-5 mb-6 mt-3">
            <div className="membership">3 Month</div>
            <div className="membership">6 Month</div>
            <div className="membership">1 Year</div>
            <div className="membership">Life Time</div>
          </div>
          <div>
            <button className="w-full btn text-white hover:text-black hover:bg-white hover:border-black bg-red-600 my-5">
              Add to card
            </button>
          </div>
          <div className="w-full">
            <button className="btn btn-outline text-white w-full">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-3 mt-4">
        <img
          className="w-40"
          src="https://i.ibb.co/6XsP283/html-css.jpg"
          alt=""
        />
        <img
          className="w-40"
          src="https://i.ibb.co/gZ2LDpg/programming-script-text-coding-word-1.jpg"
          alt=""
        />
        <img
          className="w-40"
          src="https://i.ibb.co/V2zPdFm/programming-script-text-coding-word.jpg"
          alt=""
        />
      </div>
      <div>
        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              Description
            </div>
            <div className="collapse-content">
              <p>desc </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Specifications
            </div>
            <div className="collapse-content">
              <h1 className="font-bold">Instructor: </h1>
              <p className="font-semibold">
                <span className="font-bold">Schedule:</span>
              </p>
              <p className="font-semibold">
                <span className="font-bold">syllabus:</span>
              </p>
              <p className="font-semibold">
                <span className="font-bold">Total Assignment:</span>{" "}
              </p>
              <p className="font-semibold">
                <span className="font-bold">Assignment Duration:</span>{" "}
              </p>
              <p className="font-semibold">
                <span className="font-bold">Certificate:</span>
              </p>
              <p className="font-semibold">
                <span className="font-bold">Rewards:</span>
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
