import Project from "../components/Project";

const projs = [
	{
		image: "das-hotel.png",
		title: "Das Hotel",
		description:
			"React App that leverages Supabase for efficient storage of hotel bookings, cabins data, and employee accounts.",
		tags: ["React", "Supabase", "Redux", "React Query"],
		url: "https://das-hotel.vercel.app/",
	},
	{
		image: "natours.png",
		title: "Natours API",
		description:
			"Backend with Database encompassing a comprehensive range of 20+ RESTful API routes for streamlined  tour management.",
		tags: ["Node", "Expressjs", "AWS", "MongoDB"],
		url: "https://documenter.getpostman.com/view/25621285/2s93mBwyri",
	},
	{
		image: "sliced.png",
		title: "Sliced",
		description:
			"Pizza ordering app with beautiful UI built with Tailwind CSS",
		tags: ["React", "Redux-Toolkit", "Tailwind"],
		url: "https://sliced-tejas.netlify.app/",
	},
	{
		image: "lizard-spock-rock.png",
		title: "Lizard-Spock-Rock",
		description:
			"Simple Rock-Paper-Scissors game with a twist. Inspired by The Big Bang Theory show.",
		tags: ["HTML", "CSS", "JS"],
		url: "https://spock-rock-tejas.netlify.app/",
	},
];

const Projects = () => {
	return (
		<div className="w-full flex-grow pl-2 xl:pt-2 md:pl-4 md:pt-8 grid pt-8 grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4 md:gap-2 items-center justify-items-center overflow-y-auto">
			{projs.map((proj, i) => (
				<Project
					key={i}
					image={proj.image}
					title={proj.title}
					description={proj.description}
					tags={proj.tags}
					url={proj.url}
				/>
			))}
		</div>
	);
};

export default Projects;
