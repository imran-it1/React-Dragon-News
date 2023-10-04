import { useParams } from "react-router-dom";
import useNews from "../../Hook/useNews";
import Header from "../../Components/Shared/Header/Header";
import RightSideNav from "../../Components/Shared/RightSideNav/RightSideNav";
import { useEffect, useState } from "react";
import NewsDetailsCard from "./NewsDetailsCard";

const NewsDetails = () => {
	// Store the find News in a state
	const [findNews, setFindNews] = useState({});

	// Get all news
	const newses = useNews();

	// Target news id
	const { id } = useParams();

	useEffect(() => {
		const findNews = newses?.find(news => news?._id === id);
		setFindNews(findNews);
	}, [id, newses]);

	return (
		<div>
			<Header></Header>
			<div className=" grid md:grid-cols-4 gap-5">
				<div className="col-span-3">
					<h1 className=" mb-5 mt-20 text-xl font-semibold text-gray-700">
						Dragon News
					</h1>
					{<NewsDetailsCard news={findNews}></NewsDetailsCard>}
				</div>
				{/* Right Side */}
				<div className="">
					<RightSideNav></RightSideNav>
				</div>
			</div>
		</div>
	);
};

export default NewsDetails;
