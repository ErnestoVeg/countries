import { useEffect, useState } from "react";
// import axios from "axios";
import { useDispatch, useSelector,  } from "react-redux";
import style from "./Form.module.css";
import { getCountries, createActivity} from "../../redux/actions";
import { useHistory } from "react-router-dom";

// import { useEffect } from "react";
// import 

const Form = () =>{

    
    const history = useHistory();
    const paisesST = useSelector(state=>state.paises)
    const dispatch = useDispatch();

    
    useEffect(()=>{
        dispatch(getCountries());
    },[dispatch])

        

    const [form, setForm ]= useState({
        nombre:"",
        dificultad:"",
        duracion:"",
        temporada:"",
        countries:[],
    })
    
    const [errors, setErrors ]= useState({
        nombre:"",
        dificultad:"",
        duracion:"",
        temporada:"",
        countries:[],
    })

    const changeHandler = (event) =>{
        const property = event.target.name;
        const value = event.target.value;
        // validate({...form, 
        //     [property]: value});

        setForm({...form, 
                [property]: value})

    };
    
    const submitHandler = (event) =>{
            event.preventDefault();
            const {nombre, dificultad, duracion, temporada, countries} = form;
            if(!nombre.length || !dificultad || !duracion || !temporada || !countries.length){
                alert("Debe completar todos los campos")
            }else{
            console.log(form);
            console.log(form.countries)
            dispatch(createActivity(form))
            alert("Actividad creada con éxito");
            setForm({
                nombre:"",
                dificultad:"",
                duracion:"",
                temporada:"",
                countries:[],
            })
            history.push("/home");
    }}

    const dificultadesM = (a) => {
        switch(a){
            case "1": return "1, para todo público";
            case "2": return "2, moderada";
            case "3": return "3, normal";
            case "4": return "4, dificultad alta";
            case "5": return "5, bajo tu propio riesgo";
            default: return "";

        }
    }

    const paisesHandler = (event) =>{
        if(form.countries.includes(event.target.value)){
            setErrors({...errors, countries: "País ya seleccionado"})
        }else{
        setForm({...form, countries:[...form.countries, event.target.value]})
        setErrors({...errors, countries:""})
        console.log(event.target.value)
    }}

    const deleteCountries = (event) =>{
        event.preventDefault();
        setForm({...form, countries:[]
        })
    }
    
    const deleteForm = () =>{
        setForm({
            nombre:"",
            dificultad:"",
            duracion:"",
            temporada:"",
            countries:[],
        })
        setErrors({
            nombre:"",
            dificultad:"",
            duracion:"",
            temporada:"",
            countries:[],
        })
    }


    
    return(
        <form onSubmit={submitHandler} className={style.container}>
            <div className={style.label}>
            <label >Nombre: </label>
            <input className={style.input} name="nombre" type="text" value={form.nombre} onChange={changeHandler}/>
            {/* {errors.nombre && <span>{errors.nombre}</span>} */}
            </div>
            

            
            <div className={style.label}>
            <label >Duración: </label>
            <input name="duracion" type="range" min="1" max="12" value={form.duracion} onChange={changeHandler}/>
            {form.duracion && <><br/><label>{form.duracion}:00 horas</label></>}
            <input name="duracion" type="text" value={form.duracion} onChange={changeHandler}/>
            </div>

            <div  className={style.label}>
            <label>Dificultad: </label>
            <input name="dificultad" type="range" min="1" max="5" value={form.dificultad} onChange={changeHandler}/>
            {errors.dificultad && <span>{errors.dificultad}</span>}
            {form.dificultad && <><br/><label>{dificultadesM(form.dificultad)}</label></>}
            </div>

            <div>
            <label className={style.label}>Temporada: </label>
                <select className={style.select} name="temporada" value={form.temporada} onChange={(e)=>changeHandler(e)}>
                <option value="">Temporadas</option>
                <option value="Summer">Verano</option>
                <option value="Autumn">Otoño</option>
                <option value="Winter">Invierno</option>
                <option value="Spring">Primavera</option>
                </select>
                </div>


            <div className={style.label}>
            <label>Países: </label>
            <select  className={style.select} name="countries" onChange={(e)=>paisesHandler(e)}>
                <option value="">Elija país/es</option>
                {paisesST.map(pais=>{
                return <option value={pais.id} key={pais.id}>{pais.name}</option>
                })}
            </select>
            {errors.paises && <p>{errors.paises}</p>}
            </div>
            <button className={style.button1} type="reset" onClick={deleteCountries}>BORRAR PAISES</button>
            {form.countries.length &&
            <div>
                <ul>
                    {form.countries.map(pais=>{
                        return <li key={Math.random()}>{pais}</li>
                    })}</ul></div>}
            
            <button className={style.button} type="submit">CREAR</button>
            <button className={style.button} type="reset" onClick={deleteForm}>BORRAR TODO</button>
            {/* <Link to="/activities"><button className={style.button} type="reset">VER ACTIVIDADES</button></Link> */}
            
        </form>
    )
}

export default Form;