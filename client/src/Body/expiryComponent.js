import React from "react";
import TradeComponent from "./TradeComponent";
import newSampleData from "../data/newSampleData";

const ExpiryComponent = (props) => {
	const data = props.data[props.year]
	const expiry = Object.keys(data[props.month] || {});

	return expiry.map((date) => {
		return (
			<div className="expiry-container" key={date}>
				<h4>Expiry Date: {`${props.month} ${date}`}</h4>
				<TradeComponent
					month={props.month}
					date={date}
					data={data}
					handleDelete={props.handleDelete}
					setModalVisibility={props.setModalVisibility}
					setEditFormVisibility={props.setEditFormVisibility}
				/>
			</div>
		);
	});
};

export default ExpiryComponent;
