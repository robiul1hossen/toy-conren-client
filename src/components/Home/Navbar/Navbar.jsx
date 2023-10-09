// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../providers/AuthProvider";

// const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);
//   const handleLogOut = () => {
//     logOut()
//       .then(() => {})
//       .catch((error) => console.log(error));
//   };
//   return (
//     <div className="">
//       <div className="navbar bg-[#212121] text-white mt-4 sticky ">
//         <div className="flex-1">
//           <a className="btn btn-ghost normal-case text-xl">
//             <span className="text-yellow-500 pb-5 img-bottom font-bold text-3xl">
//               Toy Corner
//             </span>
//           </a>
//         </div>
//         <div className="flex-none">
//           <ul className="menu menu-horizontal px-1 flex justify-end  md:items-center ">
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/">All-Toys</Link>
//             </li>
//             <li>
//               <Link to="/add-toys">Add-Toys</Link>
//             </li>
//             <li>
//               <Link to="/">My-Toys</Link>
//             </li>
//             <li>
//               {user ? (
//                 <div className="md:flex items-center justify-center gap-2 ">
//                   <Link to="/login">
//                     <button onClick={handleLogOut}>logout</button>
//                   </Link>
//                   <img
//                     className="w-10 h-10 rounded-full"
//                     src={user?.photoURL}
//                     alt=""
//                   />
//                 </div>
//               ) : (
//                 <>
//                   <Link to="/login">Login</Link>
//                 </>
//               )}
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import "./NavBar.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className="">
      <div className="navbar bg-[#212121] text-white mt-4 sticky">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">
            <span className="text-yellow-500 pb-5 img-bottom font-bold text-3xl">
              Toy Corner
            </span>
          </a>
        </div>
        <div className="flex-none">
          <div
            className={`menu-icon md:hidden ${menuVisible ? "open" : ""}`}
            onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul
            className={`${
              menuVisible ? "flex-col visible" : "menu-horizontal hidden"
            } md:flex items-center px-4 md:gap-4 justify-end`}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">All-Toys</Link>
            </li>
            <li>
              <Link to="/add-toys">Add-Toys</Link>
            </li>
            <li>
              <Link to="/">My-Toys</Link>
            </li>
            <li>
              {user ? (
                <div className="md:flex items-center justify-center gap-2">
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
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
