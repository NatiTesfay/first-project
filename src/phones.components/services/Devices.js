import React from "react";
const DevicesApi = "https://my-json-server.typicode.com/Jeck99/movies-api/movies"


 export async function Devices(){
    try{
    return await fetch(DevicesApi)
    .then((response) => response.json())
    .then((res)=>console.log(res))
    }
   catch{(err)=>console.log(err)}

}
   

