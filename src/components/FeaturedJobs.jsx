import { useEffect, useState } from "react";
import FeaturedJobCard from "./FeaturedJobCard";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[]);

    return (
        <section className="mb-28">
            <div className="text-center w-1/2 mx-auto mb-16">
                <h1 className="text-5xl font-extrabold mb-4">Featured Jobs</h1>
                <p className="font-medium">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.map((job) => <FeaturedJobCard
                    key={job.id} card={job}></FeaturedJobCard>)
                }
            </div>
        </section>
    );
};

export default FeaturedJobs;