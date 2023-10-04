import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

const News = () => {
	const [newses, setNewses] = useState([]);
	const [seeAll, setSeeAll] = useState(false);

	useEffect(() => {
		fetch("/news.json")
			.then(res => res.json())
			.then(data => setNewses(data));
	}, []);

	return (
		<div className=" mt-20">
			<h1 className=" mb-5 text-xl font-semibold text-gray-700">
				Dragon News Home
			</h1>

			<div>
				{seeAll &&
					newses
						.slice(0, newses.length)
						.map(news => <NewsCard key={news.id} news={news}></NewsCard>)}

				{newses?.slice(0, 4).map(news => (
					<NewsCard key={news._id} news={news}></NewsCard>
				))}
			</div>

			{seeAll || (
				<div className=" flex justify-center">
					<button
						onClick={() => setSeeAll(!seeAll)}
						type="button"
						className="py-2 px-4  bg-rose-600 hover:bg-rose-700  rounded focus:ring-rose-500 focus:ring-offset-rose-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
					>
						See All
					</button>
				</div>
			)}
		</div>
	);
};

export default News;
