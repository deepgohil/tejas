const ContactMe = () => {
	return (
		<div className="w-full flex-grow pl-2 pt-2 md:pl-4 md:pt-4 text-base md:text-xl">
			<span className="text-[#35a7ad]">{".socials"}</span>{" "}
			<span className="text-[#ab7611]">{"{"}</span> <br />
			<section className="pl-8">
				<span className="text-[whitesmoke]">{"email"}</span>{" "}
				<span className="text-[#55575c]">:</span>{" "}
				<a
					className="text-[#b56815] cursor-pointer hover:underline hover:underline-offset-2"
					href="mailto:tjspatade@gmail.comsubject=Subject%20Here&body=Hello%20from%20my%20website!"
					target="_blank"
					rel="noopener noreferrer"
				>
					{"tjspatade@gmail.com"}
				</a>
				<span className="text-[#55575c]">;</span>
				<br />
				<span className="text-[whitesmoke]">{"linkedin"}</span>{" "}
				<span className="text-[#55575c]">:</span>{" "}
				<a
					className="text-[#b56815] cursor-pointer hover:underline hover:underline-offset-2"
					href="https://www.linkedin.com/in/tejpatade/"
					target="_blank"
					rel="noopener noreferrer"
				>
					{"tejpatade"}
				</a>
				<span className="text-[#55575c]">;</span>
				<br />
				<span className="text-[whitesmoke]">{"github"}</span>{" "}
				<span className="text-[#55575c]">:</span>{" "}
				<a
					className="text-[#b56815] cursor-pointer hover:underline hover:underline-offset-2"
					href="https://github.com/Tejaspatade"
					target="_blank"
					rel="noopener noreferrer"
				>
					{"Tejaspatade"}
				</a>
				<span className="text-[#55575c]">;</span>
				<br />
				<span className="text-[whitesmoke]">{"leetcode"}</span>{" "}
				<span className="text-[#55575c]">:</span>{" "}
				<a
					className="text-[#b56815] cursor-pointer hover:underline hover:underline-offset-2"
					href="https://leetcode.com/TejSus/"
					target="_blank"
					rel="noopener noreferrer"
				>
					{"TejSus"}
				</a>
				<span className="text-[#55575c]">;</span>
			</section>
			<span className="text-[#ab7611]">{"}"}</span>
		</div>
	);
};

export default ContactMe;
