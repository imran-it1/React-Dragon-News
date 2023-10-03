import logo from "../../../assets/images/logo.png";

const Header = () => {
	return (
		<div className=" text-center mt-12">
			<div className=" mb-5">
				<img className=" mx-auto" src={logo} alt="logo" />
			</div>
			<p className=" mb-2 text-lg text-gray-600">
				Journalism Without Fear or Favour
			</p>
			<h2 className=" text-xl font-medium">Sunday, November 27, 2022</h2>
		</div>
	);
};

export default Header;
