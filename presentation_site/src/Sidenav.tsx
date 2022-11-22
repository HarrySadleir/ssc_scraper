import React from "react";
import "./Sidenav.css";

function Sidenav(): React.ReactElement {
    return (<>
        <div className="sidenav">
            <a href='/'>Home</a> 
            <a href='/facultiesTimeline'>Faculties Over Time</a> 
            <a href='/comparativeCharts'>Comparative Faculty Charts</a>
            <a href='/enrolmentTimeline'>Enrolment Over Time</a>
            <a href='/ba_specialties.html'>BA Specializations</a>
            <a href='/all_bachelors.html'>Bachelor's Specializations</a>
            <a href='/all_specialties.html'>All Specializations</a>
        </div>
    </>)
}

export default Sidenav;