import React, { Component } from 'react';
import './App.css';
import './form.css';
import { Form, FormGroup, FormControl, Col, Grid, Row, ControlLabel, Button, Radio } from 'react-bootstrap';
import Result from './result.js';
<<<<<<< HEAD
=======
import logo from './img/logo.png'
import { Form, FormGroup, FormControl, Col, Grid, Row, ControlLabel, Button, Radio} from 'react-bootstrap';
>>>>>>> 9ccf5e99c12cbb2de473d988196ef3edd6c85c64
import {
	NavLink
} from 'react-router-dom'
import Provincias from './provincias.js';

class FormDiagnostic extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checkForm: false,
			error: false,
			dep: null
		}
	}
	render() {
		const { model } = this.props;
		const pesoA = (e) => {
			model.info.pesoAdecuado = e.target.value;
			check();
		}
		const prem = (e) => {
			model.info.prematuro = e.target.value;
			check();
		}
		const check = () => {
			this.setState({
				checkForm: model.info.name && model.info.age && model.info.pesoAdecuado && model.info.prematuro && model.info.hemoglobina && model.info.weight && model.info.altura
			});
		}
		const findError = () => {
			switch (model.info.ageType) {
				case 'años':
					this.setState({
						error: model.info.age > 5
					})
					break;
				case 'meses':
					this.setState({
						error: model.info.age > 60
					})
					break;
			}
		}
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
				<header className="encabezado">
					<div className="btnVolver">
						<NavLink to="/home">
							<i className="material-icons volver">keyboard_arrow_left</i>
						</NavLink>
					</div>
					<h1>Resultado</h1>
				</header>
				<div className="formulario">
				<Grid>
					<Form horizontal>
						<FormGroup controlId="formName">
							<Col md={2} sm={2} xs={2}>
								<ControlLabel className='label'>Nombre</ControlLabel>
							</Col>
							<Col md={10} sm={10} xs={10}>
								<FormControl type="text" placeholder="Nombre del infante" onChange={e => {
									model.info.name = e.target.value
									check();
									findError();
								}} />
							</Col>
						</FormGroup>

						<FormGroup controlId="formAge" validationState={this.state.error ? 'error' : null}>
							<Col md={2} sm={2} xs={2}>
								<ControlLabel className='label'>Edad</ControlLabel>
							</Col>
							<Col md={5} sm={5} xs={5}>
								<FormControl type='number' placeholder='Ingrese la edad del infante'
									onChange={e => {
										model.info.age = parseInt(e.target.value)
										check();
									}} />
							</Col>
							<Col md={5} sm={5} xs={5}>
								<FormControl componentClass="select" placeholder="select"
									disabled={!model.info.age}
									onChange={e => {
										model.info.ageType = e.target.value
										findError();
									}}>
									<option value="semanas">semanas</option>
									<option value="meses">meses</option>
									<option value='años'>años</option>
								</FormControl>
							</Col>
						</FormGroup>
						{this.state.error && <p className='error'>* Edad máxima: 5 años(60 meses)</p>}

						<FormGroup controlId="formWeight" >
							<Col sm={2} md={2} xs={2}>
								<ControlLabel className='label'>Peso</ControlLabel>
							</Col>
							<Col sm={9} md={9} xs={9}>
								<FormControl type="number" placeholder="Peso" onChange={e => {
									model.info.weight = parseFloat(e.target.value)
									check();
								}} />
							</Col>
							<Col sm={1} md={1} xs={1}>
								<p className='label'>Kg</p>
							</Col>
						</FormGroup>

						<FormGroup controlId="formHb" >
							<Col md={2} sm={2} xs={2}>
								<ControlLabel className='label'>Hemoglobina</ControlLabel>
							</Col>
							<Col md={9} sm={9} xs={9}>
								<FormControl type='number' onChange={e => {
									model.info.hemoglobina = parseFloat(e.target.value)
									check();
								}} />
							</Col>
							<Col sm={1} md={1} xs={1}>
								<p className='label'>gr/dl</p>
							</Col>
						</FormGroup>
						<FormGroup controlId="formDepartment" >
							<Col sm={2} md={2} xs={2}>
								<ControlLabel className='label'>Procedencia</ControlLabel>
							</Col>
							<Col sm={5} md={5} xs={5}>
								<FormControl componentClass="select" placeholder="select" onChange={e => {
									this.setState({
										dep: e.target.value
									})
								}}>
								<option value="">Seleccione Departamento</option>
								{Provincias.map((a,index)=>{
									return <option key={index} value={index}>{a.departamento}</option>
								})}
		
								</FormControl>
							</Col>
							<Col sm={5} md={5} xs={5}>
								<FormControl componentClass="select" placeholder="select" 
								disabled={!this.state.dep}
								onChange={e => {
									model.info.altura = parseInt(e.target.value);
									console.log(model.info.altura)
									check();
								}}>
									<option value="">Seleccione Provincia</option>
									{this.state.dep && Provincias[this.state.dep].provincias.map((a,index)=>{
										return <option key={index} value={a.altura}>{a.provincias}</option>
									})}
								</FormControl>
							</Col>
						</FormGroup>

						<FormGroup controlId='formWeightBorn' >
							<Col sm={6} md={6} xs={6}>
								<ControlLabel>¿Su peso fue adecuado al nacer?</ControlLabel>
							</Col>
							<Col sm={6} md={6} xs={6}>
								<Radio name='radioGroup1' value='SI' inline onClick={pesoA}>SI</Radio>
								<Radio name='radioGroup1' value='NO' inline onClick={pesoA}>NO</Radio>
							</Col>
						</FormGroup>

						<FormGroup controlId='formTimeBorn' >
							<Col sm={6} md={6} xs={6}>
								<ControlLabel>¿Su naciemiento fue prematuro?</ControlLabel>
							</Col>
							<Col sm={6} md={6} xs={6}>
								<Radio name='radioGroup2' value='SI' inline onClick={prem}>SI</Radio>
								<Radio name='radioGroup2' value='NO' inline onClick={prem}>NO</Radio>
							</Col>
						</FormGroup>

						<FormGroup>
							<Col sm={12}>
								{this.state.checkForm && !this.state.error ?
									<NavLink className="btn btn-lg btn-block" to={"/result"}
										onClick={() => model.getInfo()}
									>
										Diagnosticar
									</NavLink>
									:
									<Button type="submit" bsSize="large"
										disabled={!this.state.checkForm}
										onClick={(event) => {
											event.preventDefault();
											model.getInfo();
										}} block>
										Diagnosticar
							</Button>
								}

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