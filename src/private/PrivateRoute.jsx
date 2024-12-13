import { useContext } from "react";
import { AuthContext } from "../context/Context";
import { Navigate, useLocation } from "react-router";
import { CirclesWithBar } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const {pathname} = useLocation()
  

  if (loading) {
    return (
      <div className="flex justify-center p-12">
        <CirclesWithBar
          height="100"
          width="100"
          color="#4fa94d"
          outerCircleColor="#4fa94d"
          innerCircleColor="#4fa94d"
          barColor="#4fa94d"
          ariaLabel="circles-with-bar-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
