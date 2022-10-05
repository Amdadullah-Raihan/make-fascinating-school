import React, { useState,useEffect } from 'react';
import Consideration from '../Consideration/Consideration';
import Teacher from '../Teacher/Teacher'

import "./Container.css"

const Container = () => {

    const [teachers, setTeachers] = useState([]);
    const [considered, setConsidered] = useState([])

    useEffect(() => {
        fetch("./teachers.json")
            .then(res=> res.json())
            .then(data=> setTeachers(data))
    },[])  



    const handleConsideration = (teacher) => {
       
         const newConsidered = [...considered, teacher]
         setConsidered(newConsidered)
        console.log("Clicked")
        // console.log(teacher)

    }

    return(
        <div className='container'>
            <div className='teachers-container'>
            
                {
                    teachers.map(teacher => <Teacher
                        key = {teacher.id}
                        teacher={teacher}
                        handleConsideration = {handleConsideration}
                          ></Teacher>)
                }
            
            </div>
            <div className='consideration-container'>
                <Consideration considered = {considered}></Consideration>
            </div>
        </div>
    )   


};

export default Container;