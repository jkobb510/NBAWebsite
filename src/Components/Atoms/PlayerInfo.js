          
import React from 'react';  
import PropTypes from 'prop-types';

const PlayerInfo = ({ classname, team, years }) => {
    return (  
        <div className = {classname}>{team} ({years})</div>    
    );
}  

PlayerInfo.propTypes = {
    classname: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
    years: PropTypes.string.isRequired,
}
export default PlayerInfo;
