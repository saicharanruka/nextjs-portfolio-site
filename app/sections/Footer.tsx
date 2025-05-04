import ArrowTRIcon from "@/app/assets/icons/arrow-up-right.svg";

const footerLinks = [
	{
		title: "Youtube",
		href: "#",
	},
	{
		title: "Twitter",
		href: "#",
	},
	{
		title: "Discord",
		href: "#",
	},
	{
		title: "LinkedIn",
		href: "#",
	},
];

const Footer = () => {
	return (
		<footer className="relative -z-10 overflow-x-clip">
			<div className="absolute -z-10 h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"></div>
			<div className="container">
				<div className="border-t border-white/15 py-6 text-sm flex flex-col md:justify-between md:flex-row items-center gap-8">
					<div className="text-white/40">&copy; 2025. All rights reserved.</div>
					<div>
						<nav className="flex flex-col md:flex-row gap-5">
							{footerLinks.map((link) => (
								<a
									key={link.title}
									href={link.href}
									className="inline-flex items-center gap-1"
								>
									<span className="font-semibold">{link.title}</span>
									<ArrowTRIcon className="size-4" />
								</a>
							))}
						</nav>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
