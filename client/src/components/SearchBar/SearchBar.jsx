import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getCountryByName, getCountries } from "../../redux/actions";
import style from "./SearchBar.module.css";


export default function SearchBar (){


    const [nombrePais, setNombrePais ] = useState('');
    const dispatch = useDispatch();
    const paises = useSelector(state=>state.paisesAll);
    console.log(paises)
    // const nombresPaises = paises.map(pais=> pais.name);

    const onInputChange = (evento) =>{
        setNombrePais(evento.target.value);
        }
    const onSubmit = (evento) =>{
        evento.preventDefault();
        if(nombrePais.length === 0) return alert("Introduzca un país para buscar");
        
        dispatch(getCountryByName(nombrePais))
        setNombrePais('');
        // alert("No conocemos ese país");       
    }

    
    

    return(<div>
                <form className={style.form} onSubmit={(e)=>{onSubmit(e)}}>
                <input className={style.form__input} type="text" placeholder="Busque un país" onChange={onInputChange} value={nombrePais}/>
                <input className={style.form__button} type="submit" value="Buscar" />
                </form>
        </div>
    )
}