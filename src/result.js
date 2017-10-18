import React, { Component } from 'react';
import './result.css';
import './App.css'
import {
	NavLink
} from 'react-router-dom'
import logo from './img/logo.png'
import { Form, FormGroup, FormControl, Col, Grid, Row, ControlLabel, Button, Radio, Nav, Navbar, NavItem } from 'react-bootstrap';

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

const Result = ({ model }) => {
	const reiniciar = () => {
		Object.keys(model.info).filter(a => a != 'ageType').map(a => {
			if (a === 'ageType') {
				model.info[a] = 'semanas';
			} else {
				model.info[a] = '';
			}
		})
		/*	href='http://tabfacil.com/temporal/www.hacknemia.com/?page=mapa' */
	}
	const Diagnostic = () => {
		return (
			<Grid className='fomulario'>
				<h1 style={{ color: 'black', marginTop: '0' }} className='text-center '>Resultado</h1>
				<div className="form">
					<div className="text-center contenido">
						<p>CANTIDAD DE HEMOGLOBINA</p>
						<div className="img-circle circle"><h2>{model.diagnost[0]}</h2></div>
						<div className="text-center tipo"><h3>{model.diagnost[1].toUpperCase()}</h3></div>
						<div className="receta text-center">
							<h3 style={{ marginTop: '0' }}>Receta Médica</h3>
							<p>{model.diagnost[2][0]}</p>
							<p>{model.diagnost[2][1]}</p>
							<p>{model.diagnost[2][2]}</p>
						</div>
					</div>
				</div>
			</Grid>
		)
	}
	return (
		<div>
			<HeaderApp />
			<div>{Diagnostic()}</div>
		</div>
	);
}

export default Result;