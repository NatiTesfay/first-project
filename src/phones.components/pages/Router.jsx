import React from "react";
import { Route } from "react-router-dom";
import Devices from "./context/devices";


export default function Router (){
    return(
        <Router>
        <Route>
            <Devices></Devices>
        </Route>
        </Router>
    )
}