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
            
        </div>
    );
};

export default CardSection;