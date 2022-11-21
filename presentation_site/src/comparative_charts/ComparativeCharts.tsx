import React from "react";
import UBC_Faculties_Pie from "./UBC_Faculties_Pie.png"
import UofT_Faculties_Pie from "./UofT_Faculties_Pie.png"
import McGill_Faculties_Pie from "./McGill_Faculties_Pie.png"
import "./ComparativeCharts.css"

function ComparativeCharts() {
    return (
    <div style={{margin: "auto", marginLeft: "200px"}}>
        <h1 style={{textAlign: "center"}}>Comparing the Faculties of UBC, UofT, and McGill</h1>
        <div> 
            <img src={UBC_Faculties_Pie} className="pie-chart child" alt="Chart of UBC Enrolment Data" />
            <div className="child">
                <p className="desc">
                    The six largest faculties of ubc are Arts, Science, Applied Science, Commerce and Business Administration, Medicine, and Education.
                    These faculties are very similar to the large faculties present at UofT and McGill. 
                    From this we can broadly say that UBC has similar high level organization to these schools, and that the differences are in the finer details.
                </p>
            </div>
        </div>
        <div>
            <img src={UofT_Faculties_Pie} className="pie-chart child" alt="Chart of UofT Enrolment Data" />
            <div className="child">
                <p className="desc">
                    The main difference for UofT is that Arts and Science is a single faculty, not split like at UBC and McGill.
                    UBC initially split its Arts and Science faculty because it was too monolithic. 
                    UofT may not have this problem because of the college system, which divides this massive faculty into several smaller cohorts.
                    <br/><br/>
                    UofT also does have independent faculties for smaller subjects like Information and Music, but does not have a faculty for environmental related studies, like UBC's Land & Food Systems + Forestry, and McGill's Faculty of Agricultural and Environmental Science.
                </p>
            </div>
        </div>
        <div>
            <img src={McGill_Faculties_Pie} className="pie-chart child" alt="Chart of McGill Enrolment Data"/>
            <div className="child">
                <p className="desc">
                    McGill's chart is very similar to that of UBC, with very few differences in the top 6 faculties.
                    One thing this shows is that this broad pattern applies despite the roughly 20,000 person enrolment difference.
                </p>
            </div>
        </div>
    </div>);
}

export default ComparativeCharts;