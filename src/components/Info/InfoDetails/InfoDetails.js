import React, { Component } from "react";
import CssModules from "react-css-modules";
import styles from "./InfoDetails.css";

class InfoDetails extends Component {
	render() {
		return (
			<div styleName="infoDetails">
				<section styleName="borderBottom">
					<div styleName="row">
						<h4 styleName="font-L">2015 Chevrolet</h4>
						<h3 styleName="font-XL">Cruze LS</h3>
						<div styleName="col-1-of-2">
							<p styleName="font-L primary-light">42,052 Mi.</p>
						</div>
						<div styleName="col-1-of-2">
							<a href="#" styleName="font-S grey-dark-3 uppercase">
								Vehicle features &rsaquo;
							</a>
						</div>
					</div>
				</section>

				<section styleName="borderBottom">
					<div styleName="row">
						<div styleName="col-1-of-2">
							<h3 styleName="font-L black">Exterior Color:</h3>
							<p styleName="font-M grey-dark">Glacier Silver Metalic</p>
						</div>
						<div styleName="col-1-of-2">
							<h3 styleName="font-L black">Interior Colors:</h3>
							<p styleName="font-M grey-dark">Black Onyx</p>
						</div>
					</div>
				</section>

				{/* Payment Options */}
				<section styleName="borderBottom">
					<div styleName="row">
						<div styleName="col-1-of-2">
							<h3 styleName="font-L black">Monthly Pymt.</h3>
							<p styleName="font-XXL primary-dark">$270</p>
						</div>
						<div styleName="col-1-of-2">
							<h3 styleName="font-L black">Start Pymt.</h3>
							<p styleName="font-XXL grey-dark-3">$500</p>
						</div>
					</div>
				</section>

				{/* Alternative */}
				<section styleName="borderBottom">
					<div styleName="row">
						<div styleName="col-1-of-2">
							<h3 styleName="font-M grey-dark">Monthly Pymt.</h3>
							<p styleName="font-XL grey-dark-2">$390</p>
						</div>
						<div styleName="col-1-of-2">
							<h3 styleName="font-M grey-dark">Down Pymt.</h3>
							<p styleName="font-XL grey-dark-2">$800</p>
						</div>
					</div>
					<a href="#" styleName="font-S black uppercase">
						Learn more &rsaquo;
					</a>
				</section>
			</div>
		);
	}
}

const options = { allowMultiple: true };
export default CssModules(InfoDetails, styles, options);
