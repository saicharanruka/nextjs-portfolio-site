import darkSaasLandingPage from "@/app/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/app/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/app/assets/images/ai-startup-landing-page.png";
import CheckIcon from "@/app/assets/icons/check-circle.svg";
import ArrowTRIcon from "@/app/assets/icons/arrow-up-right.svg";
import grainImage from "@/app/assets/images/grain.jpg";

import Image from "next/image";

const portfolioProjects = [
	{
		company: "Acme Corp",
		year: "2022",
		title: "Dark Saas Landing Page",
		results: [
			{ title: "Enhanced user experience by 40%" },
			{ title: "Improved site speed by 50%" },
			{ title: "Increased mobile traffic by 35%" },
		],
		link: "https://youtu.be/4k7IdSLxh6w",
		image: darkSaasLandingPage,
	},
	{
		company: "Innovative Co",
		year: "2021",
		title: "Light Saas Landing Page",
		results: [
			{ title: "Boosted sales by 20%" },
			{ title: "Expanded customer reach by 35%" },
			{ title: "Increased brand awareness by 15%" },
		],
		link: "https://youtu.be/7hi5zwO75yc",
		image: lightSaasLandingPage,
	},
	{
		company: "Quantum Dynamics",
		year: "2023",
		title: "AI Startup Landing Page",
		results: [
			{ title: "Enhanced user experience by 40%" },
			{ title: "Improved site speed by 50%" },
			{ title: "Increased mobile traffic by 35%" },
		],
		link: "https://youtu.be/Z7I5uSRHMHg",
		image: aiStartupLandingPage,
	},
];

const Projects = () => {
	return (
		<section className="pb-16 lg:py-24">
			<div className="container">
				<div className="flex justify-center">
					<p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
						Real-world Results
					</p>
				</div>

				<h2 className="py-6 font-primary text-3xl md:text-5xl font-semibold text-center">
					Featured Projects
				</h2>
				<p className="mt-4 md:text-lg lg:text-xl text-center text-white/40 max-w-md mx-auto">
					See how I transformed concepts into engaging digital experiences
				</p>
				<div className="flex flex-col gap-10 mt-10 md:mt-20">
					{portfolioProjects.map((project, id) => (
						<div
							className="overflow-hidden bg-gray-800 rounded-3xl gap-5 relative z-0 after:content-[''] after:absolute
							  after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:z-10 after:outline-white/20
							  pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 px-8 after:pointer-events-none"
							key={id}
						>
							<div
								className="absolute inset-0 -z-30 opacity-5"
								style={{
									backgroundImage: `url(${grainImage.src})`,
								}}
							></div>
							<div className="lg:grid lg:grid-cols-2 lg:gap-16">
								<div className="lg:pb-16">
									<div
										className="bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text
								inline-flex gap-2 font-bold uppercase tracking-widest text-sm"
									>
										<span>{project.company}</span>
										<span>&bull;</span>
										<span>{project.year}</span>
									</div>

									<h3 className="font-primary text-xl md:text-4xl mt-2 md:mt-5 font-semibold">
										{project.title}
									</h3>
									<hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
									<ul className="flex flex-col gap-4 mt-4 md:mt-5">
										{project.results.map((result) => (
											<li
												className="flex items-center gap-2 text-sm md:text-base text-white/40"
												key={result.title}
											>
												<span>
													<CheckIcon className="size-5 md:size-6" />
												</span>
												<span className="">{result.title}</span>
											</li>
										))}
									</ul>
									<a href={project.link} target="_blank">
										<button
											className="inline-flex gap-1 justify-center items-center bg-white
								 text-gray-900 h-12 w-full md:w-auto px-6 rounded-xl font-semibold mt-6"
										>
											<span>Visit Live Site</span>
											<ArrowTRIcon className="size-5 text-gray-950" />
										</button>
									</a>
								</div>
								<div className="relative">
									<Image
										className="mt-8 -mb-4 md:mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
										src={project.image}
										alt={project.title + " image"}
									/>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
