import memojiAvatar1 from "@/app/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/app/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/app/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/app/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/app/assets/images/memoji-avatar-5.png";
import Image from "next/image";

import SectionHeader from "../components/SectionHeader";
// import grainImage from "@/app/assets/images/grain.jpg";
import Card from "../components/card/Card";
import { Fragment } from "react";

const testimonials = [
	{
		name: "Alex Turner",
		position: "Marketing Manager @ TechStartups",
		text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
		avatar: memojiAvatar1,
	},
	{
		name: "Olivia Green",
		position: "Head of Design @ GreenLeaf",
		text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
		avatar: memojiAvatar2,
	},
	{
		name: "Daniel White",
		position: "CEO @ InnovateCo",
		text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
		avatar: memojiAvatar3,
	},
	{
		name: "Emily Carter",
		position: "Product Manager @ GlobalTech",
		text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
		avatar: memojiAvatar4,
	},
	{
		name: "Michael Brown",
		position: "Director of IT @ MegaCorp",
		text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
		avatar: memojiAvatar5,
	},
];

const TestimonialsSection = () => {
	return (
		<section className="py-16 lg:py-24">
			<SectionHeader
				tagline="Real-world results"
				heading="Featured Projects"
				para="See how I transformed concepts into engaging digital experiences"
			/>
			<div className="mt-12 lg:mt-20 flex overflow-x-clip container [mask-image:linear-gradient(to_right,_transparent,_black_10%,_black_90%,_transparent)] py-4 group ">
				<div className="flex gap-32 flex-none animate-move-left [animation-duration:60s] hover:[animation-play-state:paused] pr-32">
					{[...new Array(2)].fill(0).map((_, idx) => (
						<Fragment key={idx}>
							{testimonials.map((testimonial) => (
								<Card
									key={testimonial.name}
									className="max-w-xs md:p-8 md:max-w-md p-6 hover:-rotate-1 transition duration-300"
								>
									<div className="flex items-center gap-2">
										<div className="size-14 bg-gray-700 inline-flex flex-shrink-0 rounded-full">
											<Image
												src={testimonial.avatar}
												alt={testimonial.name}
												className="max-h-full"
											/>
										</div>

										<div className="flex flex-col p-2">
											<div className="text-xl font-semibold font-primary">
												{testimonial.name}
											</div>
											<div className="text-sm text-white/40">
												{testimonial.position}
											</div>
										</div>
									</div>

									<div className="mt-4 md:mt-6 text-sm md:text-base">
										{testimonial.text}
									</div>
								</Card>
							))}
						</Fragment>
					))}
				</div>
			</div>
		</section>
	);
};

export default TestimonialsSection;
