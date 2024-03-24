import { useState, useEffect } from "react";
import { listData } from "../common/data";

const CheckList = () => {
	const [list, setList] = useState([]);
	const [selectedList, setSelectedList] = useState([]);

	const [showDelete, setShowDelete] = useState(false);

	useEffect(() => {
		setList(listData);
	}, []);

	const removeItem = (i) => {
		const a = list.filter((j) => j !== i);
		setList(a);
		const b = selectedList.filter((k) => k !== i);
		setSelectedList(b);
		alert("Item Removed");
	};

	const handleCheck = (ev, i) => {
		if (ev.target.checked) {
			setSelectedList([...selectedList, i]);
		} else {
			const a = selectedList.filter((k) => k !== i);
			setSelectedList(a);
		}

		console.log(selectedList);
	};
	return (
		<div className='view'>
			<div className='inner-header'>
				{/* <button>
					<span>✚</span>
				</button>
				<button>
					<span>❌</span>
				</button> */}
				<h2>Tasks For Today</h2>
			</div>
			<div className='inner'>
				{list &&
					list.map((i) => (
						<div className='rows' key={i}>
							<div className='cart'>
								<input
									type='checkbox'
									className='check'
									onChange={(e) => handleCheck(e, i)}
								></input>
								<h3> {i}</h3>
								<div className='delete'>
									{selectedList.includes(i) && (
										<span onClick={() => removeItem(i)}>❌</span>
									)}
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default CheckList;
