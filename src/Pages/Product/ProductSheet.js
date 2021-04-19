import React, { Component } from 'react'
import axios from 'axios';

export class ProductSheet extends Component {
	state = {
		product: [],
		reviews: [],
		id: '',
		isLoaded: false
	}

	async componentDidMount() {
		const Url = window.location.pathname;
		const response = await axios.get(`/wp-json/wc/v3/${Url}?consumer_key=ck_acd4c92536a33dc7c7198a543cfcc6c5713c86d4&consumer_secret=cs_e3acd37c16749e23f1e29a36d3179dfb5aa0d8c0`);
		this.setState({
			product : response.data,
			id : response.data.id,
		});
		const avis = await axios.get(`/wp-json/wc/v3/products/reviews?consumer_key=ck_acd4c92536a33dc7c7198a543cfcc6c5713c86d4&consumer_secret=cs_e3acd37c16749e23f1e29a36d3179dfb5aa0d8c0&product=${this.state.id}`)
		console.log("Avis + ", avis);
		this.setState({
			reviews : avis.data,
			isLoaded : true
		});
	}

	render() {
		const {isLoaded} = this.state;
		const { name, description, dimensions, weight, images, attributes, price_html } = this.state.product;
		
		if(isLoaded) {
			console.log("review = ", this.state.reviews);
			const nameAttributes = attributes[0].options;
			var widthAttribtes = 'No Name';
			if (attributes.length > 1)
				widthAttribtes = attributes[1].options;

			const attributes1 = attributes[0].name;
			var attributes2 = 'No Name';
			if (attributes.length > 1)
				attributes2 = attributes[1].name;

			return (
				<div>
					<img style={{width: '100%'}} src={images[0].src} alt="productImg" />
					{images.map(image => 
						<img alt='Naruto' key={image.id} src={image.src} />
					)}
					<div dangerouslySetInnerHTML={{__html: name}} />
					<div dangerouslySetInnerHTML={{__html: price_html}} />
					{attributes.length === 1 ?
						<div>
							<p> {attributes1 }</p>
							<select name="attributes" id="attributes">
								<option value="">Choisir une option</option>
								{nameAttributes.map(name => 
									<option key={name}>{name}</option>
								)}
							</select>
						</div>
						:
						<div>
							
							<p> {attributes1 }</p>
							<select name="attributes" id="attributes">
								<option value="">Choisir une option</option>
								{nameAttributes.map(name => 
									<option key={name}>{name}</option>
								)}
							</select>
							
								<p> {attributes2 }</p>
								<select name="attributes" id="attributes">
								<option value="">Choisir une option</option>
								{widthAttribtes.map(width => 
									<option key={width}>{width}</option>
								)}
								</select>
						</div>
					}
					<br/>
					<button>
						AJOUTER AU PANIER
					</button>
					<button>DESCRIPTION</button>
					<div dangerouslySetInnerHTML={{__html: description}} />
					<button>INFORMATIONS COMPLÉMENTAIRES</button>
					<h2>Poids {weight}</h2>
					<h2>Dimensions {dimensions.length}x{dimensions.width}x{dimensions.height}</h2>
					<button>AVIS</button>
					{this.state.reviews.map(review => {
						return (
							<div>
								<div>{review.reviewer}</div>
								<div>{review.date_created}</div>
								<div>{review.rating}</div>/5
								<div dangerouslySetInnerHTML={{__html: review.review}} />
							</div>
						)
					})}
				</div>
			)
		}
		return <h3>Loading...</h3>
	}
}

export default ProductSheet
