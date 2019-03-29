import React, { Component } from "react";
import CssModules from "react-css-modules";
import styles from "./Info.css";
import InfoDetails from "./InfoDetails/InfoDetails";

class VehicleInfo extends Component {
	render() {
		return (
			<div styleName="vehicleInfo">
				<img
					className="testImg"
					src={this.props.urls[0]}
					alt={this.props.vehicle.vehicle_str}
				/>
				<InfoDetails vehicle={this.props.vehicle} />
			</div>
		);
	}
}

export default CssModules(VehicleInfo, styles);
