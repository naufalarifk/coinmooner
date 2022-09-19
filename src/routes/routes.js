//import react router dom
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import React from 'react'


import TokenAudit from "../pages/audit";
import Kyc from "../pages/kyc";
import Home from "../pages/home";

const Routing = () => {
    return(
     <Router>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/kyc" element={<Kyc/>}/>
            <Route exact path="/tech-audit" element={<TokenAudit/>}/>
        </Routes>
     </Router>   
    )
    }
    export default Routing