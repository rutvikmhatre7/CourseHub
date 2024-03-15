import logo from './logo.svg';
import './App.css';
import {Button, Container,Row,Col} from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import Course from './components/Course';
import AllCourse from './components/AllCourses';
import AddCourse from './components/AddCourse';
import Menus from './components/Menus';
import Header from './components/Header';
import {BrowserRouter as Router,Route, Routes } from "react-router-dom";
import axios from 'axios';


const btnhandle=()=>{
  toast.success("This is my first message");
}


function App() {
  return (
   <div>
    <Router>
    <ToastContainer/>
   <Container>
    <Header></Header>
    <Row>
      <Col md={4}>
       <Menus/>
      </Col>
      <Col ms={8}>
       <Routes>
       <Route path='/' Component={Home} exact></Route>
        <Route path='/add-course' Component={AddCourse} exact></Route>
        <Route path='/view-courses' Component={AllCourse} exact></Route>
       </Routes>
      </Col>
    </Row>
   </Container>
    </Router>
   </div>
  );
}

export default App;
