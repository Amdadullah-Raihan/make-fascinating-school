import React from 'react';
import Consideration from '../Consideration/Consideration';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {faUserPlus } from '@fortawesome/free-solid-svg-icons'
import "./Teacher.css"

const Teacher = (props) => {
    // console.log(props);
   
    const {first_name, last_name, img, salary,gender} = props.teacher;
    // const handleConsideration = props.handleConsideration;

    let pronoun;
    if(gender === "Male"){
         pronoun = "Him";
    }
    else{
        pronoun = "Her"
    }
    return (
        <div>
            
           <div className='teacher'>
                <img src={img} alt="" />
                <h4>Name: {first_name} {last_name}</h4>
                <p>Gender: {gender}</p>
                <p></p>
                <p>Salary: ${salary}</p>
                <button onClick={()=>props.handleConsideration(props.teacher)}>Consider {pronoun} <FontAwesomeIcon className='icon' icon={faUserPlus} />
                </button>
           </div>


        </div>
    );
};

export default Teacher;