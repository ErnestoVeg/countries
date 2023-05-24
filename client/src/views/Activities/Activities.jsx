import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getActivities } from "../../redux/actions";
import ActivitiesContainer from "./ActivitiesContainer";
import style from "./Activities.module.css";

const Activities = () =>{

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getActivities());
    }, [dispatch])
    return(
        <div className={style.page}>
        <div className={style.container}>
            <h1 className={style.activities_title}>Esto es activities</h1>
            <ActivitiesContainer className={style.activities_title}/>
        </div></div>
    )
}

export default Activities;