import React, { Component } from "react";
import CssModules from "react-css-modules";
import styles from "./InfoDetails.css";

class InfoDetails extends Component {
	render() {
		return (
			<div styleName="infoDetails">
				<section styleName="borderBottom marginBottom-M">
					<div styleName="row">
						<h4 styleName="font-M-Plus">2015 Chevrolet</h4>
						<h3 styleName="font-XL marginBottom-M">Cruze LS</h3>
						<div styleName="col-1-of-2">
							<p styleName="font-M-Plus marginBottom-M primary-light">
								42,052 Mi.
							</p>
						</div>
						<div styleName="col-1-of-2">
							<a href="#" styleName="font-M grey-dark-3 uppercase">
								Vehicle features &rsaquo;
							</a>
						</div>
					</div>
				</section>

				<section styleName="borderBottom marginBottom-XL">
					<div styleName="row">
						<div styleName="col-1-of-2">
							<h3 styleName="font-M-Plus marginBottom-S black">
								Exterior Color:
							</h3>
							<p styleName="font-M marginBottom-L grey-dark">
								Glacier Silver Metalic
							</p>
						</div>
						<div styleName="col-1-of-2">
							<h3 styleName="font-M-Plus marginBottom-S black">
								Interior Colors:
							</h3>
							<p styleName="font-M marginBottom-L grey-dark">Black Onyx</p>
						</div>
					</div>
				</section>

				{/* Payment Options */}
				<section styleName="borderBottom marginBottom-M">
					<div styleName="row">
						<div styleName="col-1-of-2">
							<h3 styleName="font-L marginBottom-M black">Monthly Pymt.</h3>
							<p styleName="font-XXL marginBottom-L primary-dark">$270</p>
						</div>
						<div styleName="col-1-of-2">
							<h3 styleName="font-L marginBottom-M black">Start Pymt.</h3>
							<p styleName="font-XXL marginBottom-L grey-dark-3">$500</p>
						</div>
					</div>
				</section>

				{/* Alternative */}
				<section styleName="borderBottom marginBottom-M">
					<div styleName="row">
						<div styleName="col-1-of-2">
							<h3 styleName="font-M marginBottom-S grey-dark">Monthly Pymt.</h3>
							<p styleName="font-XL marginBottom-M grey-dark-2">$390</p>
						</div>
						<div styleName="col-1-of-2">
							<h3 styleName="font-M marginBottom-S grey-dark">Down Pymt.</h3>
							<p styleName="font-XL marginBottom-M grey-dark-2">$800</p>
						</div>
					</div>
					<div styleName="marginBottom-L">
						<a href="#" styleName="font-M black uppercase">
							Learn more &rsaquo;
						</a>
					</div>
				</section>
			</div>
		);
	}
}

const options = { allowMultiple: true };
export default CssModules(InfoDetails, styles, options);
