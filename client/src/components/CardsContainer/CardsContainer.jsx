import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import style from "./CardsContainter.module.css";
import Paginado from "../Paginado/Paginado";
import { filterByContinent, orderByPoblacion, orderAlphabetically, filterByActivity, getCountries } from "../../redux/actions";

const CardsContainer = () =>{
   
    const actividades = useSelector(state=>state.actividades);
    console.log(actividades)
	const paises = useSelector(state=>state.paises);
    const dispatch = useDispatch();
    
    
    const [orden, setOrden] = useState('');
    const [paginaActual, setPaginaActual]  = useState(1);
    const [paisesPagina, setPaisesPagina] = useState(10);
    const indexLastPais = paginaActual * paisesPagina;
    const indexPrimerPais = indexLastPais - paisesPagina;
    const paisesPActual = paises.slice(indexPrimerPais, indexLastPais);

    
    const paginado = (numeroPagina) =>{
        setPaginaActual(numeroPagina);
    }

    function handleFilterContinent(event){
        dispatch(filterByContinent(event.target.value))
        setPaginaActual(1);
    }
    function handleFilterActivities(event){
        if(event.target.value !== "Actividades"){
        dispatch(filterByActivity(event.target.value));
        setPaginaActual(1);}
        else{ dispatch(getCountries());
                setPaginaActual(1);}
    }

    function handleSortPob(event){
        dispatch(orderByPoblacion(event.target.value));
        setPaginaActual(1);
        setOrden(`Ordenado ${event.target.value}`);
    
    }
    function handleSortAlp(event){
        dispatch(orderAlphabetically(event.target.value));
        setPaginaActual(1);
        setOrden(`Ordenado ${event.target.value}`);
    }

return(
        <div className={style.container} >
        <nav className={style.containerFilter}>
    {/* <span className={style.orden}>Ordenamiento:</span> */}

<select className={style.select} onChange={(e)=>handleFilterContinent(e)}>
    <option key= "1" value="" >Continente</option>
    <option key= "2" value="South America" >South America</option>
    <option key= "3" value="North America" >North America</option>
    <option key= "4" value="Antarctica" >Antarctica</option>
    <option key= "5" value="Europe" >Europe</option>
    <option key= "6" value="Oceania" >Oceania</option>
    <option key= "7" value="Asia" >Asia</option>
    <option key= "8" value="Africa" >Africa</option>
</select>

<select className={style.select} 
onChange={(e)=>handleFilterActivities(e)}
 >
            <option value="Actividades" >Actividades</option>
              {actividades.map(actividad=>{
                    console.log(actividad.nombre)
                return <option value={actividad.nombre} key={actividad.id}>{actividad.nombre}</option>
                })}
</select>

<select className={style.select} onChange={(event)=>handleSortAlp(event)}>
    <option key="1" value="">Alfabético</option>
    <option key="2" value="asc">A-Z</option>
    <option key="3" value="desc">Z-A</option>
</select>


<select className={style.select} onChange={(event)=>handleSortPob(event)}>
    <option value="">Población</option>
    <option value="asc">Ascendente</option>
    <option value="desc">Descendente</option>
</select>
            </nav>
        <div className={style.containerTarjetas}>
        {paisesPActual.map(pais=>{
            return <Card
            key={pais.id}
            id={pais.id}
            name={pais.name}
            continente={pais.continente}
            img={pais.img}
            />
        })}
        </div>
        <div className={style.containerPaginado}>
        <Paginado
        paisesPagina={paisesPagina}
        paises={paises.length}
        paginado={paginado}
        
        className={style.paginado}/>
        </div>
        </div>
    )
}
export default CardsContainer;