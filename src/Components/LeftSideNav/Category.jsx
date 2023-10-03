import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Category = ({ category }) => {
	const { id, name } = category;
	return (
		<li className=" text-xl font-semibold text-gray-500 rounded-md py-4 pl-12 hover:bg-gray-100">
			<NavLink
				to={`/category/${id}`}
				className={({ isActive }) => (isActive ? "text-rose-600" : "")}
			>
				{name}
			</NavLink>
		</li>
	);
};

Category.propTypes = {
	category: PropTypes.object,
};

export default Category;
