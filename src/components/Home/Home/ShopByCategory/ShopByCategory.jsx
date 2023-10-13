import { useEffect, useState } from "react";
import "react-tabs/style/react-tabs.css";
import ToyCategoryDetails from "../ToyCategoryDetails/ToyCategoryDetails";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("science-kits");

  useEffect(() => {
    const fetchDataBySubcategory = (activeTab) => {
      fetch(
        `https://toy-corner-server-11qqlrj5w-robiul1hossen.vercel.app/subcategories/toys/${activeTab}`
      )
        .then((res) => res.json())
        .then((data) => {
          setToys(data);
        });
    };

    fetchDataBySubcategory(activeTab);
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="my-10 text-white">
      <h2 className="font-bold text-center text-3xl my-5">Shop by category</h2>

      <div className="flex justify-center gap-5 items-center">
        <div
          onClick={() => handleTabClick("science-kits")}
          className={`${
            activeTab === "science-kits"
              ? "bg-secondary text-white font-semibold p-2"
              : ""
          }`}>
          <h2 className="font-semibold cursor-pointer">Science Kits</h2>
        </div>
        <div
          onClick={() => handleTabClick("math-learning-toys")}
          className={`${
            activeTab === "math-learning-toys"
              ? "bg-secondary text-white font-semibold p-2"
              : ""
          }`}>
          <h2 className="font-semibold cursor-pointer"> Math Learning Toys</h2>
        </div>
        <div
          onClick={() => handleTabClick("engineering-kits")}
          className={`${
            activeTab === "engineering-kits"
              ? "bg-secondary text-white font-semibold p-2"
              : ""
          }`}>
          <h2 className="font-semibold cursor-pointer">Engineering Kits</h2>
        </div>
      </div>

      <div className="flex justify-center gap-x-10 mb-20 mt-10">
        {toys.map((toy) => (
          <ToyCategoryDetails key={toy._id} toy={toy}></ToyCategoryDetails>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
