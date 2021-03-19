import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Destination = () => {
    const {vehicleType} = useParams();
    console.log(vehicleType);
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Let's Select Destination Of Your{vehicleType} Vehicle.</h1>
            <p>Want a <Link to="/home">different Vehicle?</Link> </p>
           
        </div>
       
    );
};

export default Destination;