import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export class ProductItem extends Component {
	state = {
		imgUrl: '',
		isLoaded: false
	}

	static propTypes = {
		product: PropTypes.object.isRequired
	}
	componentDidMount() {
		console.log(this.props.product)
		this.setState({
			isLoaded : true
		})
		// const {kb_featured_image_src_large} = this.props.product;
		// const getImageUrl = axios.get(`/wp-json/v2/product/${kb_featured_image_src_large}`);
		// Promise.all([getImageUrl]).then(res => {
		// 	this.setState({
		// 		imgUrl: res[0],
		// 		isLoaded: true
		// 	});
		// });
	}

	render() {
		const{title} = this.props.product;
		const isLoaded = this.state;
		const imgUrl = this.props.product.kb_featured_image_src_large
		if(isLoaded) {
			return (
				<div>
					<div dangerouslySetInnerHTML={{__html: title.rendered}} />
					<img style={{width: '100%'}} src={imgUrl} alt="imgUrl" />
				</div>
			)
		}
		return null;
	}
}

export default ProductItem
