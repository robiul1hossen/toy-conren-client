// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Banner from "../Banner/Banner";
// import "./Home.css";
// import { FaArrowRight, FaRegStar, FaStar } from "react-icons/fa";
// import Rating from "react-rating";
// import ToyGallery from "../ToyGallery/ToyGallery";
// import ShopByCategory from "./ShopByCategory/ShopByCategory";

// const ITEMS_PER_PAGE = 6;

// const Home = () => {
//   const [toys, setToys] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     fetch(
//       "https://toy-corner-server-3oh1cy0t8-robiul1hossen.vercel.app/alltoys"
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         setToys(data);
//       });
//   }, []);

//   const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
//   const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
//   const currentToys = toys.slice(indexOfFirstItem, indexOfLastItem);

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div>
//       <Banner></Banner>
//       <div className="text-white mt-28">
//         <h2 className="font-bold text-4xl text-center mb-4 text-green-500">
//           Our toy{" "}
//           <span className="text-[#9E86003] pb-4 img-bottom">
//             Best Selling Toys
//           </span>
//         </h2>
//         <p className="mx-auto md:w-1/2 w-4/5 text-sm md:text-lg mb-10 mt-2">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ullam
//           repellat autem a modi dicta doloribus cumque laborum veniam quisquam!
//         </p>
//       </div>
//       <div className="grid md:grid-cols-3 grid-cols-1 gap-x-8 ">
//         {currentToys.map((toy) => (
//           <div
//             key={toy._id}
//             className="card card-shadow card-compact bg-transparent text-white shadow-2xl mb-10"
//             data-aos="zoom-in-up">
//             <figure>
//               <img
//                 data-aos="zoom-in"
//                 className="h-72 w-full"
//                 src={toy.img}
//                 alt="Shoes"
//               />
//             </figure>
//             <div className="card-body">
//               <h2 className="font-bold text-xl -mb-1">Product Name</h2>
//               <h2 className="font-bold text-xl -mt-1 ">
//                 Saller: {toy.sellerName}
//               </h2>

//               <p>If a dog chews shoes whose shoes does he choose</p>
//               <div className="flex justify-center items-center gap-y-5">
//                 <p>Price: ${toy.price}</p>
//                 <p>
//                   <Rating
//                     placeholderRating={toy.rating}
//                     emptySymbol={<FaRegStar></FaRegStar>}
//                     readonly
//                     placeholderSymbol={
//                       <FaStar className="text-warning"></FaStar>
//                     }
//                     fullSymbol={<FaStar></FaStar>}
//                   />
//                 </p>
//                 <div className="card-actions justify-end">
//                   <Link to={`/toy-details/${toy._id}`}>
//                     <button className="btn text-white btn-circle btn-outline">
//                       <FaArrowRight></FaArrowRight>
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="pagination flex justify-center gap-10">
//         <button
//           className="text-white"
//           onClick={() => paginate(currentPage - 1)}
//           disabled={currentPage === 1}>
//           Previous
//         </button>
//         <button
//           className="text-white"
//           onClick={() => paginate(currentPage + 1)}
//           disabled={indexOfLastItem >= toys.length}>
//           Next
//         </button>
//       </div>
//       <ShopByCategory></ShopByCategory>
//       <ToyGallery></ToyGallery>
//     </div>
//   );
// };

// export default Home;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import "./Home.css";
import { FaArrowRight, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import ToyGallery from "../ToyGallery/ToyGallery";
import ShopByCategory from "./ShopByCategory/ShopByCategory";

const ITEMS_PER_PAGE = 6;

const Home = () => {
  const [toys, setToys] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(
      "https://toy-corner-server-3oh1cy0t8-robiul1hossen.vercel.app/alltoys"
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  const totalPages = Math.ceil(toys.length / ITEMS_PER_PAGE);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentToys = toys.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div>
      <Banner></Banner>
      <div className="text-white mt-28">
        <h2 className="font-bold text-4xl text-center mb-4 text-green-500">
          Our toy{" "}
          <span className="text-[#9E86003] pb-4 img-bottom">
            Best Selling Toys
          </span>
        </h2>
        <p className="mx-auto md:w-1/2 w-4/5 text-sm md:text-lg mb-10 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ullam
          repellat autem a modi dicta doloribus cumque laborum veniam quisquam!
        </p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-x-8 ">
        {currentToys.map((toy) => (
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
              <h2 className="font-bold text-xl -mb-1">
                Product: {toy.subcategory}
              </h2>
              <h2 className="font-bold text-xl -mt-1 ">
                Seller: {toy.sellerName}
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
      <div className="pagination flex justify-center gap-10">
        {/* <button
          className="text-white"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}>
          Previous
        </button> */}
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={
              number === currentPage
                ? "active text-white btn-page"
                : "text-white btn-page"
            }>
            {number}
          </button>
        ))}
        {/* <button
          className="text-white"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}>
          Next
        </button> */}
      </div>
      <ShopByCategory></ShopByCategory>
      <ToyGallery></ToyGallery>
    </div>
  );
};

export default Home;
