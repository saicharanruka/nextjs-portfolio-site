const SectionHeader = (props: {
	tagline: string;
	heading: string;
	para: string;
}) => {
	const { tagline, heading, para } = props;

	return (
		<div className="container">
			<div className="flex justify-center">
				<p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
					{tagline}
				</p>
			</div>
			<h2 className="py-6 font-primary text-3xl md:text-5xl font-semibold text-center">
				{heading}
			</h2>
			<p className="mt-4 md:text-lg lg:text-xl text-center text-white/40 max-w-md mx-auto">
				{para}
			</p>
		</div>
	);
};

export default SectionHeader;
