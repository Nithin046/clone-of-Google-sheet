import { useEffect, useState } from "react";

const useFetch = (request) => {
    let [data, setData]=useState(null);
    let [pending, setPending]=useState(true);
    let [error , setError]= useState(null);

    useEffect(()=>{
        setTimeout(()=>{
            fetch(request)
            .then(res=> {
                if(res.ok== false){
                    throw error("Data not found");
                }
                return res.json()})
            .then(recevedData=>setData(recevedData));setPending(false)
            .catch((error)=>{setError(error.message);setPending(false)})

        },500)
    },[])


    return ( 
            
        {data,pending,error}
        
    );
}
 
export default useFetch;   