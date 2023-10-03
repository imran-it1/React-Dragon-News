import { useEffect, useState } from "react";
import Category from "./Category";
import LeftNewsCard from "./leftNewsCard";

const LeftSideNav = () => {
	const [categories, setCategories] = useState([]);
	const [newses, setNewses] = useState([]);
	const [seeAll, setSeeAll] = useState(false);

	useEffect(() => {
		fetch("./categories.json")
			.then(res => res.json())
			.then(data => setCategories(data));
	}, []);

	useEffect(() => {
		fetch("/news.json")
			.then(res => res.json())
			.then(data => setNewses(data));
	}, []);

	return (
		<div className=" mt-20">
			<h1 className=" text-xl font-semibold text-gray-700 mb-5">
				All Category
			</h1>

			<ul>
				{categories.map(category => (
					<Category key={category.id} category={category}></Category>
				))}
			</ul>

			{seeAll &&
				newses
					?.slice(0, newses.length)
					.map(news => <LeftNewsCard key={news.id} news={news}></LeftNewsCard>)}

			{newses?.slice(0, 5).map(news => (
				<LeftNewsCard key={news.id} news={news}></LeftNewsCard>
			))}

			{seeAll || (
				<div className=" flex justify-center mt-5">
					<button
						onClick={() => setSeeAll(!seeAll)}
						type="button"
						className="py-2 px-4 border  border-rose-200 hover:scale-105 hover:bg-rose-600 hover:text-white  rounded focus:ring-gray-500 focus:ring-offset-gray-200 text-gray-900  transition ease-in duration-200 text-center text-base font-semibold shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 "
					>
						See All
					</button>
				</div>
			)}
		</div>
	);
};

export default LeftSideNav;
