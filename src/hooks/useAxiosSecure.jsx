import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/Context";
import Swal from "sweetalert2";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error?.status === 401 || error?.status === 403) {
          signOutUser().then(() => {
            navigate("/login");
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Logout SuccessFully",
              showConfirmButton: false,
              timer: 1500,
            });
          });
        }
        return Promise.reject(error);
      }
    );
  }, [signOutUser, navigate]);

  return axiosInstance;
};

export default useAxiosSecure;
