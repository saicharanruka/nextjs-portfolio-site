import memeojiImage from "@/app/assets/images/memoji-computer.png";
import grainImage from "@/app/assets/images/grain.jpg";
import StarIcon from "@/app/assets/icons/star.svg";
import SparkleIcon from "@/app/assets/icons/sparkle.svg";

// import helloSpeechBubble from "@/app/assets/images/pixel-speech-bubble.png";

import Image from "next/image";
import HeroOrbit from "../components/HeroOrbit";

const Hero = () => {
	return (
		<section className="py-32 md:py-48 lg:py-64 relative z-0 overflow-x-clip">
			<div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,_transparent,_black_10%,_black_70%,_transparent)]">
				<div
					className="absolute inset-0 -z-30 opacity-5"
					style={{ backgroundImage: `url(${grainImage.src})` }}
				></div>
				<div className="size-[620px] hero-ring"></div>
				<div className="size-[820px] hero-ring"></div>
				<div className="size-[1020px] hero-ring"></div>
				<div className="size-[1220px] hero-ring"></div>
				<HeroOrbit size={800} rotation={-72}>
					<StarIcon className="size-28 text-emerald-300" />
				</HeroOrbit>
				<HeroOrbit size={550} rotation={20}>
					<StarIcon className="size-12 text-emerald-300" />
				</HeroOrbit>
				<HeroOrbit size={590} rotation={98}>
					<StarIcon className="size-8 text-emerald-300" />
				</HeroOrbit>
				<HeroOrbit size={430} rotation={-20}>
					<SparkleIcon className="size-8 text-emerald-300/30" />
				</HeroOrbit>
				<HeroOrbit size={440} rotation={75}>
					<SparkleIcon className="size-5 text-emerald-300/30" />
				</HeroOrbit>
				<HeroOrbit size={500} rotation={180}>
					<SparkleIcon className="size-10 text-emerald-300/30" />
				</HeroOrbit>
				<HeroOrbit size={710} rotation={147}>
					<SparkleIcon className="size-14 text-emerald-300/30" />
				</HeroOrbit>
				<HeroOrbit size={720} rotation={85}>
					<div className="size-3 rounded-full bg-emerald-300/30"></div>
				</HeroOrbit>
				{/* Add more circles */}
			</div>
			<div className="container">
				<div className="flex flex-col justify-center items-center mb-4">
					<Image
						src={memeojiImage}
						className="size-[100px]"
						alt="Computer memoji"
					/>
					<div className="bg-gray-950 border rounded-lg border-gray-800 px-4 py-1.5 inline-flex items-center gap-2 shadow-lg shadow-neutral-900">
						<div className="relative flex size-2.5 ">
							<span className="absolute inline-flex h-full w-full animate-ping duration-500 rounded-full bg-red-400 opacity-75"></span>
							<span className="relative inline-flex size-2.5 rounded-full bg-red-500"></span>
						</div>
						<div className="text-md font-semibold">
							On a break <span className="text-xl">🛫</span>
						</div>
					</div>
				</div>
				<div className="max-w-lg mx-auto">
					<h1 className="font-primary font-semibold md:text-5xl text-3xl text-center mt-8 tracking-wide">
						Building Exception User Experiences
					</h1>
					<p className="mt-4 text-center text-white/60 md:text-lg">
						I specialize in building beautiful high-performing websites that
						drive in more customers, boosting your business even further
					</p>
				</div>
				<div className="flex flex-col md:flex-row py-4  items-center mt-8 gap-4 justify-center">
					<button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
						<span className="font-semibold">Explore My Work</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="size-4"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
							/>
						</svg>
					</button>
					<button className="inline-flex items-center gap-2 px-6 h-12 rounded-xl bg-white text-gray-900 border border-white/50">
						<span>👋</span>
						<span className="font-semibold">Let&apos;s Connect</span>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
