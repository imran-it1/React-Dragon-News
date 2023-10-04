import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
	// Use context info
	const { user, loading } = useContext(AuthContext);

	// Get pathname form user click
	const location = useLocation();

	//Checl loading state
	if (loading) {
		return (
			<div className="flex h-screen items-center justify-center space-x-2">
				<div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
				<div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
				<div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
			</div>
		);
	}

	// Access control
	if (user) {
		return children;
	}

	return <Navigate to={"/login"} state={location.pathname}></Navigate>;
};

PrivateRoute.propTypes = {
	children: PropTypes.node,
};

export default PrivateRoute;
