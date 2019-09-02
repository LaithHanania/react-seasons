import React from 'react';

const Spinner = (props) =>{
    return(
        <div className = "ui active dimmer">
            <div className = "ui big text loader">
                {props.message}
            </div>
        </div>
    );
};

Spinner.defaultProps={ //this is a default  or alternate version of the props for Spinner incase no props.message exists
    message: 'Loading'
};

export default Spinner;