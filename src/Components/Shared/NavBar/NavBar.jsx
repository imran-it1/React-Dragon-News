import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import toast from "react-hot-toast";

const NavBar = () => {
	// Use context
	const { user, logOut } = useContext(AuthContext);

	// handle Sign out

	const handleSignOut = () => {
		logOut()
			.then(() => {
				toast.success("Sign Out Successful");
			})
			.catch(() => {
				toast.error("Something went wrong");
			});
	};

	return (
		<nav className=" flex items-center justify-end mt-6">
			<div className=" flex-1">
				<ul className=" flex items-center gap-5 justify-end">
					<li className=" text-base font-medium">
						<NavLink
							to="/"
							className={({ isActive }) => (isActive ? "text-rose-600" : "")}
						>
							Home
						</NavLink>
					</li>
					<li className=" text-base font-medium">
						<NavLink
							to="/about"
							className={({ isActive }) => (isActive ? "text-rose-600" : "")}
						>
							About
						</NavLink>
					</li>
					<li className=" text-base font-medium">
						<NavLink
							to="/career"
							className={({ isActive }) => (isActive ? "text-rose-600" : "")}
						>
							Career
						</NavLink>
					</li>
				</ul>
			</div>

			{user ? (
				<div className=" flex items-center justify-end gap-2 flex-1">
					<img
						className="w-10  h-10 rounded-full ri ri dark:bg-gray-500 ri ri"
						src={user.photoURL}
					/>

					<Link
						onClick={handleSignOut}
						to={"/login"}
						type="button"
						className="py-2 px-8  bg-gray-800 hover:bg-gray-900 focus:ring-gray-500 focus:ring-offset-gray-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
					>
						Sign Out
					</Link>
				</div>
			) : (
				<div className=" flex items-center justify-end gap-2 flex-1">
					<img
						className="w-10  h-10 rounded-full ri ri dark:bg-gray-500 ri ri"
						src="https://source.unsplash.com/40x40/?portrait?1"
					/>

					<Link
						to={"/login"}
						type="button"
						className="py-2 px-8  bg-gray-800 hover:bg-gray-900 focus:ring-gray-500 focus:ring-offset-gray-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
					>
						Login
					</Link>
				</div>
			)}
		</nav>
	);
};

export default NavBar;
