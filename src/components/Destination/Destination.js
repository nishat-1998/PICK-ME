import React,{useState,useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';


const Destination = () => {
    const {title} = useParams();
    //console.log(title);
    const [input,setInput]= useState({
        From:'',
        To:''
    });
    const handleSubmit=(e)=>{
        
  e.preventDefault();
    }
    const handleInput=()=>{
        const newDestination= {...input};
 // newDestination[e.target.name]=e.target.value;
   setInput(newDestination);
    }
    return (
        <div style={{textAlign: 'center'}}>
            <h3>Let's Select Destination Of Your : {title} Vehicle.</h3>
            <p>Want a <Link to="/home">different Vehicle?</Link> </p>
            <div className="row container d-flex justify-content-center ride">
                <div className="col-4">
                    <div className="p-3 pic-card search-box">
                        {
                            <div>
                            <div className="mb-3">
                                <label htmlFor="pick-form">Pick From</label>
                                <input type="text" className="form-control" name="from" id="pick-from" onBlur={handleInput}
                                placeholder="from"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="pick-from">Pick To</label>
                                    <input type="text" className="form-control" name="to" id ="pick-form" onBlur={handleInput}
                                    placeholder="To"/>
                                    </div>
                                    </div>
                        }
               </div>
                </div>
                 </div>

           
        </div>
       
    );
};

export default Destination;