import { Link, NavLink, useNavigate } from "react-router";
import logo from "../../assets/images/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../context/Context";
import Swal from "sweetalert2";

const NavBar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate()

  const logOutHandler =()=>{
    signOutUser()
    .then(()=>{
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Logout SuccessFully",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/login')
    })
  }

  return (
    <div className="">
      <nav className="flex justify-between items-center p-6">
        <div className="">
          <img src={logo} alt="" className="w-16 h-16" />
        </div>
        <div className="">
          <ul className="flex justify-center items-center gap-10">
            <NavLink to="/">
              <li className="">Home</li>
            </NavLink>
          </ul>
        </div>
        {user ? (
          <div className="">
            <button onClick={logOutHandler} className="bg-blue-500 font-semibold text-white px-4 py-2">
              LogOut
            </button>
          </div>
        ) : (
          <div className="flex justify-center items-center gap-6">
            <Link to="/login">
              <button className="font-semibold">Login</button>
            </Link>
            <Link to="/register">
              <button className="bg-blue-500 font-semibold text-white px-4 py-2">
                Register
              </button>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
