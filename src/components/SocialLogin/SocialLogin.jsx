import { useContext } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    googleSignIn().then((result) => {
      const loggedUser = result.user;
      const savedUser = {
        email: loggedUser.email,
        name: loggedUser.displayName,
        role: "student",
      };
      fetch(
        "https://toy-corner-server-11qqlrj5w-robiul1hossen.vercel.app/users",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(savedUser),
        }
      )
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };
  return (
    <div>
      <div className="flex justify-start w-0 gap-4">
        <button
          onClick={handleGoogleLogin}
          className="btn btn-circle btn-outline  mr-4 text-3xl">
          <FaGoogle></FaGoogle>
        </button>
        <button className="btn btn-circle btn-outline text-3xl">
          <FaFacebook></FaFacebook>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
