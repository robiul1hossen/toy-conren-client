import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="">
      <div className="navbar bg-[#212121] text-white mt-4 sticky ">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">
            <span className="text-yellow-500 pb-5 img-bottom font-bold text-3xl">
              Toy Corner
            </span>
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 flex  items-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">All-Toys</Link>
            </li>
            <li>
              <Link to="/">My-Toys</Link>
            </li>
            {user ? (
              <div className="flex items-center justify-center gap-2 ">
                <Link to="/login">
                  <button onClick={handleLogOut}>logout</button>
                </Link>
                <img
                  className="w-10 h-10 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
              </div>
            ) : (
              <>
                <Link to="/login">Login</Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
