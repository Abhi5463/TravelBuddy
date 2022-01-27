
import React from "react";

const getData = async () => {
    try{
        const response = await axios.get("");
    } catch(error){
         console.log(error.message);
    }
}