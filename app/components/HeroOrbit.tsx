import React, { PropsWithChildren } from "react";

const HeroOrbit = ({
	children,
	size,
	rotation,
}: PropsWithChildren<{ size: number; rotation: number }>) => {
	return (
		<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
			<div
				className=" border-red-500"
				style={{
					transform: `rotate(${rotation}deg)`,
					height: `${size}px`,
					width: `${size}px`,
				}}
			>
				<div
					className="border-red-500 inline-flex "
					style={{
						transform: `rotate(${180 - rotation}deg)`,
					}}
				>
					{children}
				</div>
			</div>
		</div>
	);
};

export default HeroOrbit;
