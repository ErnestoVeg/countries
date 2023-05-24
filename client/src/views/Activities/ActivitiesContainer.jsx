import { useSelector } from "react-redux";

const ActivitiesContainer = () =>{

    const actividades = useSelector(state => state.actividades)

    return(
            <div>
            <ul>
            {actividades.length &&
                actividades.map((actividad)=>{
                    return <><h2 key={actividad.id}>{actividad.nombre}</h2>
                                <h3>{`ten en cuenta que es una actividad con dificultad nivel ${actividad.dificultad}`}</h3>
                                <h3>{`tendrás que disponer de aproximadamente ${actividad.duracion} horas`}</h3>
                                <h3>{`la más recomendado es realizarla en  ${actividad.temporada}`}</h3>
                                </>})}

            </ul>
            </div>
    )}

    export default ActivitiesContainer;