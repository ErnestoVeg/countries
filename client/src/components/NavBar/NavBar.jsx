import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
const NavBar = ()=>{
    return(
        <div className={style.mainContainer}>
            <Link className={style.links} to="/home">HOME</Link>
            <Link className={style.links} to="/create">TURISMO</Link>
            <SearchBar className={style.searchBar}/>
        </div>
    )
}

export default NavBar;