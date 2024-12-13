import { useContext, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../context/Context";
import axios from "axios";

const Appliction = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const {_id, title, jobType, category, company, company_logo} = data || {}
  const date = new Date()
  
  const applicationDate = date.toISOString().split('T')[0]

  const applictonHandler =(e)=>{
    e.preventDefault()
    const formData = new FormData(e.target)
    const formValue =  Object.fromEntries(formData.entries());
    const userName = user?.displayName
    const email = user?.email
    const jobsId = _id

    const applicationData = {userName, email, jobsId, title, company_logo, jobType, category,applicationDate,
         company ,...formValue}

     axios.post(`http://localhost:4000/application`,applicationData)
     .then(result=>{
        console.log(result)
     })
  }

  return (
    <div>
      <div className="md:max-w-[700px] mx-auto">
        <h1 className="text-3xl font-semibold text-center my-6">Application for {data.title}</h1>
        <form onSubmit={applictonHandler} className="">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Github Url</span>
            </label>
            <input
              type="url"
              placeholder="Github Url"
              name='github'
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Linkedin Url</span>
            </label>
            <input
              type="url"
              placeholder="Linkedin url"
              name='linkedin'
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Resume Url</span>
            </label>
            <input
              type="url"
              name = "resume"
              placeholder="Resume url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="flex justify-center py-8">
            <input type="submit" value="Apply Now" className="bg-blue-500 py-3 px-6 text-white font-medium"/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Appliction;
