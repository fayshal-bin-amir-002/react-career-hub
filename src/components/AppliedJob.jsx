import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../utilities/localStorage";
import { useEffect, useState } from "react";
import AppliedJobCard from "./AppliedJobCard";

const AppliedJob = () => {

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const jobs = useLoaderData();

    useEffect(() => {
        const storedJobId = getStoredApplication();
        if (storedJobId.length > 0) {
            const jobApplied = jobs.filter((job) => storedJobId.includes(job.id.toString()))
            setAppliedJobs(jobApplied);
            setDisplayJobs(jobApplied);
        }
    }, [jobs])

    const handleFilter = (e) => {
        const val = e.target.value;
        if(val === 'remote') {
            const newCards = appliedJobs.filter((job)=> job.remote_or_onsite.toLowerCase() === val);
            setDisplayJobs(newCards);
        }
        else if(val === 'onsite') {
            const newCards = appliedJobs.filter((job)=> job.remote_or_onsite.toLowerCase() === val);
            setDisplayJobs(newCards);
        }
        else {
            setDisplayJobs(appliedJobs);
        }
        console.log(appliedJobs);
    }

    return (
        <div className="mb-20">
            <div className="flex justify-end mb-5">
                <select className="select select-primary w-full max-w-max" onChange={()=>handleFilter(event)}>
                    <option value='all'>Filter By</option>
                    <option value='remote'>Remote</option>
                    <option value='onsite'>Onsite</option>
                </select>
            </div>
            <div>
                {
                    displayJobs.map((job) => <AppliedJobCard key={job.id} card={job}></AppliedJobCard>)
                }
            </div>
        </div>
    );
};

export default AppliedJob;