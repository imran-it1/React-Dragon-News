import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NewsDetailsCard = ({ news }) => {
	const { title, image_url, details } = news || {};
	return (
		<div>
			<div className="flex flex-col p-6 space-y-6 rounded-lg border">
				<div>
					<img
						src={image_url}
						alt=""
						className="object-cover w-full mb-4 h-60 sm:h-96"
					/>
					<h2 className="mb-1 text-xl font-semibold">{title}</h2>
					<p className="text-sm dark:text-gray-400">{details}</p>
				</div>

				<div>
					<Link
						to={"/"}
						className="group relative inline-flex bg-rose-600 hover:bg-rose-500 duration-300  text-white items-center overflow-hidden rounded border border-current px-6 py-2  focus:outline-none focus:ring focus:ring-orange-400 focus:ring-offset-2 active:text-orange-500"
						href="/download"
					>
						<span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								className=" text-sm"
							>
								<path
									d="M19.5 12H4.5M4.5 12L11.25 18.75M4.5 12L11.25 5.25"
									stroke="white"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</span>

						<span className="text-sm font-medium ml-1">
							All news in this category
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

NewsDetailsCard.propTypes = {
	news: PropTypes.object,
};
export default NewsDetailsCard;
