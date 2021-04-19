import React, { Component } from 'react'
import CGV from './CGV';

export class Informations extends Component {
	state = {
		isLoaded: false
	}

	componentDidMount() {
		this.setState({
			isLoaded : true
		})
	}

	render() {
		const { isLoaded } = this.state;
		if(isLoaded)
		{
			return (
				<div>
					<CGV />
				</div>
			)
		}
		return <h3>Loading...</h3>
	}
}

export default Informations
