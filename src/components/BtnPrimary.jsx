import PropTypes from 'prop-types';

const BtnPrimary = ({name}) => {
    return (
        <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white text-xl font-bold">{name}</button>
    );
};

BtnPrimary.propTypes = {
    name : PropTypes.string.isRequired
};

export default BtnPrimary;