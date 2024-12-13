import { useEffect, useState } from "react";
import Banner from "../components/HomeComponents/Banner";
import CardSection from "../components/HomeComponents/CardSection";
import Category from "../components/HomeComponents/Category";
import axios from "axios";


const Home = () => {
    const [allJobs, setAllJobs] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:4000/alljobs`)
        .then(result=>{
            setAllJobs(result.data)
        })
    },[])

    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <CardSection allJobs={allJobs}></CardSection>
        </div>
    );
};

export default Home;