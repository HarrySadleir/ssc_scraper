import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ComparativeCharts from './comparative_charts/ComparativeCharts';
import Timeline from './Timeline';

function Main() {
    return (         
        <Routes>
            <Route path='/' element={<Timeline/>}/>
            <Route path='/comparativeCharts' element={<ComparativeCharts/>} />
        </Routes>
    );
}
export default Main;