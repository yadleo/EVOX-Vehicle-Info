import React, { Component } from "react";
import "@babel/polyfill";
import CssModules from "react-css-modules";
import styles from "./App.css";
import { sampleData } from "../../sample_JSON_response";
// Components
import Info from "./Info/Info";
import ProductRequestForm from "./ProductRequestForm/ProductRequestForm";

class App extends Component {
	state = {
		data: sampleData,
		selectedProduct: {
			vifnum: 10155,
			product_id: 2,
			product_type_id: 41
		}
	};

	requestVehicleData = async (vifnum, product_id, product_type_id) => {
		const url = `${
			process.env.ROOT_URL
		}/vehicles/${vifnum}/products/${product_id}/${product_type_id}`;

		const data = await fetch(url, {
			method: "GET",
			headers: {
				"x-api-key": process.env.EVOX_API_KEY
			}
		})
			.then(res => res.json())
			.catch(err => console.log(err));
		if (data.status === "success") {
			this.setState({ data });
		} else {
			window.alert(data.message);
		}
	};

	componentDidMount() {
		const { vifnum, product_id, product_type_id } = this.state.selectedProduct;
		this.requestVehicleData(vifnum, product_id, product_type_id);
	}

	render() {
		return (
			<div styleName="app">
				<Info vehicle={this.state.data.vehicle} urls={this.state.data.urls} />
				<ProductRequestForm requestVehicleData={this.requestVehicleData} />
			</div>
		);
	}
}

export default CssModules(App, styles);
