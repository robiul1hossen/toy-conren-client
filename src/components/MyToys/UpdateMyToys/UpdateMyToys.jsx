import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useEffect } from "react";
import { useState } from "react";

const UpdateMyToys = () => {
  const { user } = useContext(AuthContext);
  const [mytoys, setMytoys] = useState([]);
  useEffect(() => {
    fetch(
      `https://toy-corner-server-11qqlrj5w-robiul1hossen.vercel.app/my-toys?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setMytoys(data));
  }, [user]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.email.value;
    const subcategory = form.select_subcategory.value;
    const available_quantity = form.available_quantity.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const toy_details = form.description.value;
    const updatedToy = {
      sellerName,
      sellerEmail,
      subcategory,
      available_quantity,
      rating,
      price,
      toy_details,
    };
  };

  const handleUpdateToy = (toyId) => {
    fetch(
      `https://toy-corner-server-11qqlrj5w-robiul1hossen.vercel.app/update-toy/${toyId}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error updating toy:", error);
      });
  };

  return (
    <div className="hero  bg-transparent">
      <div className="hero-content w-full ">
        <div className="card   shadow-2xl bg-transparent">
          <form onSubmit={handleSubmit} className="card-body">
            <div className=" md:grid grid-cols-3 gap-x-10">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Seller Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Seller Name"
                  name="sellerName"
                  defaultValue={user.displayName}
                  className="input input-bordered bg-transparent text-white border-white"
                  required
                  readOnly
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Seller Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  readOnly
                  defaultValue={user.email}
                  className="input input-bordered bg-transparent text-white border-white"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Sub Category</span>
                </label>
                <select
                  defaultValue="Select Sub-Category"
                  id="select_subcategory"
                  className="h-12 text-black rounded-lg px-6">
                  <option disabled>Select Sub-Category</option>
                  <option value="science-kit">Science Kit</option>
                  <option value="math-learning-toy">Math Learning Toy</option>
                  <option value="engineering-kits">Engineering Kits</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">
                    Available Quantity
                  </span>
                </label>
                <input
                  type="text"
                  name="available_quantity"
                  placeholder="Available Quantity"
                  defaultValue={""}
                  className="input input-bordered bg-transparent text-white border-white"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Rating</span>
                </label>
                <input
                  type="text"
                  name="rating"
                  placeholder="Rating"
                  className="input input-bordered bg-transparent text-white border-white"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  placeholder="Price"
                  className="input input-bordered bg-transparent text-white border-white"
                  required
                />
              </div>
              <div className="form-control text-white">
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Pick a file</span>
                  </label>
                  <input
                    type="file"
                    className="file-input file-input-bordered w-full text-black"
                  />
                </div>
              </div>
              <div className="form-control md:w-[213%] text-white">
                <label className="label">
                  <span className="label-text text-white">Description</span>
                </label>
                <textarea
                  name="description"
                  placeholder="Write Your Toy Description"
                  id=""
                  className="px-4 py-1 rounded-lg text-black"
                  cols="30"></textarea>
              </div>
            </div>
            <div className="form-control mt-6">
              <button
                onClick={() => handleUpdateToy(updatedToy)}
                className="btn btn-primary">
                Update Toy
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateMyToys;
