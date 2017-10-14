import React, { Component } from 'react';
import './App.css';
import './form.css';
import { Form, FormGroup, FormControl, Col, Grid, Row, ControlLabel, Checkbox, Button } from 'react-bootstrap';


class FormDiagnostic extends Component {
	render() {
		return (
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
								{this.}
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
							<FormControl componentClass="select" placeholder="select">
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
							<FormControl componentClass="select" placeholder="select">
								<option value="SI">SI</option>
								<option value="NO">NO</option>
							</FormControl>
						</Col>
					</FormGroup>

					<FormGroup>
						<Col smOffset={2} sm={10}>
							<Button type="submit">
								Diagnosticar
        			</Button>
						</Col>
					</FormGroup>
				</Form>
			</Grid>
		)
	}
}

export default FormDiagnostic;