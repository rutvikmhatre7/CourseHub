import React, { Component, useEffect } from "react";
import './style.css';

const Home=()=>{
    useEffect(()=>{
        document.title="Home";

    },[]);

    return(

        <div class="jumbotron">
        <h1>Welcome to our Courses</h1>
       <p>Here all types of IT Courses are present</p>
      </div>

    )
}

export default Home;