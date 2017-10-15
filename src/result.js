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
            <div className="row form">
                <div className="col-md-12 col-sm-12 col-xs-12 text-center contenido">
                    <p>CANTIDAD DE HEMOGLOBINA</p>
                    <div className="img-circle circle"> <h2>{model.info.hemoglobina}</h2></div>

                    <div className="col-md-12 col-sm-12 col-xs-12 text-center tipo">
                        <h3>{model.diagnost[0]}</h3>
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12 text-center recomendaciones">
                        <div className="row">
                            {model.diagnost[1]}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Result;