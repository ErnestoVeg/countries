import React from "react";
import style from "./Paginado.module.css";

export default function Paginado ({paisesPagina, paises, paginado}){

    const numPaginas = [];
for(let i=0; i<=Math.ceil(paises/paisesPagina); i++){

       numPaginas.push(i+1);
    }
    numPaginas.pop();
return(
        <nav className={style.paginado}>
            <ul className={style.paginado_list}>
                {numPaginas &&
                numPaginas.map(num =>{
                    
                  return  <li className={style.button} key={num}>
                    <button onClick={()=>{paginado(num)}}>{num}</button>
                    </li>
                                })}
            </ul>
        </nav>
    )

}