import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/HomeComponents/Card";

const AllJobs = () => {
  const [allJobs, setAllJobs] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    if (searchText === "") {
      axios.get(`http://localhost:4000/alljobs`).then((result) => {
        setAllJobs(result.data);
      });
    } else {
      axios
        .get(`http://localhost:4000/search?params=${searchText}`)
        .then((result) => {
          setAllJobs(result.data);
        });
    }
  }, [searchText]);

  return (
    <div className="">
      <div className="md:max-w-[500px] mx-auto">
        <form className="">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            name="search"
            placeholder="Search by Category"
            className="input input-bordered input-md border w-full"
          />
        </form>
      </div>
      {allJobs.length === 0 ? (
        <div className="">
          <h1 className="text-3xl font-semibold text-center py-12">No Search Result Found</h1>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 md:p-6 lg:p-12">
          {allJobs.map((job) => (
            <Card key={job._id} job={job}></Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllJobs;
