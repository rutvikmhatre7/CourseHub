import React, { useState } from "react";
import Course from "./Course";
import { useEffect } from "react";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";


const AllCourse=()=>{

    useEffect(()=>{
        document.title="All Courses"
        getAllCoursesFromServer();
    },[]);

    const getAllCoursesFromServer = () => {
        // Sending a GET request to `${base_url}/courses`
        axios.get(`${base_url}/courses`).then(
            // If the request is successful, log the response data to the console
            (response) => {
                console.log(response.data);
                toast.success("Course has been loaded");
                setCourses(response.data);
            },
            // If there's an error, log the error to the console
            (error) => {
                console.log(error);
                toast.error("Something went wrong");
            }
        );
    };






const[courses,setCourses]=useState(
[]);

const updateCourses=(id)=>{
setCourses(courses.filter((c)=>
    c.id!=id
)); 
}


    
return(
    <div>
        <h1>All Courses</h1>
        <p>List of all courses as follows</p>
        {courses.length>0?courses.map((item)=><Course key={item.id} course={item} update={updateCourses}></Course>):"No Courses"
        }



    </div>
)

}


export default AllCourse;