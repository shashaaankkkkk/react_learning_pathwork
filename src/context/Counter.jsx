import { createContext, useState } from "react";
export const Count=createContext(null);
export const CountProvider=(props)=>{
    const [count_1,setCount_1]=useState(0);
    return(<Count.Provider value={{count_1 , setCount_1}}>
{props.children}
    </Count.Provider>);
}