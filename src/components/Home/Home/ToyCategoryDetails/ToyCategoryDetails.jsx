import { FaArrowRight, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const ToyCategoryDetails = ({ toy }) => {
  const { img, sellerName, price, rating } = toy;
  return (
    <div
      className="card card-shadow card-compact bg-transparent text-white shadow-2xl mb-10"
      data-aos="zoom-in-up">
      <figure>
        <img data-aos="zoom-in" className="h-72 w-full" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="font-bold text-xl -mb-1">Product Name</h2>
        <h2 className="font-bold text-xl -mt-1 ">Saller: {sellerName}</h2>

        <p>If a dog chews shoes whose shoes does he choose</p>
        <div className="flex justify-center items-center gap-y-5">
          <p>Price: ${price}</p>
          <p>
            <Rating
              placeholderRating={rating}
              emptySymbol={<FaRegStar></FaRegStar>}
              readonly
              placeholderSymbol={<FaStar className="text-warning"></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            />
          </p>
          <div className="card-actions justify-end">
            <Link to="/product-details">
              <button className="btn text-white btn-circle btn-outline">
                <FaArrowRight></FaArrowRight>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyCategoryDetails;
