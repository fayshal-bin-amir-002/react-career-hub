import PropTypes from 'prop-types';
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";


const FeaturedJobCard = ({ card }) => {
    console.log(card);
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = card;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={logo} /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{job_title}</h2>
                <p className='text-xl font-semibold opacity-70'>{company_name}</p>
                <div className='space-x-5 my-4'>
                    <button className="btn btn-outline btn-primary">{remote_or_onsite}</button>
                    <button className="btn btn-outline btn-primary">{job_type}</button>
                </div>
                <div className='flex items-center mb-6 text-lg font-semibold opacity-70'>
                    <p className='flex items-center gap-1'><span><IoLocationOutline /></span>{location}</p>
                    <p className='flex items-center gap-1'><span><AiOutlineDollarCircle /></span>{salary}</p>
                </div>
                <div className="card-actions justify-start">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

FeaturedJobCard.propTypes = {
    card: PropTypes.object.isRequired
};

export default FeaturedJobCard;