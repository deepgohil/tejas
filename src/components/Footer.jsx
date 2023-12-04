import {
	VscBell,
	VscCheckAll,
	VscError,
	VscRemote,
	VscSourceControl,
	VscWarning,
} from "react-icons/vsc";
import { TbBrandReact } from "react-icons/tb";

const Footer = () => {
	return (
		<div className="col-span-2 h-6 flex gap-2 text-sm items-center">
			<div className="bg-[#b7284a] text-[#111418] h-full flex items-center justify-center w-8">
				<VscRemote />
			</div>
			<div className="flex items-center gap-1 cursor-pointer">
				<VscSourceControl /> main
			</div>
			<div className="flex items-center gap-1 cursor-pointer">
				<VscError /> 0
			</div>
			<div className="flex items-center gap-1 cursor-pointer">
				<VscWarning /> 0
			</div>
			<div className="flex items-center gap-3 ml-auto">
				<div className="md:flex items-center gap-1 cursor-pointer hidden">
					<TbBrandReact /> Powered By React
				</div>
				<div className="flex items-center gap-1 cursor-pointer">
					<VscCheckAll /> Prettier
				</div>
				<VscBell style={{ marginRight: "0.4rem", cursor: "pointer" }} />
			</div>
		</div>
	);
};

export default Footer;
