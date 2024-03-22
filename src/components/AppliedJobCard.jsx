import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";

const AppliedJobCard = ({ card }) => {

    const { id, job_title, company_name, remote_or_onsite, job_type, salary, location, logo } = card;

    return (
        <div className="card  justify-between items-center card-side bg-base-100 shadow-xl mb-6">
            <div className="flex items-center">
                <figure className="p-8"><img src={logo} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{job_title}</h2>
                    <p className='text-xl font-semibold opacity-70'>{company_name}</p>
                    <div className='space-x-5 my-4'>
                        <button className="btn btn-outline btn-primary">{remote_or_onsite}</button>
                        <button className="btn btn-outline btn-primary">{job_type}</button>
                    </div>
                    <div className='flex gap-8 items-center mb-6 text-lg font-semibold opacity-70'>
                        <p className='flex items-center gap-1'><span><IoLocationOutline /></span>{location}</p>
                        <p className='flex items-center gap-1'><span><AiOutlineDollarCircle /></span>{salary}</p>
                    </div>
                </div>
            </div>
            <div className="card-actions justify-end mr-8">
                <Link to={`/job/${id}`}><button className="btn btn-primary">View Details</button></Link>
            </div>
        </div>
    );
};

AppliedJobCard.propTypes = {
    card: PropTypes.object.isRequired
};

export default AppliedJobCard;