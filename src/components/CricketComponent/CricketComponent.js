import React, { useState } from "react";

// Styles
import "../../styles/common.css";
import "./CricketComponent.css";

// Components
import ScoreBoardComponent from "../ScoreBoardComponent/ScoreBoardComponent";

function CricketComponent() {
	var [runs, setRuns] = useState(0);
	var [wickets, setWickets] = useState(0);
	const [gameOver, setGameOver] = useState(false);

	const addRuns = (e) => {
		const current_ball_run = Number(e.target.innerHTML);
		setRuns(runs + current_ball_run);
	};

	const wicketHandler = (e) => {
		setWickets(++wickets);

		if (wickets >= 10) {
			setGameOver(true);
			disableButtons();
		}
	};

	const disableButtons = () => {
		const buttons = document.querySelectorAll("form button");
		console.log(buttons);
		for (let i = 0; i < buttons.length; ++i) {
			buttons[i].disabled = true;
		}
	};

	const wideOrNoBall = () => {
		setRuns(++runs);
	};

	return (
		<div>
			<ScoreBoardComponent
				runs={runs}
				wickets={wickets}
				gameOver={gameOver}
			/>

			<div>
				<form
					onSubmit={(e) => {
						e.preventDefault();
					}}>
					<div className="my-rounded-btns-div runs-flex-container">
						<button
							onClick={addRuns}
							className="flex-item">
							1
						</button>
						<button
							onClick={addRuns}
							className="flex-item">
							2
						</button>
						<button
							onClick={addRuns}
							className="flex-item">
							3
						</button>
						<button
							onClick={addRuns}
							className="flex-item">
							4
						</button>
						<button
							onClick={addRuns}
							className="flex-item">
							6
						</button>
					</div>

					<div>
						<button
							onClick={wideOrNoBall}
							className="wide-btn">
							wide
						</button>
						<button
							onClick={wideOrNoBall}
							className="wide-btn2">
							no ball
						</button>
					</div>

					<div>
						<button
							onClick={wicketHandler}
							className="wicket-btn">
							wicket
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default CricketComponent;
