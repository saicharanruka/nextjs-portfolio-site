import grainImage from "@/app/assets/images/grain.jpg";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const Card = ({
	className,
	children,
}: PropsWithChildren<{ className?: string }>) => {
	return (
		<div
			className={twMerge(
				"overflow-hidden bg-gray-800 rounded-3xl gap-5 relative z-0 after:content-[''] after:absolute    after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:z-10 after:pointer-events-none after:outline-white/20",
				className
			)}
		>
			<div
				className="absolute inset-0 -z-30 opacity-5"
				style={{
					backgroundImage: `url(${grainImage.src})`,
				}}
			></div>
			{children}
		</div>
	);
};

export default Card;

// Testimonial Padding
// pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 px-8
