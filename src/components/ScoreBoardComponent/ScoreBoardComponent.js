import React from "react";

// Styles.
import "../../styles/common.css";
import "./ScoreBoardComponent.css";

export default function ScoreBoardComponent(props) {
	const { runs, wickets, gameOver } = props;
	return (
		<div className="my-my-5">
			<div className="my-text-center score-board">
				{runs}-{wickets}
			</div>
			<div>
				{gameOver ? (
					<div className="my-text-center">The match has ended</div>
				) : null}
			</div>
		</div>
	);
}
