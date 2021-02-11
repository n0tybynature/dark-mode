import React from "react"
import useLocalStorage from "./useLocalStorage"

const useDarkMode = () => {
    const [name, setName] = useLocalStorage();



    return [name,setName];

}