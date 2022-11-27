import React from "react";
import "./Sidenav.css";
import { Link } from "react-router-dom";

function Sidenav(): React.ReactElement {
    return (<>
        <div className="sidenav">
            <Link to='/'>Home</Link> 
            <Link to='/facultiesTimeline'>Faculties Over Time</Link> 
            <Link to='/comparativeCharts'>Comparative Faculty Charts</Link>
            <Link to='/enrolmentTimeline'>Enrolment Over Time</Link>
            <a href='/ba_specialties.html'>BA Specializations</a>
            <a href='/all_bachelors.html'>Bachelor's Specializations</a>
            <a href='/all_specialties.html'>All Specializations</a>
        </div>
    </>)
}

export default Sidenav;