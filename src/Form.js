import React, { Component } from 'react';
import './App.css';
import './form.css';
import { Form, FormGroup, FormControl, Col, Grid, Row, ControlLabel, Checkbox, Button } from 'react-bootstrap';

const FormDiagnostic = ({model})=>{
	return (
		<Grid>
			<Form horizontal>
				<FormGroup controlId="formName">
					<Col componentClass={ControlLabel} sm={2}> Nombre </Col>
					<Col sm={10}>
						<FormControl type="text" placeholder="Nombre del infante" onChange={e=>model.info.name=e.target.value} />
					</Col>
				</FormGroup>

				<FormGroup controlId="formAge">
					<Col sm={4}>
						<ControlLabel>Edad</ControlLabel>
					</Col>
					<Col sm={4}>
						<FormControl type='number' placeholder='Ingrese la edad del infante' onChange={e=>model.info.age=parseInt(e.target.value)} />
					</Col>
					<Col sm={4}>
						<FormControl componentClass="select" placeholder="select" onChange={e=>model.info.ageType=e.target.value}>
							<option value="semanas">semanas</option>
							<option value="meses">meses</option>
							<option value='años'>años</option>
						</FormControl>
					</Col>
				</FormGroup>

				<FormGroup controlId="formWeight">
					<Col componentClass={ControlLabel} sm={5}> Peso </Col>
					<Col sm={6}>
						<FormControl type="number" placeholder="Peso" onChange={e=>model.info.weight=e.target.value}/> Kg
					</Col>
				</FormGroup>

				<FormGroup controlId="formHb">
					<Col componentClass={ControlLabel} sm={5}> Hb	</Col>
					<Col sm={6}>
						<FormControl type='number' onChange={e=>model.info.hemoglobina=parseFloat(e.target.value)}/>
					</Col> gr/dl
				</FormGroup>

				<FormGroup controlId="formDepartment">
					<Col sm={4}>
						<ControlLabel>Procedencia</ControlLabel>
					</Col>
					<Col sm={4}>
						<FormControl componentClass="select" placeholder="select" onChange={e=>model.info.departamento=e.target.value}>
							<option value="Ancash">Ancash</option>
							<option value="Apurimac">Apurimac</option>
							<option value='Amazonas'>Amazonas</option>
						</FormControl>
					</Col>
					<Col sm={4}>
						<FormControl componentClass="select" placeholder="select">
							
							<option value="semanas">semanas</option>
							<option value="meses">meses</option>
							<option value='años'>años</option>
						</FormControl>
					</Col>
				</FormGroup>

				<FormGroup controlId='formWeightBorn'>
					<Col sm={6}>
						<ControlLabel>¿Su peso fue adecuado al nacer?</ControlLabel>
					</Col>
					<Col sm={6}>
						<FormControl componentClass="select" placeholder="select" onChange={e=>model.info.pesoAdecuado=e.target.value}>
							<option value="SI">SI</option>
							<option value="NO">NO</option>
						</FormControl>
					</Col>
				</FormGroup>

				<FormGroup controlId='formTimeBorn'>
					<Col sm={6}>
						<ControlLabel>¿Su naciemiento fue prematuro?</ControlLabel>
					</Col>
					<Col sm={6}>
						<FormControl componentClass="select" placeholder="select" onChange={e=>model.info.prematuro=e.target.value}>
							<option value="SI">SI</option>
							<option value="NO">NO</option>
						</FormControl>
					</Col>
				</FormGroup>

				<FormGroup>
					<Col smOffset={2} sm={10}>
						<Button type="submit" onClick={(event)=>{
							event.preventDefault()
							model.getInfo()
							}}>
							Diagnosticar
				</Button>
					</Col>
				</FormGroup>
			</Form>
		</Grid>
	)
}

export default FormDiagnostic;