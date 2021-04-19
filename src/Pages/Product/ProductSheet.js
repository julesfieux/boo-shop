import React, { Component } from 'react'
import axios from 'axios';

export class ProductSheet extends Component {
	state = {
		product: [],
		isLoaded: false
	}

	componentDidMount() {
		const Url = window.location.pathname;
		console.log('Url =', Url);
		axios.get(`/wp-json/wc/v3/${Url}?consumer_key=ck_acd4c92536a33dc7c7198a543cfcc6c5713c86d4&consumer_secret=cs_e3acd37c16749e23f1e29a36d3179dfb5aa0d8c0`)
			.then((response) => {
				this.setState({
					product : response.data,
					isLoaded : true
				})
			})
			.catch(err => console.log(err));
	}

	render() {
		const {isLoaded} = this.state;
		const { name, description, dimensions, weight, categories, images, attributes, price_html } = this.state.product;
		if(isLoaded) {
			console.log("ATTRIBUTES = " + attributes.map(oui => console.log("OUI = " + oui.options)));
			return (
				<div>
					<img style={{width: '100%'}} src={images[0].src} alt="productImg" />
					{images.map(image => 
						<img alt='Naruto' key={image.id} src={image.src} />
					)}
					<div dangerouslySetInnerHTML={{__html: name}} />
					<div dangerouslySetInnerHTML={{__html: price_html}} />

					<button>
						AJOUTER AU PANIER
					</button>
					<button>DESCRIPTION</button>
					<div dangerouslySetInnerHTML={{__html: description}} />
					<button>INFORMATIONS COMPLÉMENTAIRES</button>
					<h2>Poids {weight}</h2>
					<h2>Dimensions {dimensions.length}x{dimensions.width}x{dimensions.height}</h2>
					<button>AVIS</button>
				</div>
			)
		}
		return <h3>Loading...</h3>
	}
}

export default ProductSheet
