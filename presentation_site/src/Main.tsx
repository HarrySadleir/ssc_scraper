import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ComparativeCharts from './comparative_charts/ComparativeCharts';
import EnrolmentTimeline from './enrolment_timeline/EnrolmentTimeline';
import FacultiesTimeline from './FacultiesTimeline';
import Home from './Home';

function Main() {
    return (         
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/facultiesTimeline' element={<FacultiesTimeline/>}/>
            <Route path='/enrolmentTimeline' element={<EnrolmentTimeline/>}/>
            <Route path='/comparativeCharts' element={<ComparativeCharts/>} />
        </Routes>
    );
}
export default Main;