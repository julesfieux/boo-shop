import React, {Fragment} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Products from './Pages/Product/Products';
import ProductSheet from './Pages/Product/ProductSheet';


const App = () => (
	<Router>
		<Fragment>
			<Route exact path="/products" component={Products} />
			<Route path="/products/:id" component={ProductSheet} />
    	</Fragment>
	</Router>
)

export default App;
