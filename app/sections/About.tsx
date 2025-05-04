import Image from "next/image";
import Card from "../components/card/Card";
import SectionHeader from "../components/SectionHeader";

import bookCover from "@/app/assets/images/book-cover.png";

import NextJSIcon from "@/app/assets/icons/next-js.svg";
import TailwindIcon from "@/app/assets/icons/tailwind.svg";
import ReactIcon from "@/app/assets/icons/react.svg";
import TypescriptIcon from "@/app/assets/icons/typescript.svg";
import GithubIcon from "@/app/assets/icons/github.svg";
import ChromeIcon from "@/app/assets/icons/chrome.svg";
import LinuxIcon from "@/app/assets/icons/linux.svg";

import mapImage from "@/app/assets/images/map.png";
import smileMemoji from "@/app/assets/images/memoji-smile.png";
import CardHeader from "../components/card/CardHeader";
import ToolBoxItems from "../components/ToolBoxItems";

const hobbies = [
	{
		title: "Swimming",
		emoji: "🏊‍♂️",
		left: "5%",
		top: "-5%",
	},
	{
		title: "Homelab",
		emoji: "🖥️",
		left: "50%",
		top: "0%",
	},
	{
		title: "Guitar",
		emoji: "🎸",
		left: "10%",
		top: "25%",
	},
	{
		title: "Motorcycles",
		emoji: "🏍️",
		left: "35%",
		top: "40%",
	},
	{
		title: "Fitness",
		emoji: "🏋️‍♂️",
		left: "70%",
		top: "45%",
	},
	{
		title: "Cooking",
		emoji: "🥘",
		left: "5%",
		top: "70%",
	},
];

const toolboxItems = [
	{
		title: "NextJS",
		icons: NextJSIcon,
	},
	{
		title: "TailwindCSS",
		icons: TailwindIcon,
	},
	{
		title: "React",
		icons: ReactIcon,
	},
	{
		title: "Typescript",
		icons: TypescriptIcon,
	},
	{
		title: "Github",
		icons: GithubIcon,
	},
	{
		title: "Chrome",
		icons: ChromeIcon,
	},
	{
		title: "Linux",
		icons: LinuxIcon,
	},
];

const About = () => {
	return (
		<section className="py-20 lg:py-28">
			<div className="container">
				<SectionHeader
					tagline="About Me"
					heading="A Glimpse Into My World"
					para="Learn more about who I am, what I do and what inspires me."
				/>
				<div className="mt-20 flex flex-col gap-8">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
						<Card className="h-[320px] md:col-span-2 lg:col-span-1">
							<CardHeader
								heading="My Reads"
								text="Explore the books shaping my perspectives"
							/>
							<div className="w-40 mx-auto mt-2 md:-mt-2">
								<Image className="" src={bookCover} alt="Book cover" />
							</div>
						</Card>
						<Card className="h-[320px] p-0 md:col-span-3 lg:col-span-2">
							<CardHeader
								heading="My Toolbox"
								text="Explore the technologies and tools I use to craft exceptional
							digital experiences."
								className=""
							/>
							<ToolBoxItems className="mt-2" items={toolboxItems} />
							<ToolBoxItems
								className="mt-2"
								itemsWrapperClassName="-translate-x-[120px]"
								items={toolboxItems}
							/>
						</Card>
					</div>
					<div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
						<Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
							<CardHeader
								heading="Beyond the Code"
								text="Explore the interests and hobbies beyond the digital realm."
								className="px-6 pt-6"
							/>
							<div className="relative flex-1">
								{hobbies.map((hobby) => (
									<div
										key={hobby.title}
										className="inline-flex gap-2 px-6 bg-gradient-to-r items-center from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
										style={{
											left: hobby.left,
											top: hobby.top,
										}}
									>
										<span className="font-medium text-gray-950">
											{hobby.title}
										</span>
										<span>{hobby.emoji}</span>
									</div>
								))}
							</div>
						</Card>
						<Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
							<Image
								className="w-full h-full object-cover object-left-top"
								src={mapImage}
								alt="Map image"
							/>
							<div
								className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
						size-20 rounded-full custom-gradient after:content-[''] after:absolute
						after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30"
							>
								<Image
									src={smileMemoji}
									alt="Smiling emoji"
									className="size-20"
								/>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
