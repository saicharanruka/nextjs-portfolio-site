import ArrowTRIcon from "@/app/assets/icons/arrow-up-right.svg";
import grainImage from "@/app/assets/images/grain.jpg";

const CallToAction = () => {
	return (
		<div className="py-12 pt-12">
			<div className="container">
				<div className="md:flex md:text-left md:justify-between custom-gradient items-start overflow-hidden z-0 text-gray-900 rounded-3xl py-8 px-10 text-center relative">
					<div
						className="absolute inset-0 opacity-5 -z-10"
						style={{
							backgroundImage: `url(${grainImage.src})`,
						}}
					></div>
					<div className="md:max-w-sm lg:max-w-xl">
						<h2 className=" text-xl md:text-2xl font-primary font-semibold">
							Let&apos;s create something amazing together
						</h2>
						<p className="mt-2 text-sm md:text-base">
							Ready to bring your next project to life ? Let&apos;s connect and
							discuss how I can help you achieve
						</p>
					</div>

					<button className="text-white bg-gray-950 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-8 w-max border border-gray-950">
						<span className="font-semibold">Contact Me</span>
						<ArrowTRIcon className="size-4" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default CallToAction;
// className="inline-flex mt-6 bg-gray-900 text-white rounded-lg p-3 items-center gap-2"
