import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <button className="btn btn-square">
        <span className="loading loading-spinner"></span>
      </button>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
