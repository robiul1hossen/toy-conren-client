import { useEffect, useState } from "react";

const AllToys = () => {
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
            {/* row 1 */}
            {toys.map((toy, index) => (
              <tr key={toy._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={toy.img}
                          alt="Avatar Tailwind CSS Component"
                        />
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
                  <button className="btn btn-ghost btn-xs">details</button>
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
