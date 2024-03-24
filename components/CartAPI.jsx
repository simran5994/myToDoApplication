import { useState, useEffect } from "react";

const CartAPI = () => {
	const [list, setlist] = useState([]);
	const [productList, setproductList] = useState([]);

	useEffect(() => {
		callFetch();
	}, []);

	const callFetch = async () => {
		const data = await fetch("https://fakestoreapi.com/carts?limit=2");
		const json = await data.json();
		const a = [...json[0]?.products, ...json[1]?.products];
		const uniqdata = combineDuplicate(a);
		setlist(uniqdata);
		if (uniqdata) {
			uniqdata.forEach(async (i) => {
				const pdata = await fetch(
					`https://fakestoreapi.com/products/${i.productId}`
				);
				const json1 = await pdata.json();
				setproductList([...productList, json1]);
				console.log(productList);
			});
		}
	};

	const combineDuplicate = (a) => {
		h = {};
		a.forEach((i) => {
			if (h.hasOwnProperty(i.productId)) {
				h[i.productId] = h[i.productId] + i.quantity;
			} else {
				h[i.productId] = i.quantity;
			}
		});
		let o2 = [];
		for (let i in h) {
			o2.push({ productId: i, quantity: h[i] });
		}

		return o2;
	};

	if (productList.length < 1) {
		return (
			<div className='board'>
				<div className='inside'>
					<div className='cardView'>
						<img src={""} style={{ width: "30%" }} />
						<h2></h2>
						<h3></h3>
						<h3></h3>
					</div>
					<div className='cardView'>
						<img src={""} style={{ width: "30%" }} />
						<h2></h2>
						<h3></h3>
						<h3></h3>
					</div>
					<div className='cardView'>
						<img src={""} style={{ width: "30%" }} />
						<h2></h2>
						<h3></h3>
						<h3></h3>
					</div>
					<div className='cardView'>
						<img src={""} style={{ width: "30%" }} />
						<h2></h2>
						<h3></h3>
						<h3></h3>
					</div>
				</div>
			</div>
		);
	}
	return (
		<div className='board'>
			<div className='inside'>
				{productList.map((i) => (
					<div className='cardView' key={i?.id}>
						<img src={i?.image} style={{ width: "30%" }} />
						<h2>{i?.title}</h2>
						<h3>{i?.description}</h3>
						<h3>{i?.price}</h3>
					</div>
				))}
			</div>
		</div>
	);
};

export default CartAPI;
