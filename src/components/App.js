import React from 'react';

class App extends React.Component{
	constructor(){
		super();
		this.state = {
			usuarios :[
				{
					nombre: 'Rodolfo',
					correo: 'Rodolfo@platzi.com',
					enlace: 'Rodolfo.com'
				},
				{
					nombre: 'Daniel',
					correo: 'Daniel@platzi.com',
					enlace: 'Daniel.com'
				},

			]
		}	
	}

	componentDidMount(){
		console.log('hola');
	}

	ponerFilas = () => (
		this.state.usuarios.map((usuario)=>(
			<tr>
				<td>
					{usuario.nombre}
				</td>
				<td>
					{usuario.correo}
				</td>		
				<td>
					{usuario.enlace}
				</td>
			</tr>
		))
	);
	render(){

		return (
			<div className="margen">
				<table className="tabla">
					<thead>
						<tr>
							<th>
								Nombre
							</th>
							<th>
								Correo
							</th>
							<th>
								Enlace
							</th>
						</tr>
					</thead>
					<tbody>
						{ this.ponerFilas() }
					</tbody>
				</table>
			</div>
		)
	}
};

export default App;