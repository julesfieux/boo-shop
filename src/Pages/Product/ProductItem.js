import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export class ProductItem extends Component {
	state = {
		imgUrl: ''
	}

	static propTypes = {
		product: PropTypes.object.isRequired
	}

	render() {
		const{name, id, price_html} = this.props.product;
		const imgUrl = this.props.product.images[0].src;
		return (
			<div>
				<button>
					<Link to={`/products/${id}`}>
						<img style={{width: '100%'}} src={imgUrl} alt="imgUrl" />
					</Link>
				</button>
				<button>
					<Link to={`/products/${id}`}>
						<div dangerouslySetInnerHTML={{__html: name}} />
						<div dangerouslySetInnerHTML={{__html: price_html}} />
					</Link>
				</button>
				<button>
					<Link to={`/products/${id}`}>
						+ CHOIX DES OPTIONS
					</Link>
				</button>
			</div>
		)
	}
}

export default ProductItem
