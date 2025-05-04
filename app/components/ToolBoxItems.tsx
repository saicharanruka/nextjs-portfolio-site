import React from "react";
import TechIcon from "../components/TechIcon";
import { twMerge } from "tailwind-merge";

const ToolBoxItems = ({
	items,
	className,
	itemsWrapperClassName,
}: {
	items: { title: string; icons: React.ElementType }[];
	className?: string;
	itemsWrapperClassName?: string;
}) => {
	return (
		<div
			className={twMerge(
				"flex py-0.5  [mask-image:linear-gradient(to_right,_transparent,_black_10%,_black_90%,_transparent)]",
				className
			)}
		>
			<div
				className={twMerge(
					"flex py-0.5 flex-none gap-6 pr-6",
					itemsWrapperClassName
				)}
			>
				{items.map((item) => (
					<div
						key={item.title}
						className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
					>
						<span className="">
							<TechIcon component={item.icons} />
						</span>
						<span className="font-semibold">{item.title}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default ToolBoxItems;
