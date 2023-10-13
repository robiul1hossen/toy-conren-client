import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import "./Home.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import ToyGallery from "../ToyGallery/ToyGallery";
import ShopByCategory from "./ShopByCategory/ShopByCategory";

AOS.init();

const Home = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch(
      "https://toy-corner-server-11qqlrj5w-robiul1hossen.vercel.app/alltoys"
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  return (
    <div>
      <Banner></Banner>
      <div className="text-white mt-28">
        <h2 className="font-bold text-4xl text-center mb-4 text-green-500">
          Our toy{" "}
          <span className="text-[#9E8603] pb-4 img-bottom">
            Best Selling Toys
          </span>
        </h2>
        <p className="mx-auto md:w-1/2 w-4/5 text-sm md:text-lg mb-10 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ullam
          repellat autem a modi dicta doloribus cumque laborum veniam quisquam!
        </p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-x-8 ">
        {toys.map((toy) => (
          <div
            key={toy._id}
            className="card card-shadow card-compact bg-transparent text-white shadow-2xl mb-10"
            data-aos="zoom-in-up">
            <figure>
              <img
                data-aos="zoom-in"
                className="h-72 w-full"
                src={toy.img}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="font-bold text-xl -mb-1">Product Name</h2>
              <h2 className="font-bold text-xl -mt-1 ">
                Saller: {toy.sellerName}
              </h2>

              <p>If a dog chews shoes whose shoes does he choose</p>
              <div className="flex justify-center items-center gap-y-5">
                <p>Price: ${toy.price}</p>
                <p>
                  <Rating
                    placeholderRating={toy.rating}
                    emptySymbol={<FaRegStar></FaRegStar>}
                    readonly
                    placeholderSymbol={
                      <FaStar className="text-warning"></FaStar>
                    }
                    fullSymbol={<FaStar></FaStar>}
                  />
                </p>
                <div className="card-actions justify-end">
                  <Link to={`/toy-details/${toy._id}`}>
                    <button className="btn text-white btn-circle btn-outline">
                      <FaArrowRight></FaArrowRight>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ShopByCategory></ShopByCategory>
      <ToyGallery></ToyGallery>
    </div>
  );
};

export default Home;
