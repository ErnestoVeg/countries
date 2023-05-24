import Card from "../../components/DetailCard/DetailCard";
import style from "./Detail.module.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { restartDetail, getCountry } from "../../redux/actions";

const Detail = () =>{

    const dispatch = useDispatch();
    // console.log(detailId);
    const {id} = useParams();

    useEffect(()=>{
        dispatch(restartDetail());
        dispatch(getCountry(id))
    }, [dispatch, id])
    
    
    return(
        <div className={style.container}>
            <Card />
            <Link to="/home"><button className={style.button} type="reset">VOLVER</button></Link>        
        </div>
    )
}

export default Detail;