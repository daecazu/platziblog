import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './Menu'
import Usuarios from './usuarios/index'


const Tareas = () => <div>Tareas</div>

const App = () => (
	<BrowserRouter>
		<Menu/>
		<div  id="margen" >
			<Route exact path='/' component={Usuarios}/>
			<Route exact path='/tareas' component={Tareas}/>
		</div>
	</BrowserRouter>
);

export default App;