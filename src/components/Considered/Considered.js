import React from 'react';
import './Considered.css'

const Considered = ({teacher}) => {
    return (
        <div className='added-teacher'>
            <div className="teacher-container">
                <img className='img' src={teacher.img} alt="" />
                <h3>{teacher.first_name} {teacher.last_name}</h3>
                
            </div>
        </div>
    );
};

export default Considered;