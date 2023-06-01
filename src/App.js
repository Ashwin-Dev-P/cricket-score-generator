import logo from "./logo.svg";
import "./App.css";

// Components
import CricketComponent from "./components/CricketComponent/CricketComponent";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";

function App() {
	return (
		<div>
			<HeaderComponent />
			<main>
				<CricketComponent />
			</main>
		</div>
	);
}

export default App;
