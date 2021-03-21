import React,{useState} from 'react';
import rideData from '../../rideData/rideData.json'
import { Link,useParams } from 'react-router-dom';


const Destination = () => {
    const {title} = useParams();
    const choiceRides= rideData.find(ride=>ride.title===title);
    const [click,setClick]=useState(false);
    const handleSubmit=(e)=>{
        setClick(!click);
        //console.log(choiceRides.imgUrl)
        e.preventDefault();
    }
    
    return (
        
        <div className="row text-center m-5">
            <div className="border col-sm-6">
            <div style={{textAlign: 'center'}}>
            <h3>Let's Select Destination Of Your : {title} Vehicle.</h3>
            <p>Want a <Link to="/home">different Vehicle?</Link> </p>
           
                        
               </div>
                <form onSubmit={handleSubmit}>
                    <div className="m-3">
                        <label>Select pickup location</label>
                        <br/>
                    <input type="date" name="date" required/>
                    <br/>
                    </div>
                    <div className="m-3">
                    <label>Select pickup location</label>
                        <br/>
                    <input type="text" name="pick" required/>
                    <br/>
                    </div>
                    <div className="m-3">
                    <label>Select pickup location</label>
                        <br/>
                    <input type="text" name="dest" required/>
                    <br/>
                    </div>
                    <input className="m-1" type="submit" value="search-ride"/>
                    </form>
                    <div>
                        <br/>
                    {
                        click && (<div>
                        <div> <img src={choiceRides.imgUrl} alt=""/> <h1>{choiceRides.price}</h1></div>
                        <div> <img src={choiceRides.imgUrl} alt=""/><h1>{choiceRides.price}</h1></div>
                        <div><img src={choiceRides.imgUrl} alt=""/><h1>{choiceRides.price}</h1></div>
    
                        </div>
                    
                    )
                      }
                    </div>
                    </div>

      <div className="col-sm-6 bg-dark">
      
      </div>
            
     </div>  
       
    );
};

export default Destination;