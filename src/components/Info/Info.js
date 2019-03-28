import React, { Component } from "react";
import CssModules from "react-css-modules";
import styles from "./Info.css";

class VehicleInfo extends Component {
	render() {
		return (
			<div styleName="vehicleInfo">
				<img
					className="testImg"
					src="https://dbhdyzvm8lm25.cloudfront.net/color_0640_032_png/MY2015/10155/10155_cc0640_032_G1E.png"
					alt="test image"
				/>
			</div>
		);
	}
}

export default CssModules(VehicleInfo, styles);
