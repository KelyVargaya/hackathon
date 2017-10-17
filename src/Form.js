import React, { Component } from 'react';
import './App.css';
import './form.css';
import './home.css';
import Result from './result.js';
import logo from './img/logo.png'
import { Form, FormGroup, InputGroup, FormControl, Col, Grid, Row, ControlLabel, Button, Radio, Nav, Navbar, NavItem } from 'react-bootstrap';
import {
	NavLink
} from 'react-router-dom'
import Provincias from './provincias.js';

class HeaderApp extends Component {
	render() {
		return (
			<Navbar className="menu">
				<Navbar.Header >
					<Navbar.Brand className="brand">
						<img className="img-responsive" src={logo} alt="" />
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight>
						<NavItem className="btnMapa" eventKey={1}><NavLink to="/home">¿Como Funciona?</NavLink></NavItem>
						<NavItem className="btnMapa" eventKey={2} href="#">Ver Mapa</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

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
				default:
					this.setState({
						error: !model.info.age
					})
					break;
			}
		}
		return (
			<div>
				<HeaderApp />

				<div>
					<NavLink to="/home" style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
						<i className="material-icons">keyboard_arrow_left</i>
						<span>Return</span>
					</NavLink>
					<Grid className="formulario">
						<Form horizontal>
							<FormGroup controlId="formName">
								<Col md={2} sm={2} >
									<ControlLabel className='label'>Nombre</ControlLabel>
								</Col>
								<Col md={10} sm={10} >
									<FormControl type="text" placeholder="Nombre del infante" onChange={e => {
										model.info.name = e.target.value
										check();
									}} />
								</Col>
							</FormGroup>

							<FormGroup controlId="formAge" validationState={this.state.error ? 'error' : null}>
								<Col md={2} sm={2} >
									<ControlLabel className='label'>Edad</ControlLabel>
								</Col>
								<Col md={5} sm={5} >
									<FormControl type='number' placeholder='Ingrese la edad del infante'
										onChange={e => {
											model.info.age = parseInt(e.target.value)
											check();
											findError();
										}} />
								</Col>
								<Col md={5} sm={5} >
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
								<Col sm={2} md={2} >
									<ControlLabel className='label'>Peso</ControlLabel>
								</Col>
								<Col sm={10} md={10} >
									<InputGroup>
										<FormControl type="number" placeholder="Peso" onChange={e => {
											model.info.weight = parseFloat(e.target.value)
											check();
										}} />
										<InputGroup.Addon>Kg</InputGroup.Addon>
									</InputGroup>

								</Col>

							</FormGroup>

							<FormGroup controlId="formHb" >
								<Col md={2} sm={2} >
									<ControlLabel className='label'>Hb</ControlLabel>
								</Col>
								<Col md={10} sm={10} >
									<InputGroup>
										<FormControl type='number' placeholder='Hemoglobina'
											onChange={e => {
												model.info.hemoglobina = parseFloat(e.target.value)
												check();
											}} />
										<InputGroup.Addon>gr/dl</InputGroup.Addon>
									</InputGroup>

								</Col>

							</FormGroup>
							<FormGroup controlId="formDepartment" >
								<Col sm={2} md={2} >
									<ControlLabel className='label'>Procedencia</ControlLabel>
								</Col>
								<Col sm={5} md={5} >
									<FormControl componentClass="select" placeholder="select" onChange={e => {
										this.setState({
											dep: e.target.value
										})
									}}>
										<option value="">Seleccione Departamento</option>
										{Provincias.map((a, index) => {
											return <option key={index} value={index}>{a.departamento}</option>
										})}

									</FormControl>
								</Col>
								<Col sm={5} md={5} >
									<FormControl componentClass="select" placeholder="select"
										disabled={!this.state.dep}
										onChange={e => {
											model.info.altura = parseInt(e.target.value);
											check();
										}}>
										<option value="">Seleccione Provincia</option>
										{this.state.dep && Provincias[this.state.dep].provincias.map((a, index) => {
											return <option key={index} value={a.altura}>{a.provincias}</option>
										})}
									</FormControl>
								</Col>
							</FormGroup>

							<FormGroup controlId='formWeightBorn' >
								<Col sm={6} md={6} >
									<ControlLabel>¿Su peso fue adecuado al nacer?</ControlLabel>
								</Col>
								<Col sm={6} md={6} >
									<Radio name='radioGroup1' value='SI' inline onClick={pesoA}>SI</Radio>
									<Radio name='radioGroup1' value='NO' inline onClick={pesoA}>NO</Radio>
								</Col>
							</FormGroup>

							<FormGroup controlId='formTimeBorn' >
								<Col sm={6} md={6} >
									<ControlLabel>¿Su naciemiento fue prematuro?</ControlLabel>
								</Col>
								<Col sm={6} md={6} >
									<Radio name='radioGroup2' value='SI' inline onClick={prem}>SI</Radio>
									<Radio name='radioGroup2' value='NO' inline onClick={prem}>NO</Radio>
								</Col>
							</FormGroup>

							<FormGroup>
								<div style={{ marginTop: '20px' }}>
									{this.state.checkForm && !this.state.error ?
										<NavLink className="btn btn-lg btn-block" to={"/result"}
											onClick={() => model.getInfo()}
											style={{backgroundColor:'#df2727', color:'white'}}
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
								</div>
							</FormGroup>
						</Form>
					</Grid>
				</div>
			</div>
		)
	}
}

export default FormDiagnostic;