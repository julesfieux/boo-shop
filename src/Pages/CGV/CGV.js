import React, { Component } from 'react'
import axios from 'axios';

export class CGV extends Component {
	state = {
		pages: [],
		isLoaded: false
	}
	componentDidMount() {
		axios.get('/wp-json/wp/v2/pages?per_page=1')
			.then((response) => {
				console.log(response)
				this.setState({
					CGV : response.data,
					isLoaded : true
				})
			})
			.catch(err => console.log(err));
	}

	render() {
		const { pages, isLoaded } = this.state;
		if(isLoaded)
		{
			return (
				<div>
					<div dangerouslySetInnerHTML={{__html: pages.title.rendered}} />
					<div dangerouslySetInnerHTML={{__html: pages.content.rendered}} />
				</div>
			)
		}
	}
}

export default CGV
