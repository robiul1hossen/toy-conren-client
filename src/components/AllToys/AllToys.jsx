import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState("ascending");
  const [filteredToys, setFilteredToys] = useState([]);

  useEffect(() => {
    fetch(
      "https://toy-corner-server-3oh1cy0t8-robiul1hossen.vercel.app/alltoys"
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setFilteredToys(data); // Initialize filteredToys with all toys
      });
  }, []);

  // Function to handle sorting by price
  const handleSort = () => {
    const sortedToys = [...filteredToys];

    if (sortOrder === "ascending") {
      sortedToys.sort((a, b) => a.price - b.price);
    } else {
      sortedToys.sort((a, b) => b.price - a.price);
    }
    setFilteredToys(sortedToys);
  };

  useEffect(() => {
    const handleFilter = () => {
      const filteredToys = toys.filter((toy) =>
        toy.subcategory.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredToys(filteredToys);
    };
    handleFilter();
  }, [searchText, toys]);

  // Function to handle sorting onChange
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    handleSort(); // Sort immediately when the user selects an option
  };

  return (
    <div>
      <div className="overflow-x-auto text-white">
        {/* Search and Sort Controls */}
        <div className="my-4 md:flex justify-between">
          <div>
            <label className="block" htmlFor="">
              Search by Toy Name
            </label>
            <input
              className="px-3 py-2 rounded text-black"
              type="text"
              placeholder="Search Your Toys"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <div>
            <label className="block" htmlFor="">
              Sort By Price
            </label>
            <select
              className="px-4 py-2 rounded cursor-pointer text-black w-52"
              value={sortOrder}
              onChange={handleSortChange}>
              <option value="ascending">High To Low </option>
              <option value="descending">Low To High</option>
            </select>
          </div>
        </div>

        <table className="table">
          {/* head */}
          <thead className="text-white">
            <tr>
              <th>#</th>
              <th>Sub Category</th>
              <th>Seller Name</th>
              <th>Price</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {/* Rows */}
            {filteredToys.map((toy, index) => (
              <tr key={toy._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={toy.img} alt="Avatar" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{toy.subcategory}</div>
                    </div>
                  </div>
                </td>
                <td>{toy.sellerName}</td>
                <td>${toy.price}</td>
                <th>
                  <Link to={`/toy-details/${toy._id}`}>
                    <button className="btn btn-ghost btn-xs">Details</button>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
