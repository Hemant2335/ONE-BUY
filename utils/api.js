import { API_URL , API_TOKEN } from "./Urls";


export const fetchdata = async(endpoint)=>{
    const options = {
        method : 'Get',
        headers : {
            Authorization : "Bearer " + API_TOKEN
        }
    };

    const url = `${API_URL}${endpoint}`;
    const data = await fetch(url,options);
    const parseddata = await data.json();
    return parseddata; 

}


