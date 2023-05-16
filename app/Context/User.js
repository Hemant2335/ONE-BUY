'use client'

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { fetchdata } from "@/utils/api";
export const Context = createContext();

export const AppContext = (props) =>{
    const [category, setcategory] = useState(null)
    useEffect(()=>{
      fetchprod();
    },[])
  
    const fetchprod = async()=>{
      const {data} = await fetchdata('/api/categories?populate=*')
      console.log(data);
      setcategory(data);
    }

    
    return(
        <Context.Provider value={{category , setcategory}}>
            {props.children}
        </Context.Provider>
    )
}