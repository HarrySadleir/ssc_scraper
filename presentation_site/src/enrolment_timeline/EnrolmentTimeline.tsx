import React from "react";
import UBC_Enrolment_Timeline from "./UBC_Enrolment_Timeline.png"
import "../comparative_charts/ComparativeCharts.css"

function EnrolmentTimeline() {
    return (<div style={{position: "absolute", margin: "auto", marginLeft: "200px", top: "50%", transform: "translateY(-50%)", msTransform: "translateY(-50%)"}}>
        <img src={UBC_Enrolment_Timeline} className="pie-chart child" alt="Timeline of UBC's enrolment"/>
        <div className="child">
            <p className="desc">
                This data is from <a href="https://archives.library.ubc.ca/general-history/student-enrolment/">UBC's archives</a>, which only contains data up to 2008. 
                A few interesting points are the significant spikes around 1945 and 1967. We speculate the first was caused by the end of the war, and the second being the "baby boomers" reaching university age.
            </p>
        </div>
    </div>)
}

export default EnrolmentTimeline;