import { AiOutlineDollarCircle } from "react-icons/ai";
import { useLoaderData, useParams } from 'react-router-dom';
import { FaCalendarAlt, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../utilities/localStorage";


const JobDetails = () => {

    const jobs = useLoaderData();
    const { id } = useParams();

    const job = jobs.find((jb) => jb.id == id);

    const handleAppleJob = () => {
        const showToast = saveJobApplication(id);
        if(showToast) {
            toast.success("Job applied successfully");
        }
        else {
            toast.error("Job already applied");
        }
    }


    return (
        <div className='flex justify-center gap-6 py-20'>
            <div className='w-[70%]'>
                <p className='font-medium'><span className='font-bold'>Job Description: </span>
                    <span className='opacity-60'>{job.job_description}</span></p>
                <p className='font-medium my-6'><span className='font-bold'>Job Responsibility: </span>
                    <span className='opacity-60'>{job.job_responsibility}</span></p>
                <h3 className='font-bold mb-4'>Educational Requirements:</h3>
                <p className='opacity-60 mb-6'>{job.educational_requirements}</p>
                <h3 className='font-bold mb-4'>Experience:</h3>
                <p className='opacity-60'>{job.experiences}</p>
            </div>
            <div className='w-[30%]'>
                <div className="bg-[#7E90FE1A] p-8 shadow-md rounded-lg mb-6">
                    <h3 className='font-bold text-xl'>Job Details</h3>
                    <div className="divider"></div>
                    <p className='flex items-center gap-1 opacity-60 mb-4'>
                        <span><AiOutlineDollarCircle /></span>
                        <span className="font-medium">Salary : </span>
                        {job.salary} (Per Month)
                    </p>
                    <p className='flex items-center gap-1 opacity-60 mb-8'>
                        <span><FaCalendarAlt /></span>
                        <span className="font-medium">Job Title : </span>
                        {job.job_title}
                    </p>
                    <h3 className='font-bold text-xl'>Contact Information</h3>
                    <div className="divider"></div>
                    <p className='flex items-center gap-1 opacity-60 mb-4'>
                        <span><FaPhoneAlt /></span>
                        <span className="font-medium">Phone : </span>
                        {job.contact_information.phone}
                    </p>
                    <p className='flex items-center gap-1 opacity-60 mb-4'>
                        <span><MdOutlineEmail /></span>
                        <span className="font-medium">Email : </span>
                        {job.contact_information.email}
                    </p>
                    <p className='flex gap-1 opacity-60 mb-4'>
                        <span><IoLocationOutline className="inline" /></span>
                        <span>
                            <span className="font-medium">Address : </span>
                            <span>{job.contact_information.address}</span>
                        </span>
                    </p>
                </div>
                <button className="btn btn-primary w-full"
                onClick={handleAppleJob}>Apply Now</button>
            </div>
            <ToastContainer />
        </div>
    );
};

JobDetails.propTypes = {

};

export default JobDetails;