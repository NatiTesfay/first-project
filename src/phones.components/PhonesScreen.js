import React from "react";
import PhoneCards from "./pages/PhoneCards";
import Devices from "./services/Devices"
import PhoneCards from "./pages/PhoneCards";
import Router from "./pages/Router";


function PhonesScreen() {
    return(
        <div>
      <PhoneCards/>
      <Devices/>
        </div>
    )
}
export default PhonesScreen;