import { Link, useLocation, useNavigate } from "react-router-dom";

import NavBar from "../../Components/Shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
	// use context
	const { userLogin } = useContext(AuthContext);

	// Use location hook to get user desire location(Where he attempt to go)
	const location = useLocation();

	// navigate hook
	const navigate = useNavigate();

	// login handle
	const handleLogin = e => {
		e.preventDefault();

		//FormData
		const form = new FormData(e.currentTarget);

		// Get filed value
		const email = form.get("email");
		const password = form.get("password");

		userLogin(email, password)
			.then(res => {
				console.log(res.user);
				toast.success("Login Successful");

				// Form field reset
				e.target.reset();

				// Navigate after login
				navigate(location?.state ? location.state : "/");
			})
			.catch(error => {
				console.log(error.message);
				toast.error("Something went wrong");
			});
	};

	return (
		<div>
			<NavBar></NavBar>
			{/* Form */}
			<div className=" h-[90vh] w-full flex justify-center items-center">
				<div className="w-full mx-auto px-4 py-16 sm:px-6  lg:px-8">
					<div className="mx-auto w-full md:w-1/2 shadow-md rounded-md">
						<form
							onSubmit={handleLogin}
							className="mb-0 mt-6 space-y-4 rounded-lg p-4  sm:p-6 lg:p-8"
						>
							<p className="text-center text-2xl font-bold text-gray-800 sm:text-3xl my-16">
								Login your account
							</p>

							<div className=" space-y-3">
								<label className="">Email</label>

								<div className="relative">
									<input
										type="email"
										name="email"
										className="w-full rounded bg-gray-100 border-gray-200 p-4 pe-12 text-sm shadow-sm"
										placeholder="Enter your email address"
									/>
								</div>
							</div>

							<div className=" space-y-3">
								<label>Password</label>

								<div className="relative">
									<input
										type="password"
										name="password"
										className="w-full rounded bg-gray-100 border-gray-200 p-4 pe-12 text-sm shadow-sm"
										placeholder="Enter your password"
									/>
								</div>
							</div>

							<button
								type="submit"
								className="mt-4 w-full rounded bg-gray-600 hover:bg-gray-700 duration-300 ease-in-out px-5 py-3 text-sm font-medium text-white"
							>
								Login
							</button>
						</form>
						<p className="text-center text-sm text-gray-500 pb-5">
							Don&apos;t have an account?
							<Link
								to={"/register"}
								className="hover:underline ml-1 text-orange-600 font-medium"
								href=""
							>
								Register
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
