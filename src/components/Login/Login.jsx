import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password).then(() => {
      const savedUser = { email: email, name: name, role: "user" };
      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(savedUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login Successful",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(from, { replace: true });
        });
    });
  };

  return (
    <div className="bg-[#212121]">
      <form onSubmit={handleSignup} className="form">
        <div className="control">
          <h1 className="text-white">Sign In</h1>
        </div>
        <div className="control block-cube block-input">
          <input name="name" placeholder="Name" required type="text" />
          <div className="bg-top">
            <div className="bg-inner"></div>
          </div>
          <div className="bg-right">
            <div className="bg-inner"></div>
          </div>
          <div className="bg">
            <div className="bg-inner"></div>
          </div>
        </div>
        <div className="control block-cube block-input">
          <input name="email" placeholder="Email" required type="email" />
          <div className="bg-top">
            <div className="bg-inner"></div>
          </div>
          <div className="bg-right">
            <div className="bg-inner"></div>
          </div>
          <div className="bg">
            <div className="bg-inner"></div>
          </div>
        </div>
        <div className="control block-cube block-input">
          <input
            name="password"
            placeholder="Password"
            required
            type="password"
          />
          <div className="bg-top">
            <div className="bg-inner"></div>
          </div>
          <div className="bg-right">
            <div className="bg-inner"></div>
          </div>
          <div className="bg">
            <div className="bg-inner"></div>
          </div>
        </div>
        <button className="btn block-cube block-cube-hover" type="submit">
          <div className="bg-top">
            <div className="bg-inner"></div>
          </div>
          <div className="bg-right">
            <div className="bg-inner"></div>
          </div>
          <div className="bg">
            <div className="bg-inner"></div>
          </div>
          <div className="text">Sign In</div>
        </button>
        {/* <div className="credits">My other codepens</div> */}
        <p className="text-white">
          dont have an account?{" "}
          <Link to="/signup">
            {" "}
            <span className="font-bold underline">Please Sign Up</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
