import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Routes ,Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Workout from "./Components/Workout";
import Nutrition from "./Components/Nutrition";
import Challanges from "./Components/Challanges";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Error from "./Error";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


const App=()=>{
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/workout" element={<Workout/>}/>
      <Route path="/nutrition" element={<Nutrition/>}/>
      <Route path="/challanges" element={<Challanges/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    </>
  )
}

export default App;