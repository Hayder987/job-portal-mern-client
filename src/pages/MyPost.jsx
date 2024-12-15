import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/Context";
import { useNavigate } from "react-router";

const MyPost = () => {
  const [data, setData] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`https://job-portal-server-opal.vercel.app/mypost?email=${user?.email}`)
      .then((result) => {
        setData(result.data);
      });
  }, [user?.email]);



  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Sl.</th>
              <th>Name</th>
              <th>Category</th>
              <th>Job Type</th>
              <th>Deadline</th>
              <th>All Candidate</th>
              <th>Action</th>
              
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={item._id}>
                <th>{idx + 1}</th>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>{item.jobType}</td>
                <td>{item.applicationDeadline}</td>
                <td>{item.applicationCount}</td>
                <td><button onClick={()=>navigate(`/applicant/${item._id}`)} className="text-blue-500 font-semibold">See Details</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPost;
