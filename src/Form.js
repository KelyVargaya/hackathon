import React, { Component } from 'react';
import './App.css';
import './form.css';
import { Form, FormGroup, FormControl, Col, Grid, Row, ControlLabel, Button, Radio } from 'react-bootstrap';
import Result from './result.js';
import { Form, FormGroup, FormControl, Col, Grid, Row, ControlLabel, Button, Radio} from 'react-bootstrap';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'
class FormDiagnostic extends Component {
	constructor(props) {
		super(props);
		this.state = {
			validar: false,
			checkForm: false
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
				checkForm: model.info.name && model.info.age && model.info.pesoAdecuado && model.info.prematuro && model.info.hemoglobina && model.info.weight && model.info.departamento
			});
		}
		return (
			<div>
				 <header className="encabezado">
					<div className="btnVolver">
		 				 <NavLink to="/home">
							<i className="material-icons volver">keyboard_arrow_left</i>
		 				 </NavLink>
					</div>
                 <h1>Resultado</h1>
            </header>
			<Grid>
				<Form horizontal>
					<FormGroup controlId="formName">
						<Col componentClass={ControlLabel} sm={2}> Nombre </Col>
						<Col sm={10}>
							<FormControl type="text" placeholder="Nombre del infante" onChange={e => {
								model.info.name = e.target.value
								check();
							}} />
						</Col>
					</FormGroup>

					<FormGroup controlId="formAge" validationState={this.state.validar && !model.diagnost ? 'error' : null}>
						<Col sm={4}>
							<ControlLabel>Edad</ControlLabel>
						</Col>
						<Col sm={4}>
							<FormControl type='number' placeholder='Ingrese la edad del infante'
								onChange={e => {
									model.info.age = parseInt(e.target.value)
									check();
								}} />
						</Col>
						<Col sm={4}>
							<FormControl componentClass="select" placeholder="select" onChange={e => model.info.ageType = e.target.value}>
								<option value="semanas">semanas</option>
								<option value="meses">meses</option>
								<option value='años'>años</option>
							</FormControl>
						</Col>
					</FormGroup>

					<FormGroup controlId="formWeight" >
						<Col componentClass={ControlLabel} sm={5}> Peso </Col>
						<Col sm={6}>
							<FormControl type="number" placeholder="Peso" onChange={e => {
								model.info.weight = parseFloat(e.target.value)
								check();
							}} /> Kg
						</Col>
					</FormGroup>

					<FormGroup controlId="formHb" >
						<Col componentClass={ControlLabel} sm={5}> Hb	</Col>
						<Col sm={6}>
							<FormControl type='number' onChange={e => {
								model.info.hemoglobina = parseFloat(e.target.value)
								check();
							}} />
						</Col> gr/dl
					</FormGroup>
					<FormGroup controlId="formDepartment" >
						<Col sm={4}>
							<ControlLabel>Procedencia</ControlLabel>
						</Col>
						<Col sm={4}>
							<FormControl componentClass="select" placeholder="select" onChange={e => {
								model.info.departamento = e.target.value
								check();
							}}>
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

					<FormGroup controlId='formWeightBorn' >
						<Col sm={6}>
							<ControlLabel>¿Su peso fue adecuado al nacer?</ControlLabel>
						</Col>
						<Col sm={6}>
							<Radio name='radioGroup1' value='SI' inline onClick={pesoA}>SI</Radio>
							<Radio name='radioGroup1' value='NO' inline onClick={pesoA}>NO</Radio>
						</Col>
					</FormGroup>

					<FormGroup controlId='formTimeBorn' >
						<Col sm={6}>
							<ControlLabel>¿Su naciemiento fue prematuro?</ControlLabel>
						</Col>
						<Col sm={6}>
							<Radio name='radioGroup2' value='SI' inline onClick={prem}>SI</Radio>
							<Radio name='radioGroup2' value='NO' inline onClick={prem}>NO</Radio>
						</Col>
					</FormGroup>

					<FormGroup>
						<Col smOffset={2} sm={10}>
							<Button type="submit"
								disabled={!this.state.checkForm}
								onClick={(event) => {
									event.preventDefault()
									model.getInfo()
									this.setState({
										validar: true
									})
								}} >
								Diagnosticar
						</Button>
							<Radio name='radioGroup' value='SI' inline>SI</Radio>
							<Radio name='radioGroup' value='NO' inline>NO</Radio>
						</Col>
					</FormGroup>
				/*
					<FormGroup >
						<Col smOffset={2} sm={10}>
							<NavLink className="btn btn-lg btn-block" to={"/result"}>
								Diagnosticar
        			</NavLink>
						</Col>
					</FormGroup>
					*/
				</Form>
			</Grid>
		</div>
		)
	}
}

export default FormDiagnostic;