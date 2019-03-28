import React, { Component } from "react";
import CssModules from "react-css-modules";
import styles from "./App.css";
// Components
import Info from "./Info/Info";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {},
			product: {
				vifnum: 10155,
				product_id: 2,
				product_type_id: 41
			}
		};
		// this.requestVehicleData = this.requestVehicleData.bind(this);
	}

	/*
	// Get one product for a vehicle based on product type ID
	async requestVehicleData(vifnum, product_id, product_type_id) {
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
	}

	componentDidMount() {
		const { vifnum, product_id, product_type_id } = this.state.product;
		this.requestVehicleData(vifnum, product_id, product_type_id)
			.then(data => console.log(JSON.stringify(data)))
			.catch(err => console.log(err));
	}
*/
	render() {
		return (
			<div styleName="app">
				<Info />
			</div>
		);
	}
}

export default CssModules(App, styles);
