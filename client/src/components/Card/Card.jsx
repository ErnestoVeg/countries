import style from "./Card.module.css";
import { Link } from "react-router-dom";
const Card = (props) =>{
    return(
        <div className={style.container}>
            <img src={props.img} alt="bandera del país" className={style.img} />
            
            <p className={style.p}>País: <Link to={`/detail/${props.id}`}>{props.name}</Link></p>
            
            <p className={style.p}>Continente: {props.continente}</p>
            </div>

    )
}

export default Card;