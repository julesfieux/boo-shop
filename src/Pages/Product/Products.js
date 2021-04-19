import React, { Component } from 'react'
import axios from 'axios';
import ProductItem from './ProductItem';


export class Products extends Component {
	state = {
		products: [],
		isLoaded: false
	}

	componentDidMount() {
		axios.get('/wp-json/wc/v3/products?consumer_key=ck_acd4c92536a33dc7c7198a543cfcc6c5713c86d4&consumer_secret=cs_e3acd37c16749e23f1e29a36d3179dfb5aa0d8c0&per_page=100')
			.then((response) => {
				console.log("products =", response)
				this.setState({
					products : response.data,
					isLoaded : true
				})
			})
			.catch(err => console.log(err));
	}

	render() {
		const { products, isLoaded } = this.state;
		if(isLoaded) {
			return (
				<div>
						{ products.map(product => (
							<ProductItem key={product.id} product={product} />
						)) }
				</div>
			)
		}
		return <h3>Loading...</h3>
	}
}

export default Products
