import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../context/Context";
import axios from "axios";
import Swal from "sweetalert2";

const AddJobs = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);

  const formatDate = (date) => {
    return date ? date.toLocaleDateString("en-GB") : "";
  };
  const applicationDeadline = formatDate(startDate);

  const postFormHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialValue = Object.fromEntries(formData.entries());
    const { min, max, currency, requirements, responsibilities, ...newValue } =
      initialValue;
    newValue.salaryRange = { min, max, currency };
    newValue.requirements = requirements.split("\n");
    newValue.responsibilities = responsibilities.split("\n");
    newValue.hr_email = user?.email;
    newValue.hr_name = user?.displayName;
    newValue.applicationDeadline = applicationDeadline;

    axios.post(`http://localhost:4000/alljobs`, newValue).then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Post Added SuccessFully",
        showConfirmButton: false,
        timer: 1500,
      });
      e.target.reset()
    });
  };

  return (
    <div className="p-4 md:p-12">
      <div className="md:max-w-[700px] p-6 md:p-12 mx-auto  bg-slate-100 rounded-xl">
        <form onSubmit={postFormHandler} className="flex flex-col gap-4 ">
          {/* tilte */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="Title"
              name="title"
              className="input input-bordered"
              required
            />
          </div>
          {/* location */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              placeholder="Location"
              name="location"
              className="input input-bordered"
              required
            />
          </div>
          {/* job-types and Category */}
          <div className="md:flex gap-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">JobType</span>
              </label>
              <select
                required
                name="jobType"
                className="select select-bordered w-full max-w-xs"
              >
                <option>Intern</option>
                <option>Part-Time</option>
                <option>Full-Time</option>
                <option>Hybrid</option>
                <option>Remote</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                name="category"
                className="select select-bordered w-full max-w-xs"
                required
              >
                <option>Web Development</option>
                <option>Software Development</option>
                <option>Healthcare & Medical</option>
                <option>Education & Training</option>
                <option>Engineering</option>
                <option>Finance & Accounting</option>
                <option>Sales & Marketing</option>
                <option>Human Resources</option>
                <option>Design & Creative</option>
                <option>Hospitality & Tourism</option>
                <option>Government </option>
              </select>
            </div>
          </div>
          {/* Company & deadline */}
          <div className="flex gap-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Company</span>
              </label>
              <input
                type="text"
                placeholder="Company"
                name="company"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Application Deadline</span>
              </label>
              <button className="py-3 px-6 bg-white rounded-xl border-2">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </button>
            </div>
          </div>
          {/* Salary Range */}
          <div className="">
            <label className="label">
              <span className="label-text">Salary Range</span>
            </label>
            <div className="md:flex justify-center items-end gap-4">
              <div className="form-control w-full">
                <input
                  type="text"
                  placeholder="Min"
                  name="min"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-full">
                <input
                  type="text"
                  placeholder="Max"
                  name="max"
                  className="input input-bordered"
                  required
                />
              </div>
              <select
                name="currency"
                className="select select-bordered w-full max-w-xs"
                required
              >
                <option>BDT</option>
                <option>USD</option>
                <option>INR</option>
                <option>POUND</option>
              </select>
            </div>
          </div>
          {/* text-area */}
          <div className="w-full">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              className="textarea w-full resize-none textarea-bordered"
              placeholder="Description"
              required
            ></textarea>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Requirements</span>
            </label>
            <textarea
              name="requirements"
              className="textarea w-full resize-none textarea-bordered"
              placeholder="Add Multiple Requirements using LineBreak"
              required
            ></textarea>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Responsibilities</span>
            </label>
            <textarea
              name="responsibilities"
              className="textarea w-full resize-none textarea-bordered"
              placeholder="Add Multiple Responsibilities using LineBreak"
              required
            ></textarea>
          </div>
          {/* img path */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Company_logo Url</span>
            </label>
            <input
              type="text"
              placeholder="company_logo Url"
              name="company_logo"
              className="input input-bordered"
              required
            />
          </div>
          <div className="">
            <input
              type="submit"
              value="Add Jobs"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded-xl"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJobs;
