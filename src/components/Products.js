import React, { Component } from 'react'
import axios from 'axios';
import ProductItem from './ProductItem';


export class Products extends Component {
	state = {
		products: [],
		isLoaded: false
	}

	componentDidMount() {
		axios.get('/wp-json/wp/v2/product?per_page=100')
			.then(res => this.setState({
				products: res.data,
				isLoaded: true
			}))
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
