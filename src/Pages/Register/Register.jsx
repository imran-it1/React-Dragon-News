import { Link } from "react-router-dom";
import NavBar from "../../Components/Shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
	// usecontext value
	const { createUser, updateUserProfile } = useContext(AuthContext);

	// Handle user registration
	const handleRegister = e => {
		e.preventDefault();

		// get from data
		const form = new FormData(e.currentTarget);

		// Get form individual data field value
		const name = form.get("name");
		const photo = form.get("photo");
		const email = form.get("email");
		const password = form.get("password");

		// creat user function use
		createUser(email, password)
			.then(res => {
				console.log(res.user);
				toast.success("Register Successful");
				// Form field reset
				e.target.reset();
				// Update user profile
				updateUserProfile(name, photo)
					.then(() => {
						toast.success("Profile Updated");
					})
					.catch(() => {
						toast.error("Update profile unsuccessful");
					});
			})
			.catch(error => {
				console.error(error.message);
				toast.error("Something went wrong");
			});
	};

	return (
		<div>
			<NavBar></NavBar>
			{/* Form */}
			<div className=" h-[90vh] w-full flex justify-center items-center">
				<div className="w-full mx-auto py-16 sm:px-2 lg:px-1">
					<div className="mx-auto w-full md:w-1/2 shadow-md rounded-md">
						<form
							onSubmit={handleRegister}
							className="mb-0 mt-6 space-y-4 rounded-lg p-4  sm:p-6 lg:p-8"
						>
							<p className="text-center text-2xl font-bold text-gray-800 sm:text-3xl my-16">
								Register your account
							</p>

							<div className=" space-y-3">
								<label className="">Name</label>

								<div className="relative">
									<input
										type="text"
										name="name"
										className="w-full rounded bg-gray-100 border-gray-200 p-4 pe-12 text-sm shadow-sm"
										placeholder="Enter your name"
									/>
								</div>
							</div>

							<div className=" space-y-3">
								<label className="">Photo URL</label>

								<div className="relative">
									<input
										type="text"
										name="photo"
										className="w-full rounded bg-gray-100 border-gray-200 p-4 pe-12 text-sm shadow-sm"
										placeholder="Enter photo URL"
									/>
								</div>
							</div>

							<div className=" space-y-3">
								<label className="">Email</label>

								<div className="relative">
									<input
										type="email"
										name="email"
										className="w-full rounded bg-gray-100 border-gray-200 p-4 pe-12 text-sm shadow-sm"
										placeholder="Enter your email address"
										required
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
										required
									/>
								</div>
							</div>

							<button
								type="submit"
								className="mt-4 w-full rounded bg-gray-600 hover:bg-gray-700 duration-300 ease-in-out px-5 py-3 text-sm font-medium text-white"
							>
								Register
							</button>
						</form>
						<p className="text-center text-sm text-gray-500 pb-5">
							Already have an account?
							<Link
								to={"/login"}
								className="hover:underline ml-1 text-orange-600 font-medium"
								href=""
							>
								Login
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
