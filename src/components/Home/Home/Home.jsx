import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import "./Home.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import ToyGallery from "../ToyGallery/ToyGallery";

AOS.init();

const Home = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/alltoys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);
  console.log(toys);
  return (
    <div>
      <Banner></Banner>
      <div className="grid grid-cols-3 gap-x-8 ">
        {toys.map((toy) => (
          <div
            key={toy._id}
            className="card card-shadow card-compact bg-transparent text-white shadow-2xl my-10"
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
              <h2 className="card-title mb-[-10px]">Product Name</h2>
              <h2 className="card-title">Saller: {toy.sellerName}</h2>

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
                  <Link to="/product-details">
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
      <ToyGallery></ToyGallery>
    </div>
  );
};

export default Home;
