import darkSaasLandingPage from "@/app/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/app/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/app/assets/images/ai-startup-landing-page.png";
import CheckIcon from "@/app/assets/icons/check-circle.svg";
import ArrowTRIcon from "@/app/assets/icons/arrow-up-right.svg";

import Image from "next/image";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/card/Card";

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
		<section className="pb-16 lg:py-20">
			<div className="container">
				<SectionHeader
					tagline="Real-world Results"
					heading="Featured Projects"
					para="See how I transformed concepts into engaging digital experiences"
				/>

				<div className="flex flex-col gap-10 mt-10 md:mt-20">
					{portfolioProjects.map((project, id) => (
						<Card
							className="pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 px-8 "
							key={id}
						>
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
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
