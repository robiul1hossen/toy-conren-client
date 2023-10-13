import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [mytoys, setMytoys] = useState([]);

  const handleDeleteToy = (toyId) => {
    console.log(toyId);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Implement the logic to send a DELETE request to delete the toy
        fetch(
          `https://toy-corner-server-11qqlrj5w-robiul1hossen.vercel.app/delete-toy/${toyId}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          })
          .catch((error) => {
            console.error("Error deleting toy:", error);
          });
      }
    });
  };

  useEffect(() => {
    fetch(
      `https://toy-corner-server-11qqlrj5w-robiul1hossen.vercel.app/my-toys?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setMytoys(data));
  }, [user]);
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
              <th>Update</th>
              <th>Delete</th>
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
                  <Link to={`/update-toy/${toy._id}`}>
                    <button className="btn btn-ghost btn-xs">Update</button>
                  </Link>
                </th>
                <th>
                  <Link to={``}>
                    <button
                      onClick={() => handleDeleteToy(toy._id)}
                      className="btn btn-ghost btn-xs">
                      Delete
                    </button>
                  </Link>
                </th>
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
