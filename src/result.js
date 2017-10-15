import React, {Component} from 'react';
import './result.css';
import {
	NavLink
} from 'react-router-dom'
import logo from './img/logo.png'

const Result = () => {

	return(
    <section className="resultado">
              <div className="container-fluid">
			        <div className="row menu">
				        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-left">
					        <img className= "logo img-responsive" src={logo} alt=""/>
                        </div>
                
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 text-right buto" >
					        <a className="anchor" href="">¿Como Funciona?</a>
					        <button className="btn btn-default anchor">Ver Mapa</button>
                        </div>
			        </div>
			    </div>
               <div className="row">
                   <div className="col-md-12 col-sm-12 col-xs-12 text-center contenido">
                       <h1>Resultado</h1>
                      <p>CANTIDAD DE HEMOGLOBINA</p>

                      <div className="img-circle circle"> <h2>10</h2></div>

                    <div className="col-xs-6 col-xs-offset-3 tipo">
                       <h3>Tipo de Anemia: </h3> 
                       <p>LEVE</p>
                    </div>
                    
                    <div className="col-xs-6 col-xs-offset-3 recomendaciones">
                        <div className ="row">
                    <ul className="list-group">
                        <li className="list-group-item">Receta 1</li>
                        <li className="list-group-item">receta 2</li>
                        <li className="list-group-item">recera 3</li>

                    </ul>
                    </div>
                    </div>
                </div>
        </div>
    </section>
 );
}

export default Result;