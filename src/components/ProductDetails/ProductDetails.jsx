import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const ProductDetails = () => {
  const [toyDetails, setToyDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://toy-corner-server-11qqlrj5w-robiul1hossen.vercel.app/toy-details/${id}`
    )
      .then((res) => res.json())
      .then((data) => setToyDetails(data));
  }, [id]);
  console.log(toyDetails);

  return (
    <div className="text-white">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <img className="w-full h-[410px]" src={toyDetails.img} alt="" />
        </div>
        <div>
          <h1 className="font-semibold text-3xl">title</h1>
          <p className="font-bold text-2xl my-6">
            ${toyDetails.price}
            <sub className="font-normal">only</sub>
          </p>
          <Rating
            placeholderRating={toyDetails.rating}
            emptySymbol={<FaRegStar></FaRegStar>}
            readonly
            placeholderSymbol={<FaStar className="text-warning"></FaStar>}
            fullSymbol={<FaStar></FaStar>}></Rating>
          <span className="ml-2">( rating)</span>

          <div className="mt-32">
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
              <p>{toyDetails.toy_details} </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Specifications
            </div>
            <div className="collapse-content">
              <h1 className="font-bold">
                Sub Category: {toyDetails.subcategory}{" "}
              </h1>
              <p className="font-semibold">
                <span className="font-bold">
                  Seller Name: {toyDetails.sellerName}
                </span>
              </p>
              <p className="font-semibold">
                <span className="font-bold">
                  Seller Email: {toyDetails.sellerEmail}
                </span>
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
