import React from "react";
import CssModules from "react-css-modules";
import styles from "./InfoBubble.css";

const InfoBubble = props => {
	return (
		<div styleName={`infoBubble ${props.bgColor} ${props.top} ${props.left}`}>
			{props.text}
		</div>
	);
};

const options = { allowMultiple: true };
export default CssModules(InfoBubble, styles, options);
