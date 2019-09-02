import './SeasonDisplay.css';
import React from 'react';

//Configuration object instead of having the commented out ternary expressions in SeasonDisplay
const seasonConfig = {
    summer: {
        text: 'It\'s summer time',
        iconName: 'sun'
    },
    winter: {
        text: 'it\'s winter',
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) =>{
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer': 'winter' //lat greater than 0? if true, return summer, if not return winter
    } else{
        return lat > 0 ? 'winter': 'summer'
    }
};

const SeasonDisplay = (props) =>{
    const season = getSeason(props.lat, new Date().getMonth()); //new Date().getMonth() gets the month, but it has a zeroth index meaning 0 is january...
    const {text, iconName} = seasonConfig[season];

    return (
    <div className = {`season-display ${season}`}>
        <i className = {`icon-left massive ${iconName} icon`} />
        <h1>{text}</h1>
        <i className = {`icon-right massive ${iconName} icon`} />
    </div>
    );
};

export default SeasonDisplay;