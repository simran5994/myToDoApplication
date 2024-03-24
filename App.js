import ReactDOM from "react-dom/client";
import Jira from "./components/Jira";

const App = () => {
	return (
		<div>
			<h2>Todays Taks List</h2>
			<Jira />
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
