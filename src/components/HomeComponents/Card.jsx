import { Link } from "react-router";


const Card = ({job}) => {

    const {_id, title, location, jobType, category, applicationDeadline, salaryRange,
        description, company, requirements, company_logo
    } = job || {}
    return (
        <div className="bg-slate-100 p-4 rounded-xl border ">
           <div className="flex items-center gap-2 mb-4">
            <div className="">
                <img src={company_logo} alt="" className="" />
            </div>
            <div className="">
                <h3 className="font-bold">{company}</h3>
                <p className="text-gray-500">{location}</p>
            </div>
           </div> 
           <h1 className="text-xl font-semibold mb-3">{title}</h1>
           <p className="text-gray-500 mb-3">Job Types: {jobType}</p>
           <p className="text-gray-700 mb-4">{description}</p>
           <div className="flex items-center flex-wrap gap-2 py-3">
           {
            requirements.map((item, idx)=>(
                <p key={idx} className="border py-1 rounded-lg px-3 bg-blue-100">{item}</p>
            ))
           }
           </div>
           <div className="flex items-center justify-between">
            <h3 className="">
                <span className="text-xl text-blue-600 font-semibold">{salaryRange.min} - {salaryRange.max}</span>
                <span className="">/{salaryRange.currency}</span>
            </h3>
              <Link to={`/application/${_id}`}><button className="py-2 px-4 rounded-lg bg-blue-600 text-white font-medium">Apply</button></Link>
           </div>
        </div>
    );
};

export default Card;