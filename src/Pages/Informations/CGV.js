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
				console.log("Reponse = " + response)
				this.setState({
					pages : response.data,
					isLoaded : true
				})
			})
			.catch(err => console.log(err));
	}

	render() {
		const { pages, isLoaded } = this.state;
		console.log("Pages = " + pages);
		if(isLoaded)
		{
			return (
			<div>
				<div dangerouslySetInnerHTML={{__html: pages[0].title.rendered}} />
				<div dangerouslySetInnerHTML={{__html: pages[0].content.rendered}} />
			</div>
			)
		}
		return <h3>Loading...</h3>
	}
}

export default CGV
