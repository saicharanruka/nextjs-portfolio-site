import Hero from "./sections/HeroSection";
import Projects from "./sections/ProjectsSection";
import TapeSection from "./sections/TapeSection";
import TestimonialsSection from "./sections/TestimonialsSection";

export default function Home() {
	return (
		<div>
			<Hero />
			<Projects />
			<TapeSection />
			<TestimonialsSection />
		</div>
	);
}
