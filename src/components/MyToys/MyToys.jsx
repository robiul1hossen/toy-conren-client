import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [mytoys, setMytoys] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/my-toys?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMytoys(data));
  }, [user]);
  console.log(mytoys);
  return (
    <div>
      <div className="overflow-x-auto text-white">
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
            {mytoys.map((toy, index) => (
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

export default MyToys;
