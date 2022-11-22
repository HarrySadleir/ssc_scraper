import React from "react";

function Home() {
    return (<div style={{paddingLeft: "220px"}}>
        <h1>Home</h1>
        <p style={{ width: "80%" }}>
            This site contains all the visualizations for our INFO 200 project analysing UBC as an information system.
            The different visualizations illustrate a different aspect of the organization of UBC; through history, comparison, and description.<br/><br/>

            The Faculties Over Time timeline shows when each faculty was created, removed, or renamed.<br/><br/>

            The Comparative Faculty Charts compare the 2021 enrolment by faculty of UBC, UofT, and McGill. <br/><br/>

            Enrolment over time shows how UBC has grown since its creation. <br/><br/>

            The Specializations networks show every specialization present at UBC, at 3 different granularities. 
        </p>
    </div>)
}

export default Home;