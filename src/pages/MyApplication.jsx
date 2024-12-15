import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/Context";
import { RiDeleteBin2Line } from "react-icons/ri";
import Swal from "sweetalert2";

const MyApplication = () => {
  const [data, setData] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`https://job-portal-server-opal.vercel.app/myApplication?email=${user?.email}`)
      .then((result) => {
        setData(result.data);
      });
  }, [user?.email]);

  const deleteHandler = (id) => {
    axios.delete(`https://job-portal-server-opal.vercel.app/myApplication/${id}`).then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Delete SuccessFully",
        showConfirmButton: false,
        timer: 1500,
      });
      const remaing = data.filter((item) => item._id !== id);
      setData(remaing);
    });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Sl.</th>
              <th>Company Logo</th>
              <th>Company Name</th>
              <th>Job Title</th>
              <th>JobType</th>
              <th>Application Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={item._id}>
                <td>{idx + 1}</td>
                <td>
                  <img
                    src={item?.company_logo}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td>{item.company}</td>
                <td>{item.title}</td>
                <td>{item.jobType}</td>
                <td>{item.applicationDate}</td>
                <td>
                  <span
                    onClick={() => deleteHandler(item._id)}
                    className="text-2xl text-red-500"
                  >
                    <RiDeleteBin2Line />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplication;
