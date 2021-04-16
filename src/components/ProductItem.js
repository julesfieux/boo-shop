import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export class ProductItem extends Component {
	state = {
		imgUrl: '',
		isLoaded: false
	}

	static propTypes = {
		product: PropTypes.object.isRequired
	}
	componentDidMount() {
		const {kb_featured_image_src_large} = this.props.product;
		const getImageUrl = axios.get(`/wp-json/v2/product/${kb_featured_image_src_large}`);
		Promise.all([getImageUrl]).then(res => {
			this.setState({
				imgUrl: res[0],
				isLoaded: true
			});
		});
	}

	render() {
		const{title, content} = this.props.product;
		const {imgUrl, isLoaded} = this.state;
		console.log(imgUrl)
		if(isLoaded) {
			return (
				<div>
					<div dangerouslySetInnerHTML={{__html: title.rendered}} />
					<img src={imgUrl} alt="imgUrl" />
					<div dangerouslySetInnerHTML={{__html: content.rendered}} />
				</div>
			)
		}
		return null;
	}
}

export default ProductItem
