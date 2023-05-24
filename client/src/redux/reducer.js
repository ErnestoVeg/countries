import { GET_COUNTRIES, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY, ORDER_BY_POBLACION, ORDER_ALPHABETICALLY, GET_ACTIVITIES, CREATE_ACTIVITY, RESET, GET_COUNTRY, GET_COUNTRIES_BY_NAME } from "./actions";

const initialState  = {
    paises : [],
    paisesAll: [],
    actividades: [],
    detail: {}
};
const rootReducer = (state=initialState, action) =>{
    switch(action.type){
    case GET_COUNTRIES:
        return {...state, 
            paises: action.payload,
            paisesAll: action.payload};
    case GET_ACTIVITIES: 
    
    return {...state, actividades: action.payload}
        ;
        
    case FILTER_BY_ACTIVITY:
        const losPaise = state.paisesAll;
        const elNombre  = action.payload;
        const lasAct = state.actividades;
        const laAct = lasAct.find(p=>p.nombre === elNombre)
        const ids = laAct.countries.map(country => country.id);
        console.log(ids)
        const losBu = losPaise.filter(pa => ids.includes(pa.id))
        return{...state,
                  paises: losBu  }
    ;
    case CREATE_ACTIVITY:
        return {...state};
    case GET_COUNTRIES_BY_NAME:
        return {...state,
                paises: action.payload};
    case GET_COUNTRY:
        return {...state, detail: action.payload};
        
    case FILTER_BY_CONTINENT:
        const paises = state.paisesAll;
        const paisesFiltered = action.payload === "" ? state.paisesAll : paises.filter(pa => pa.continente === action.payload );
        return{
            ...state, paises: paisesFiltered
    };
    case ORDER_ALPHABETICALLY:
        let orderCountriesByName = action.payload === "asc" ? state.paises.sort((a, b)=>{
            if(a.name < b.name){
                return -1;
            }
            if(a.name > b.name){
                return 1;
            }
            return 0;
        }) :
        state.paises.sort((a, b)=>{
            if(a.name < b.name){
                return 1;
            }
            if(a.name > b.name){
                return -1;
            }
            return 0;
        })
        return {...state,
                    paises: orderCountriesByName};

    case ORDER_BY_POBLACION:
        let orderByPoblacion = action.payload === "asc" ? state.paises.sort((a, b)=>{
            if(Number(a.poblacion) < Number(b.poblacion)){
                return -1;
            }
            if(Number(a.poblacion) > Number(b.poblacion)){
                return 1;
            }
            return 0;
        }) :
        state.paises.sort((a, b)=>{
            if(Number(a.poblacion) < Number(b.poblacion)){
                return 1;
            }
            if(Number(a.poblacion) > Number(b.poblacion)){
                return -1;
            }
            return 0;
        });
        return {...state, paises: orderByPoblacion};
        case RESET:
            return {...state, detail: []}
    default:
        return {...state};
        }

};


export default rootReducer;