import axios from "axios";
import { select } from "motion/react-client";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ApplicantDetails = () => {
  const { user_id } = useParams();
  const [data, setAllData] = useState([]);


  useEffect(() => {
    axios
      .get(`https://job-portal-server-opal.vercel.app/postapplicant?id=${user_id}`)
      .then((result) => {
        setAllData(result.data);
      });
  }, [user_id]);

  const selectHandler=(id ,value)=>{
    const body = {
        status: value
    }
    axios.patch(`https://job-portal-server-opal.vercel.app/candidate/${id}`, body) 
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Sl.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Application Date</th>
              <th>Resume</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={item._id}>
                <th>{idx + 1}</th>
                <td>{item.userName}</td>
                <td>{item.email}</td>
                <td>{item.applicationDate}</td>
                <td>{item.resume}</td>
                <td>
                  <select onChange={(e)=> selectHandler(item._id, e.target.value)} className="select select-bordered w-full max-w-xs"
                    defaultValue={item.status || "Select Your Candidate"}
                    >
                    <option>Select Your Candidate</option>
                    <option>Pending</option>
                    <option>Hired</option>
                    <option>Reject</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicantDetails;
