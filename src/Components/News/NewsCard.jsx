import PropTypes from "prop-types";
import { useState } from "react";
import Rating from "react-rating";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";

const NewsCard = ({ news }) => {
	const [readMore, setReadMore] = useState(false);

	const { rating, total_view, title, author, image_url, details } = news || {};

	const { name, published_date, img } = author;

	console.log(details.length > 300 ? details.slice(0, 300) : details);

	return (
		<div className="mb-7">
			<div className="flex flex-col rounded-lg shadow-md ">
				<div className="w-full py-3 px-8 flex justify-between items-center space-x-4 bg-gray-100 rounded-t-lg">
					<div className=" flex items-center gap-5">
						<img
							alt="author-img"
							src={img}
							className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
						/>
						<div className="flex flex-col space-y-1">
							<a
								rel="noopener noreferrer"
								href="#"
								className="text-sm font-semibold"
							>
								{name}
							</a>
							<span className="text-xs dark:text-gray-400">
								{published_date?.split(" ")[0]}
							</span>
						</div>
					</div>
					<div className="space-x-2 flex flex-row-reverse">
						<button
							aria-label="Share this post"
							type="button"
							className="p-2 text-center"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
								className="w-4 h-4 fill-current text-gray-400"
							>
								<path d="M404,344a75.9,75.9,0,0,0-60.208,29.7L179.869,280.664a75.693,75.693,0,0,0,0-49.328L343.792,138.3a75.937,75.937,0,1,0-13.776-28.976L163.3,203.946a76,76,0,1,0,0,104.108l166.717,94.623A75.991,75.991,0,1,0,404,344Zm0-296a44,44,0,1,1-44,44A44.049,44.049,0,0,1,404,48ZM108,300a44,44,0,1,1,44-44A44.049,44.049,0,0,1,108,300ZM404,464a44,44,0,1,1,44-44A44.049,44.049,0,0,1,404,464Z"></path>
							</svg>
						</button>
						<button
							aria-label="Bookmark this post"
							type="button"
							className="p-2"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
								className="w-4 h-4 fill-current text-gray-400"
							>
								<path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
							</svg>
						</button>
					</div>
				</div>
				<div className="p-5">
					<div>
						<h2 className=" leading-9 text-xl font-bold text-gray-700 mb-2">
							{title}
						</h2>
						<img
							src={image_url}
							alt=""
							className="rounded object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
						/>

						<div className=" inline-block">
							{readMore ? (
								<p className="leading-6 dark:text-gray-400">{details}</p>
							) : (
								<p className="leading-6 dark:text-gray-400">
									{details.length > 300
										? details.slice(0, 200) + "..."
										: details}
								</p>
							)}
						</div>
						<button
							onClick={() => setReadMore(!readMore)}
							className=" my-1 text-lg font-semibold text-orange-500"
						>
							{readMore ? "Read Less" : "Read More"}
						</button>
					</div>

					<div className=" my-5">
						<hr />
					</div>

					<div className="flex flex-wrap justify-between">
						<div className=" flex items-center gap-2">
							<Rating
								initialRating={rating.number}
								readonly
								emptySymbol={
									<BsStarHalf className="text-orange-600 mr-1"></BsStarHalf>
								}
								fullSymbol={
									<BsStarFill className="text-orange-600 mr-1"></BsStarFill>
								}
							/>
							<span>{rating.number}</span>
						</div>

						<div className="flex space-x-2 text-sm dark:text-gray-400">
							<button
								type="button"
								className="flex items-center p-1 space-x-1.5"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
								>
									<path
										d="M12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15Z"
										fill="#706F6F"
									/>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75C16.971 3.75 21.186 6.973 22.676 11.44C22.796 11.802 22.796 12.192 22.676 12.553C21.189 17.024 16.971 20.25 11.999 20.25C7.029 20.25 2.813 17.027 1.324 12.56C1.20375 12.1987 1.20375 11.8083 1.324 11.447H1.323ZM17.25 12C17.25 13.3924 16.6969 14.7277 15.7123 15.7123C14.7277 16.6969 13.3924 17.25 12 17.25C10.6076 17.25 9.27225 16.6969 8.28769 15.7123C7.30312 14.7277 6.75 13.3924 6.75 12C6.75 10.6076 7.30312 9.27225 8.28769 8.28769C9.27225 7.30312 10.6076 6.75 12 6.75C13.3924 6.75 14.7277 7.30312 15.7123 8.28769C16.6969 9.27225 17.25 10.6076 17.25 12Z"
										fill="#706F6F"
									/>
								</svg>
								<span>{total_view}</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

NewsCard.propTypes = {
	news: PropTypes.object,
};

export default NewsCard;
