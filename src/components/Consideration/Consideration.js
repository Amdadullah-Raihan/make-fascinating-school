import React, { useState } from 'react';
import Considered from '../Considered/Considered';

const Consideration = (props) => {
    // console.log(props.considered);

    const teachers = props.considered; 
    let totalSalary = 0; 
    for(const teacher of teachers){

        totalSalary = totalSalary + parseFloat(teacher.salary);
      
    }
    return (
        <div className='consideration'>
            <h2>Added Teachers: {teachers.length}</h2>
            <h2>Total Salary: {totalSalary}</h2>
            {
                teachers.map(teacher=><Considered teacher = {teacher}></Considered>)
            }
            
           
             
           
        </div>
    );
};

export default Consideration;