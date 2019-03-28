import React, { Component } from "react";
import "@babel/polyfill";
import CssModules from "react-css-modules";
import styles from "./App.css";
// Components
import Info from "./Info/Info";

class App extends Component {
	state = {
		data: {},
		selectedProduct: {
			vifnum: 10155,
			product_id: 2,
			product_type_id: 41
		}
	};

	// Get one product for a vehicle based on product type ID
	requestVehicleData = async (vifnum, product_id, product_type_id) => {
		const url = `${
			process.env.ROOT_URL
		}/vehicles/${vifnum}/products/${product_id}/${product_type_id}`;

		const data = await fetch(url, {
			method: "GET",
			headers: {
				"x-api-key": process.env.EVOX_API_KEY
			}
		}).then(res => res.json());
		return data;
	};

	componentDidMount() {
		const { vifnum, product_id, product_type_id } = this.state.selectedProduct;
		this.requestVehicleData(vifnum, product_id, product_type_id)
			.then(data => this.setState({ data }))
			.catch(err => console.log(err));
	}

	render() {
		return (
			<div styleName="app">
				<Info />
			</div>
		);
	}
}

export default CssModules(App, styles);
