import { HiOutlineCode, HiOutlineHome } from "react-icons/hi";
import { MdOutlineWorkHistory } from "react-icons/md";
import { BiMailSend } from "react-icons/bi";
import { GoPerson } from "react-icons/go";

import { useActivePage } from "../hooks/useActivePage";

const SideBarIcon = ({ icon }) => {
	const { active, setActive } = useActivePage();

	const handleClick = () => {
		setActive(icon);
	};

	return (
		<div
			className={`py-2 px-1 flex justify-center text-3xl cursor-pointer hover:text-[#b7284a] ${
				active === icon
					? "text-[#b7284a] border-l-2 xl:border-l-4 border-[#b7284a]"
					: ""
			}`}
			onClick={handleClick}
		>
			{icon === "Home" && <HiOutlineHome />}
			{icon === "About Me" && <GoPerson />}
			{icon === "Work Experience" && <MdOutlineWorkHistory />}
			{icon === "My Projects" && <HiOutlineCode />}
			{icon === "Contact Me" && <BiMailSend />}
		</div>
	);
};

export default SideBarIcon;
