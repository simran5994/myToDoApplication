import { useState, useEffect } from "react";
import data1 from "../common/data";

const Jira = () => {
	const [data, setData] = useState([]);
	const [todo, setTodo] = useState([]);
	const [showTodo, setShowTodo] = useState(false);

	const [inProgress, setInProgress] = useState([]);
	const [showInProgress, setShowInProgress] = useState(false);

	const [completed, setCompleted] = useState([]);
	const [showCompleted, setShowCompleted] = useState(false);

	const handleClick = (d) => {
		console.log(d);
		let m = d;
		m.status =
			m.status === "To_Do"
				? (m.status = "In_Progress")
				: m.status === "In_Progress"
				? (m.status = "Completed")
				: "";
		const a = data.filter((i) => i.id !== d.id);
		console.log(a);
		console.log(m);
		setData([...a, m]);
		setGroups([...a, m]);
	};

	useEffect(() => {
		setData(data1);
		setGroups(data1);
	}, []);

	const setGroups = (d) => {
		let a = d.filter((i) => i.status === "To_Do");
		setTodo(a);
		setShowTodo(true);
		let b = d.filter((i) => i.status === "In_Progress");
		setInProgress(b);
		setShowInProgress(true);
		let c = d.filter((i) => i.status === "Completed");
		setCompleted(c);
		setShowCompleted(true);
	};

	return (
		<div className='board'>
			<div className='inside'>
				{showTodo && (
					<div className='cols'>
						<h3>To Do</h3>
						{todo.map((i) => (
							<div className='ticket' key={i.id} onClick={() => handleClick(i)}>
								<h3> {i.taskName}</h3>
							</div>
						))}
					</div>
				)}
				{showInProgress && (
					<div className='cols'>
						<h3>In Progress</h3>
						{inProgress.map((i) => (
							<div className='ticket' key={i.id} onClick={() => handleClick(i)}>
								<h3> {i.taskName}</h3>
							</div>
						))}
					</div>
				)}
				{showCompleted && (
					<div className='cols'>
						<h3>In Progress</h3>
						{completed.map((i) => (
							<div className='ticket1' key={i.id}>
								<h3> {i.taskName}</h3>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Jira;
