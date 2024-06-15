import React from 'react';
import PropTypes from 'prop-types';
import './Stat.css';

const Stat = ({ label, value }) => {
    return (
        <div className="Stat">
            <span>{label}</span>
            {value}
        </div>
    );
};

Stat.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Stat;
