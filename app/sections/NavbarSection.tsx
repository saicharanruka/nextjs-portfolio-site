const Navbar = () => {
	return (
		<div className="flex justify-center items-center fixed w-full top-3 z-50">
			<nav className="flex gap-1 p-0.5 border border-white/15 bg-white/10 backdrop-blur rounded-full">
				<a className="nav-item" href="#">
					Home
				</a>
				<a href="#" className="nav-item">
					Projects
				</a>
				<a href="#" className="nav-item">
					About
				</a>
				<a
					href="#"
					className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900 "
				>
					Contact
				</a>
			</nav>
		</div>
	);
};

export default Navbar;
