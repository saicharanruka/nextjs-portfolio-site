import About from "./sections/About";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Tape from "./sections/Tape";
import Testimonials from "./sections/Testimonials";
import CallToAction from "./sections/CallToAction";

export default function Home() {
	return (
		<div>
			<Hero />
			<Projects />
			<Tape />
			<Testimonials />
			<About />
			<CallToAction />
		</div>
	);
}
