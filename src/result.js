import React, { Component } from 'react';
import './result.css';
import './App.css'
import {
    NavLink
} from 'react-router-dom'
import logo from './img/logo.png'

const Result = ({ model }) => {
    const reiniciar = () => {
        Object.keys(model.info).filter(a => a != 'ageType').map(a => {
            if (a === 'ageType') {
                model.info[a] = 'semanas';
            } else {
                model.info[a] = '';
            }
        })
        console.log(model.info);
    }
    return (
        <div>
            <div className="container-fluid">
                <div className="row menu">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-left">
                        <img className="logo img-responsive" src={logo} alt="" />
                    </div>

                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 text-right buto" >
                        <a className="anchor" href="">¿Como Funciona?</a>
                        <a className="btn btn-default anchor"
                        href='http://tabfacil.com/temporal/www.hacknemia.com/?page=mapa'>
                            Ver Mapa
                        </a>
                    </div>
                </div>
            </div>
            <div className='fomulario' style={{marginTop:'140px'}}>
                <div >
                    <NavLink to="/form" style={{display:'flex', alignItems:'center', marginLeft:'20px'}} onClick={reiniciar}>
                        <i className="material-icons">keyboard_arrow_left</i>
                        <span>Return</span>
                    </NavLink>
                </div>
                <h1>Resultado</h1>
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
            </div>
        </div>
    );
}

export default Result;