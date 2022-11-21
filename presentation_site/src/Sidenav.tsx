import React from "react";
import "./Sidenav.css";

function Sidenav(): React.ReactElement {
    return (<>
        <div className="sidenav">
            <a href='/'>Faculties Over Time</a> 
            <a href='/ba_specialties.html'>BA Specializations</a>
            <a href='/all_bachelors.html'>'Bachelors' Specializations</a>
            <a href='/all_specialties.html'>All Specializations</a>
        </div>
    </>)
}

export default Sidenav;