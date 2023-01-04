import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const appContext=createContext(null);

export const useAppContext=()=>{
    const context=useContext(appContext);

    if(context===undefined){
        throw new Error("App context must be within AppContextProvider")
    }

    return context
}

const ApppContextProvider=({children})=>{

const [favorites, setFavorites]=useState([]);

const addToFavorites=(book)=>{
    const oldFavorites=[...favorites];
    const newFavorites=oldFavorites.concat(book);
    setFavorites(newFavorites)
    console.log(favorites)
}
const removeFromFavorites=(id)=>{
    const oldFavorites=[...favorites];
    const newFavorites=oldFavorites.filter(book=>book.id!==id)
    setFavorites(newFavorites)
    console.log(favorites)

}

    return(
        <appContext.Provider value={{favorites, addToFavorites, removeFromFavorites}}>
            {children}
        </appContext.Provider>
    )
}

export default ApppContextProvider;