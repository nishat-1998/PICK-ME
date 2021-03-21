import React ,{useState,useEffect}from 'react';
import Ride from '../Ride/Ride';
import rideData from '../../rideData/rideData.json'


const Home = () => {
       
    const [rides,setRides]= useState([]);

    useEffect(()=>{
         console.log(rideData);
         setRides(rideData);

        },[])
        
    const style = {
        display: 'flex',
        margin: '40px',
        justifyContent: 'space-between'
    }
 
    return (
        <div style={style}>
            {
                rides.map(ride=> <Ride key={ride.title} ride={ride}></Ride>)
            }
        </div>
    );
};

export default Home;