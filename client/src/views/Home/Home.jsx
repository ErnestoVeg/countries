import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountries, getActivities } from "../../redux/actions";
import style from "./Home.module.css";


const Home = () =>{

    // const actividades = useSelector(state=>state.actividades);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getCountries());
        dispatch(getActivities());
        console.log("Este es el console.log de home")
        
         },[dispatch])
         return(
        <div className={style.granContainer}>
            
            <h1 className={style.titulo}>Países del mundo</h1>
            <CardsContainer/>
            
        </div>
    )
}

export default Home;