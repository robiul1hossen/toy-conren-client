import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const AddToys = () => {
  const { user } = useContext(AuthContext);
  const image_hosting_token = import.meta.env.VITE_Imgage_Hosting_Token;
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

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

    const formData = new FormData();
    formData.append("image", form.querySelector('input[type="file"]').files[0]);

    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          console.log(imgURL);
          const toyItem = {
            price: parseFloat(price),
            img: imgURL,
            sellerName,
            sellerEmail,
            available_quantity: parseFloat(available_quantity),
            subcategory,
            rating: parseFloat(rating),
            toy_details,
          };
          console.log(toyItem);
          fetch("http://localhost:3000/alltoys", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(toyItem),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Your Toy Added Successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
        }
      });
  };
  return (
    <div>
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
                    className="h-12 text-white rounded-lg px-6">
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
                      className="file-input file-input-bordered w-full"
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
                    className="px-4 py-1 rounded-lg"
                    cols="30"></textarea>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Add Toy</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToys;
