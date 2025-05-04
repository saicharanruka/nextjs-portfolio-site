import StarIcon from "@/app/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";

const CardHeader = ({
	heading,
	text,
	className,
}: {
	heading: string;
	text: string;
	className?: string;
}) => {
	return (
		<div className={twMerge("flex flex-col p-6  ", className)}>
			<div className="inline-flex gap-2 items-center">
				<StarIcon className="size-9 text-emerald-300" />
				<h3 className="text-3xl font-semibold font-primary capitalize">
					{heading}
				</h3>
			</div>
			<p className="text-sm text-white/60 mt-2 lg:text-base lg:max-w-lg">
				{text}
			</p>
		</div>
	);
};

export default CardHeader;
