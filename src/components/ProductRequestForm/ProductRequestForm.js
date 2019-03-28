import React, { Component } from "react";
import CssModules from "react-css-modules";
import styles from "./ProductRequestForm.css";

class ProductRequestForm extends Component {
	state = {
		vifnum: "10155",
		product_id: 2,
		product_category: "Color",
		product_type_id: "41"
	};
	handleChange = e => {
		console.log("change");
		this.setState({ [e.target.name]: e.target.value });
	};
	handleSubmit = e => {
		e.preventDefault();
		const { vifnum, product_id, product_type_id } = this.state;
		this.props.requestVehicleData(vifnum, product_id, product_type_id);
	};
	render() {
		return (
			<form action="submit" onSubmit={this.handleSubmit}>
				<label htmlFor="vifnum">Enter a vif number:&nbsp;</label>
				<input
					type="number"
					name="vifnum"
					id="vifnum"
					placeholder="vif number goes here"
					min="0"
					required
					onChange={this.handleChange}
				/>

				<label htmlFor="product_type_id">Select a productType ID:&nbsp;</label>
				<select
					name="product_type_id"
					id="product_type_id"
					required
					onChange={this.handleChange}
				>
					<option value="">Please select a product ID</option>
					<option value="30">30</option>
					<option value="31">31</option>
					<option value="32">32</option>
					<option value="33">33</option>
					<option value="34">34</option>
					<option value="35">35</option>
					<option value="36">36</option>
					<option value="37">37</option>
					<option value="38">38</option>
					<option value="39">39</option>
					<option value="40">40</option>
					<option value="41">41</option>
					<option value="42">42</option>
					<option value="43">43</option>
					<option value="44">44</option>
					<option value="45">45</option>
					<option value="46">46</option>
					<option value="47">47</option>
					<option value="48">48</option>
					<option value="49">49</option>
					<option value="50">50</option>
				</select>
				<input type="submit" value="Submit" />
				<input type="reset" value="Reset" />
			</form>
		);
	}
}

export default CssModules(ProductRequestForm, styles);
