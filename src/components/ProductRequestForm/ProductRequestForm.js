import React, { Component } from "react";
import CssModules from "react-css-modules";
import styles from "./ProductRequestForm.css";

class ProductRequestForm extends Component {
	//state updates as the input fields changes
	// product_is defaults to 2 for COLOR category
	state = {
		vifnum: "10155",
		product_id: 2,
		product_category: "Color",
		product_type_id: "41"
	};

	handleInputChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		const { vifnum, product_id, product_type_id } = this.state;
		this.props.requestVehicleData(vifnum, product_id, product_type_id);
	};

	render() {
		return (
			<div styleName="formWrapper">
				<div styleName="formContainer">
					<div styleName="formHeader">Request a vehicle</div>
					<form action="submit" onSubmit={this.handleSubmit}>
						<label htmlFor="vifnum">
							<span>
								Enter a vif number:&nbsp;
								<span styleName="red">*</span>
							</span>
							<input
								type="number"
								name="vifnum"
								id="vifnum"
								styleName="inputField"
								placeholder="vif number goes here"
								min="0"
								required
								onChange={this.handleInputChange}
							/>
						</label>

						<label htmlFor="product_type_id">
							<span>
								Select a Product Type ID:&nbsp;
								<span styleName="red">*</span>
							</span>
							<select
								name="product_type_id"
								id="product_type_id"
								styleName="selectField"
								required
								onChange={this.handleInputChange}
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
						</label>
						<label htmlFor="buttons">
							<div styleName="buttons">
								<input type="submit" value="Submit" />
								<input type="reset" value="Reset" />
							</div>
						</label>
					</form>
				</div>
			</div>
		);
	}
}

export default CssModules(ProductRequestForm, styles);
