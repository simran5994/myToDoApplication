import { useEffect } from "react";

const TrafficLight = () => {
	let lights = document.querySelectorAll("#isiqfor > div");
	(timers = [5000, 2000, 7000]), (counter = 0);

	function traffic() {
		for (var i = 0; i < lights.length; i++) {
			lights[i].classList.remove("on");
		}
		lights[counter].classList.add("on");
		setTimeout(traffic, timers[counter]);
		counter = (counter + 1) % timers.length;
	}

	useEffect(() => {
		setTimeout(function () {
			traffic();
		}, 5000);
	}, []);
	return (
		<div id='isiqfor'>
			<div className='red'></div>
			<div className='yellow'></div>
			<div className='green on'></div>
		</div>
	);
};

export default TrafficLight;
