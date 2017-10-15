import React, {Component} from 'react';
import './home.css';
import {
	NavLink
} from 'react-router-dom'

import logo from './img/logo.png'
import fondo from './img/fondoo.jpg'
import responsive from './img/responsive.png'
import play from './img/play.png'
import paso2 from './img/2.png'
import paso1 from './img/1.png'

const Home = () => {
	return( 
        <div>
            <section className="home">
               <div className="container-fluid">
			        <div className="row menu">
				        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-left">
					        <img className= "logo img-responsive" src={logo} alt=""/>
                        </div>
                
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 text-right buto" >
					        <a className="anchor" href="">¿Cómo Funciona?</a>
					        <button className="btn btn-default anchor">Ver Mapa</button>
                        </div>
			        </div>
			    </div>

                <div className="titulo col-md-12 col-sm-12 col-xs-12">
                    <h1>Diagnóstico fácil, rápido y preciso de la anemia </h1>
                </div>

                <div className="row">
                    <div className="col-md-6 col-md-offset-3 text-center">
                        <NavLink to={"/form"}
                             className="btn text-center login-enviar">
                                Iniciar
                        </NavLink>
                    </div>
                </div>
            </section>

            <section className="funcion">
                <div className="funcionalidad col-md-12 col-sm-12 col-xs-12 text-center ">
                       <p>¿CÓMO FUNCIONA?</p>
                    <h1> Acceder a Hacknemia es muy fácil.</h1>
                    <p>Puede hacerlo desde su consultorio o su movil. </p>
                        <img className="img-responsive responsive" src={responsive} alt=""/>
                        <div className="play">
                            <p>En su movil o tableta, descargue Hacknemia en la tienda de aplicaciones Google Play Store.</p>
                            <img  src={play}/>  
                        </div>
                        <div className="pasos">
                            <h1>Pasos a seguir</h1>
                            <p>Paso 1 : Llenar el fomulario con datos del Niño</p>
                            <img src={paso2} alt=""/><hr/><hr/>

                            <p>Paso 2 : De acuerdo a los datos ingresados te retornara el resultado y recomendaciones</p>
                            <img src={paso1} alt=""/>
                        </div>
                </div>
            </section>
         </div>
    
    );
}

export default Home;