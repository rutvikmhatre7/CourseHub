import React from "react";
import {Card,CardBody,CardTitle,CardSubtitle,CardText,CardFooter,Button,Container,} from "reactstrap";
import './style.css';
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const Course=({course,update})=>{

const deleteCourse=(id)=>{
axios.delete(`${base_url}/courses/${id}`).then(
    (response
        )=>{
            toast.success("Course Deleted")
            update(id);

    },(error)=>{
        toast.error("Course Not Deleted ")

    }
)
}


    return(
       <Card className="text-center">
        <CardBody>
<CardSubtitle id="c" className="font-weight-bold">{course.title}</CardSubtitle>
    <CardText id="c1" >{course.description} </CardText>
        <Container className="text-center">
            <Button color="danger" onClick={()=>{
                deleteCourse(course.id);
            }}>Delete</Button>
            <Button color="warning ml-3">Update</Button>
        </Container>
   

        </CardBody>
       </Card>


    );
}


export default Course;
