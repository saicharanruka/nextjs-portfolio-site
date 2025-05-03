import type { Metadata } from "next";
import { Poppins, Lato } from "next/font/google";
import "./globals.css";

import Navbar from "./sections/NavbarSection";

const lato = Lato({
	subsets: ["latin"],
	variable: "--font-secondary",
	weight: "400",
});

const playfair_display = Poppins({
	subsets: ["latin"],
	variable: "--font-primary",
	weight: "400",
});

export const metadata: Metadata = {
	title: "Portfolio Site",
	description: "A developer portfolio site made in Next JS",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${playfair_display.variable} ${lato.variable} antialiased bg-gray-900 text-white font-secondary`}
			>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
