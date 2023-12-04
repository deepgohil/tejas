import FileName from "./FileName";

// Statics
const sidebarIcons = [
	"Home",
	"About Me",
	"Work Experience",
	"My Projects",
	"Contact Me",
];
const fileNames = [
	"Home.jsx",
	"AboutMe.html",
	"Experience.json",
	"Projects.js",
	"Socials.css",
];

const FileBar = () => {
	return (
		<div className="bg-[#0c0f11] h-8  overflow-x-auto">
			<ul className="flex h-full">
				{fileNames.map((file, i) => (
					<FileName key={i} icon={sidebarIcons[i]} fileName={file} />
				))}
			</ul>
		</div>
	);
};

export default FileBar;
