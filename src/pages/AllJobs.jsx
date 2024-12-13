import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/HomeComponents/Card";

const AllJobs = () => {
  const [allJobs, setAllJobs] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:4000/alljobs`).then((result) => {
      setAllJobs(result.data);
    });
  }, []);
  return (
    <div className="">
        
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 md:p-6 lg:p-12">
        {allJobs.map((job) => (
          <Card key={job._id} job={job}></Card>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
