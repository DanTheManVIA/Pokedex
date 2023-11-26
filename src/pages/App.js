import {Outlet} from "react-router-dom";
import "./App.css";
import Navbar from "../components/Navbar/Navbar";

export default function App(){
    return (
        <div>
          <Navbar/>
          <Outlet/>
        </div>
    )
}