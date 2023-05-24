import { useSelector } from "react-redux";
import style from "./DetailCard.module.css";

const Card = (props) =>{

    const detail = useSelector(state=>state.detail);
    console.log(detail);
    
    return(
            <>
        <div className={style.container}>
            <img src={detail?.img} alt="bandera del país" className={style.img} />
            <h2 className={style.h2}>Nombre: {detail?.name}</h2>
            <h2 className={style.h2}>Capital: {detail?.capital}</h2>
            <h2 className={style.h2}>Continente: {detail?.continente}</h2>
            <h2 className={style.h2}>Subregion: {detail?.subregion}</h2>
            <h2 className={style.h2}>Area: {detail?.area}</h2>
            <h2 className={style.h2}>Poblacion: {detail?.poblacion}</h2>
            </div>

        </>
    )
}

export default Card;