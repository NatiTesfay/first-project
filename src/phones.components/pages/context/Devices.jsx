
import { createContext } from "react";
import { useState } from "react";
export const Devices = createContext()

const devices = ()=>{
    const[phones,setPhones]=useState([]);

    return(
        <div>
            <Devices.Provider value={[phones,setPhones]} >
            

            </Devices.Provider>
        </div>
    )
}
export default Devices;
