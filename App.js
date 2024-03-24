import ReactDOM from "react-dom/client";
import Jira from "./components/Jira";
import CheckList from "./components/CheckList";

const App = () => {
	return (
		<div>
			<h2 style={{ textAlign: "center" }}>Todays Taks List</h2>
			<CheckList />
			{/* <Jira /> */}
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
