import React, { Component } from 'react';
import './App.css';
import './form.css';
import Result from './result.js';
import logo from './img/logo.png'
import { Form, FormGroup, FormControl, Col, Grid, Row, ControlLabel, Button, Radio} from 'react-bootstrap';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'

class FormDiagnostic extends Component {
	render() {
		return (
			<div>
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
				<div className="formulario">
			<Grid>
				<Form horizontal>
					<FormGroup controlId="formName">
						<Col componentClass={ControlLabel} sm={2}> Nombre </Col>
						<Col sm={10}>
							<FormControl type="text" placeholder="Nombre del infante" />
						</Col>
					</FormGroup>

					<FormGroup controlId="formAge">
						<Col sm={4}>
							<ControlLabel>Edad</ControlLabel>
						</Col>
						<Col sm={4}>
							<FormControl type='number' placeholder='Ingrese la edad del infante' />
						</Col>
						<Col sm={4}>
							<FormControl componentClass="select" placeholder="select">
								<option value="semanas">semanas</option>
								<option value="meses">meses</option>
								<option value='años'>años</option>
							</FormControl>
						</Col>
					</FormGroup>

					<FormGroup controlId="formWeight">
						<Col componentClass={ControlLabel} sm={5}> Peso </Col>
						<Col sm={6}>
							<FormControl type="number" placeholder="Peso" /> Kg
						</Col>
					</FormGroup>

					<FormGroup controlId="formHb">
						<Col componentClass={ControlLabel} sm={5}> Hb	</Col>
						<Col sm={6}>
							<FormControl type='number' />
						</Col> gr/dl
					</FormGroup>

					<FormGroup controlId="formDepartment">
						<Col sm={4}>
							<ControlLabel>Procedencia</ControlLabel>
						</Col>
						<Col sm={4}>
							<FormControl componentClass="select" placeholder="select">
								<option value="Ancash">Ancash</option>
								<option value="Apurimac">Apurimac</option>
								<option value='Amazonas'>Amazonas</option>
							</FormControl>
						</Col>
						<Col sm={4}>
							<FormControl componentClass="select" placeholder="select">
								<option value="semanas">Ancash</option>
								<option value="meses">Apurimac</option>
								<option value='años'>Amazonas</option>
							</FormControl>
						</Col>
					</FormGroup>

					<FormGroup controlId='formWeightBorn'>
						<Col sm={6}>
							<ControlLabel>¿Su peso fue adecuado al nacer?</ControlLabel>
						</Col>
						<Col sm={6}>
							<Radio name='radioGroup' value='SI' inline>SI</Radio>
							<Radio name='radioGroup' value='NO' inline>NO</Radio>
						</Col>
					</FormGroup>

					<FormGroup controlId='formTimeBorn'>
						<Col sm={6}>
							<ControlLabel>¿Su naciemiento fue prematuro?</ControlLabel>
						</Col>
						<Col sm={6}>
							<Radio name='radioGroup' value='SI' inline>SI</Radio>
							<Radio name='radioGroup' value='NO' inline>NO</Radio>
						</Col>
					</FormGroup>

					<FormGroup >
						<Col smOffset={2} sm={10}>
							<NavLink className="btn btn-lg btn-block" to={"/result"}>
								Diagnosticar
        			</NavLink>
						</Col>
					</FormGroup>
				</Form>
			</Grid>
			</div>
		</div>
		)
	}
}

export default FormDiagnostic;