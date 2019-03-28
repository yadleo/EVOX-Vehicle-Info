import React, { Component } from "react";
import CssModules from "react-css-modules";
import styles from "./App.css";
// Components
import Info from "./Info/Info";

class App extends Component {
	// state = {
	// 	data: {},
	// 	product: {
	// 		vifnum: 10155,
	// 		product_id: 2,
	// 		product_type_id: 41
	// 	}
	// };

	// Get one product for a vehicle based on product type ID
	// requestVehicleData = async (url = '', data = {}) => {
	// 	const data = await fetch(url, {
	// 		method: 'GET',
	// 		headers: {
	// 			'x-api-key':
	// 		}
	// 	})
	// };
	render() {
		// console.log("dotenv:", process.env.REACT_APP_ROOT_URL);
		return (
			<div styleName="app">
				<Info />
			</div>
		);
	}
}

export default CssModules(App, styles);
