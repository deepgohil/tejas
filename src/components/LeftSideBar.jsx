import SideBarIcon from "./SideBarIcon";

const LeftSideBar = () => {
	return (
		<div className="row-start-2 h-full w-8 xl:w-12">
			<ul className="flex flex-col gap-1 xl:gap-3">
				<li>
					<SideBarIcon icon={"Home"} />
				</li>
				<li>
					<SideBarIcon icon={"About Me"} />
				</li>
				<li>
					<SideBarIcon icon={"Work Experience"} />
				</li>
				<li>
					<SideBarIcon icon={"My Projects"} />
				</li>
				<li>
					<SideBarIcon icon={"Contact Me"} />
				</li>
			</ul>
		</div>
	);
};

export default LeftSideBar;
