import FileBar from "./FileBar";
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
import ContactMe from "../pages/ContactMe";
import { useActivePage } from "../hooks/useActivePage";

const ViewPage = () => {
	const { active } = useActivePage();

	return (
		<div className="row-start-2 w-full overflow-hidden h-full flex flex-col bg-[#111418]">
			<FileBar />
			{active === "Home" && <Home />}
			{active === "About Me" && <AboutMe />}
			{active === "Work Experience" && <Experience />}
			{active === "My Projects" && <Projects />}
			{active === "Contact Me" && <ContactMe />}
		</div>
	);
};

export default ViewPage;
