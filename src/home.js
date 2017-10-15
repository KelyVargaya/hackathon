import React, {Component} from 'react';
import './home.css';
import {
	NavLink
} from 'react-router-dom'

import logo from './img/logo.png'
import fondo from './img/fondoo.jpg'
import responsive from './img/responsive.png'
import play from './img/play.png'

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
					        <a className="anchor" href="">¿Como Funciona?</a>
					        <button className="btn btn-default anchor">Ver Mapa</button>
                        </div>
			        </div>
			    </div>

                <div className="titulo col-md-12 col-sm-12 col-xs-12">
                    <h1>POR UN PERU SIN ANEMIA</h1>
                </div>

                <div className="row">
                    <div className="col-md-6 col-md-offset-3 text-center">
                        <NavLink to={"/form"}
                             className="btn text-center login-enviar">
                                Entrar
                        </NavLink>
                    </div>
                </div>
            </section>

            <section className="funcion">
                <div className="funcionalidad col-md-12 col-sm-12 col-xs-12 text-center ">
                       <p>¿CÓMO FUNCIONA?</p>
                    <h1> Acceder a Hacknemia es muy fácil.</h1>
                    <p>Puede acceder desde el consultorio o su movil. 
                        Desde su computador ingrese a www.hacknemia.com</p>
                        <img className="img-responsive responsive" src={responsive} alt=""/>
                        <div className="play">
                            <p>En su movil o tableta, descargue Hacknemia en la tienda de aplicaciones Google Play Store.</p>
                            <img  src={play}/>  
                        </div>
                        <div>
                            <p>capturas</p>
                        </div>
                </div>
             
            </section>
        </div>
    );
}

export default Home;