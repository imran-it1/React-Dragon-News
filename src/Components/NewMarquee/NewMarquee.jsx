import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const NewMarquee = () => {
	return (
		<div className=" mt-7 relative">
			<Marquee className=" bg-gray-50 py-6 rounded-sm" pauseOnHover={true}>
				<div className=" space-x-10">
					<Link to={"#"}>
						Match Highlights: Germany vs Spain — as it happened ! Match
						Highlights: Germany vs Spain as...
					</Link>
					<Link to={"#"}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
						culpa nemo odit minus quia, quod doloremque expedita iure vel illum.
					</Link>
					<Link to={"#"}>
						Match Highlights: Germany vs Spain — as it happened ! Match
						Highlights: Germany vs Spain as...
					</Link>
					<Link to={"#"}>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea eos at
						esse iusto consectetur autem tempore porro debitis nisi nesciunt ad
						maiores molestiae sunt nemo amet, id aperiam magni
						necessitatibus.....?
					</Link>
				</div>
			</Marquee>
			<div className=" absolute top-4 z-10">
				<button
					type="button"
					className="py-2 px-4  bg-rose-600 hover:bg-rose-700  rounded focus:ring-rose-500 focus:ring-offset-rose-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
				>
					Latest
				</button>
			</div>
		</div>
	);
};

export default NewMarquee;
