import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
import "./DataCard.css";

export const DataCard = ({ title, data }) => {
	return (
		<div className="DataCard">
			<span>{title}</span>
			{data || data == 0 ? (
				<span className="datacardno">{data}</span>
			) : (
				<div
					style={{
						width: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center"
					}}
				>
					<BeatLoader color="indigo" style={{ marginTop: "50px" }} />
				</div>
			)}
		</div>
	);
};
