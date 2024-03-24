import ReactDOM from "react-dom/client";
import Jira from "./components/Jira";
import CheckList from "./components/CheckList";
import CartAPI from "./components/CartAPI";

const App = () => {
	return (
		<div>
			<h2 style={{ textAlign: "center" }}>Todays Taks List</h2>
			<CartAPI />
			{/* <CheckList /> */}
			{/* <Jira /> */}
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
