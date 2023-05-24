import { Link } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () =>{
    //         <h1>Esta es la vista del Landing</h1>
    //         <h2>vamos al <Link to="/home">home</Link>?</h2>
    return (
        <div className={style.landingPage}>
          <div className={style.landing__box}>
            <h1 className={style.landing__title_welcome}><b>El Mundo</b></h1>
            <h2 className={style.landing__title}>te espera</h2>
            <Link to = '/home'>
              <button className={style.landing__button}>Vamos</button>
            </Link>
          </div>
        </div>
      )
}

export default Landing;