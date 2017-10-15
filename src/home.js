import React, {Component} from 'react';
import './home.css';
import {
	NavLink
} from 'react-router-dom'

import logo from './img/logo2.png'
import fondo from './img/fondoo.jpg'

const Home = () => {

	return( 
    <section className="home">
               <div className="container">
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<img className= "logo img-responsive" src={logo} alt=""/></div>

				</div>
			</div>

              <div className="container btn-login">
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-6">
                        <a to="/about" className="btn btn-lg btn-block login" role="button">Mostrar Mapa</a>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-6">
                    <div>
                    <NavLink to={"/form"}
                             className="btn btn-lg btn-block"
                    >
                        Entrar
                    </NavLink>
                    </div>
                </div>
                </div>
</div>
                    
                      
                   
       

    </section>
    );
}

export default Home;