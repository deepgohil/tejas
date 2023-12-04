import { TbBrandReact } from "react-icons/tb";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { VscJson } from "react-icons/vsc";
import { RiJavascriptFill } from "react-icons/ri";

import { useActivePage } from "../hooks/useActivePage";

const FileName = ({ icon, fileName }) => {
	const { active, setActive } = useActivePage();

	const handleClick = () => {
		setActive(icon);
	};

	return (
		<li
			className={`px-4 flex items-center gap-1 text-sm xl:text-base xl:gap-3 hover:text-white cursor-pointer ${
				active === icon
					? "bg-[#111418] border-t-2 border-[#b7284a]"
					: ""
			}`}
			onClick={handleClick}
		>
			{fileName === "Home.jsx" && (
				<TbBrandReact style={{ color: "#61dbfb" }} />
			)}
			{fileName === "AboutMe.html" && (
				<FaHtml5 style={{ color: "#e34c26" }} />
			)}
			{fileName === "Experience.json" && (
				<VscJson style={{ color: "#fbe30f" }} />
			)}
			{fileName === "Projects.js" && (
				<RiJavascriptFill style={{ color: "#f4dc54" }} />
			)}

			{fileName === "Socials.css" && (
				<FaCss3Alt style={{ color: "#2c54e4" }} />
			)}
			<span className={`${active === icon ? "text-[#b7284a]" : ""}`}>
				{fileName}
			</span>
		</li>
	);
};

export default FileName;
