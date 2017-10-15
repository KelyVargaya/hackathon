import React, {Component} from 'react';
import './result.css';
import {
	NavLink
} from 'react-router-dom'

const Result = () => {

	return(
    <section className="resultado">
             <header className="encabezado">
                 <div className="btnVolver">
		 				 <NavLink to="/form">
							<i className="material-icons volver">keyboard_arrow_left</i>
		 				 </NavLink>
					</div>
                 <h1>Resultado</h1>
            </header>
               <div className="row">
                   <div className="col-md-12 col-sm-12 col-xs-12 text-center contenido">
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