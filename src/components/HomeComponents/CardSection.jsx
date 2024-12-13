import { Link } from "react-router";
import Card from "./Card";


const CardSection = ({allJobs}) => {
    return (
        <div className="mb-20">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {
                allJobs.map(job=>(
                    <Card key={job._id} job={job}></Card>
                ))
             }
            </div>
            <div className="flex justify-center mt-12">
                <Link to='/alljobs'><button className="bg-blue-500 text-white py-3 px-6 rounded-lg">See All Jobs</button></Link>
            </div>
            
        </div>
    );
};

export default CardSection;