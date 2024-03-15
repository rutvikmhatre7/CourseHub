import React, { Fragment, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import { useEffect } from "react";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
const AddCourse=()=>{
    useEffect(()=>{
        document.title="Add Courses"

    },[]);

const[course,setCourse]=useState({
    
});

//form handler function
const handleForm=(e)=>{
    console.log(course);
    postDatatoServer(course);
    e.preventDefault();
}


//creating function to post data on server  
const postDatatoServer=(data)=>{
    axios.post(`${base_url}/courses`,data).then(
        (response)=>{
console.log(response);
console.log("success")
toast.success("Course added successfully");

        },(error)=>{
console.log(error);
console.log("error");
toast.error("Error!!!")
        }
    )
}

return(
    <Fragment>
        <h1 className="text-center my-3" >Fill Course Details</h1>
        <Form onSubmit={handleForm}>
            <FormGroup>
                    <label for="userId">Course Id</label>
                    <Input type="text" placeholder="Enter Here" name="userId" id="userId"
                    onChange={(e)=>{
                        setCourse({...course,id:e.target.value});
                    }} required/>
            </FormGroup>

            <FormGroup>
                    <label for="title">Course Title</label>
                    <Input type="text" placeholder="Enter Title Here"  id="title"
                     onChange={(e)=>{
                        setCourse({...course,title:e.target.value});
                    }} required/>
            </FormGroup>

            <FormGroup>
                    <label for="description">Course Description</label>
                    <Input type="textarea" placeholder="Enter Description Here"  id="description" style={{height:100}}
                     onChange={(e)=>{
                        setCourse({...course,description:e.target.value});
                    }}
                    required/>
            </FormGroup>

            <Container className="text-center">
                <Button type="submit" color="success">Add Course</Button>
                <Button type="reset" color="warning" >Clear</Button>
            </Container>




        </Form>
    </Fragment>
)

}



export default AddCourse;