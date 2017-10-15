import React, { Component } from 'react';
import './result.css';
import {
    NavLink
} from 'react-router-dom'

const Result = ({ model }) => {
    const reiniciar = ()=>{
        Object.keys(model.info).filter(a=>a!='ageType').map(a => {
            if(a==='ageType'){
                model.info[a]='semanas';
            } else {
                model.info[a]='';
            }
        })
        console.log(model.info);
    }
    return (
        <section className="resultado">
            <header className="encabezado">
                <div className="btnVolver">
                    <NavLink to="/form" onClick={reiniciar}>
                        <i className="material-icons volver">keyboard_arrow_left</i>
                    </NavLink>
                </div>
                <h1>Resultado</h1>
            </header>
            <div className="form">
                <div className="text-center contenido">
                    <p>CANTIDAD DE HEMOGLOBINA</p>
                    <div className="img-circle circle"> <h2>{model.diagnost[0]}</h2></div>

                    <div className=" text-center tipo">
                        <h3>{model.diagnost[1].toUpperCase()}</h3>
                    </div>
                    <div className="text-center">
                        <div className="receta">
                            <h2>Receta Medica</h2>
                            <p>{model.diagnost[2][0]}</p>
                            <p>{model.diagnost[2][1]}</p>
                            <p>{model.diagnost[2][2]}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Result;