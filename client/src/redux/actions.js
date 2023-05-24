import axios from 'axios';
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY = "GET_COUNTRY";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const SET_ACTIVITIES = "SET_ACTIVITIES";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const ORDER_BY_POBLACION = "ORDER_BY_POBLACION";
export const ORDER_ALPHABETICALLY = "ORDER_ALPHABETICALLY";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const RESET = "RESET";
export const GET_COUNTRIES_BY_NAME = "GET_COUNTRIES_BY_NAME";


export const getCountries = () =>{

    return async function(dispatch){
        const paisesDB = await axios.get("http://localhost:3001/countries/");
        console.log(paisesDB);
        const paises = await paisesDB.data;
        dispatch({ type: GET_COUNTRIES, payload: paises})
    }
}

export const getCountryByName =  (nombrePais) =>{
    return async function(dispatch){
        const paisesCrudo = await axios.get(`http://localhost:3001/countries?name=${nombrePais}`);
        const paisesBuscados = await paisesCrudo.data;
        dispatch({type: GET_COUNTRIES_BY_NAME,
                    payload: paisesBuscados});
}
}
export const getCountry = (id) =>{

    return async function(dispatch){
       try{ const paisDB = await axios.get(`http://localhost:3001/countries/${id}`);
        const pais = await paisDB.data;
        dispatch({type : GET_COUNTRY, payload: pais})}
        catch(error){return {error: error.message}}
    }
}

export const restartDetail = () =>{
    return {
        type: RESET
    }
}

export const filterByContinent = (continente) =>{
    return{
        type: FILTER_BY_CONTINENT,
        payload: continente,
    }
}
export const createActivity = (form) =>{
    return async function(dispatch) {
    await axios.post("http://localhost:3001/activities/", form)
        return dispatch({type: CREATE_ACTIVITY})
}}

export const getActivities = () =>{
    return async function(dispatch){
        try{const activitiesDB = await axios.get("http://localhost:3001/activities/");
        let activities = await activitiesDB.data;
        console.log(activities)
        if(typeof activities === "string"){
            activities = []
        }
        
        dispatch({
            type: GET_ACTIVITIES,
            payload: activities
        })}
        catch(error){
            
            console.log(error);
        }
    }
}
export const filterByActivity = (arg) =>{
    
    return {type: FILTER_BY_ACTIVITY,
                payload: arg}
}
export const orderByPoblacion = (payload) =>{
    return{
        type: ORDER_BY_POBLACION,
        payload
    }
}

export const orderAlphabetically = (payload) =>{
    return {
        type: ORDER_ALPHABETICALLY,
        payload
    }
}