const AboutMe = () => {
	return (
		<div className="w-full flex-grow pl-2 pt-2 md:pl-4 md:pt-4 relative overflow-y-scroll">
			<div className="hidden md:right-12 md:top-2 md:absolute">
				<span className="text-[red]">{"<img>"}</span> <br />
				<img src="me.jpg" alt="My Pic" className="w-44" />
				<span className="text-[red] ml-auto">{"</img>"}</span>
			</div>
			<span className="text-[red]">{"<html "}</span>
			<span className="text-[#ab7611]">{"lang="}</span>
			<span className="text-[#088d79]">{"'en'"}</span>
			<span className="text-[red]">{">"}</span> <br />
			<span className="text-[red]">{"<head>"}</span> <br />
			<section className="pl-4 md:pl-8">
				<span className="text-[red]">{"<title "}</span>
				<span className="text-[#ab7611]">{"style="}</span>
				<span className="text-[#088d79]">{"'font-size:1.8rem;'"}</span>
				<span className="text-[red]">{">"}</span>
				<span className="text-xl md:text-3xl px-2">About Me</span>
				<span className="text-[red]">{"</title>"}</span>
			</section>
			<section className="pl-4 md:pl-8">
				<span className="text-[red]">{"<name>"}</span>
				<span className="text-lg px-2">Tejas Patade</span>
				<span className="text-[red]">{"</name>"}</span>
			</section>
			<section className="pl-4 md:pl-8">
				<span className="text-[red]">{"<location>"}</span>
				<span className="text-lg px-2">Mumbai, India</span>
				<span className="text-[red]">{"</location>"}</span>
			</section>
			<section className="pl-4 md:pl-8">
				<span className="text-[red]">{"<age>"}</span>
				<span className="text-lg px-2">20</span>
				<span className="text-[red]">{"</age>"}</span>
			</section>
			<span className="text-[red]">{"</head>"}</span> <br />
			<span className="text-[red]">{"<body>"}</span>
			{/*  */}
			<section className="pl-4 md:pl-8">
				<span className="text-[red]">{"<p>"}</span>
				<p className="pl-8">
					Well, I consider myself a lucky and accidental engineer. I
					didnt inherently have an interest/knack for programming &
					didnt even feel comfortable using the computer. However, in
					the third semester of my diploma, I had the privilege of
					meeting an amazing professor who taught us C language, and
					things took a turn for good. Her teaching style sparked a
					passion and deep interest for coding that I have never
					regretted since.
				</p>
				<span className="text-[red]">{"</p>"}</span>
			</section>
			{/*  */}
			<section className="pl-8">
				<span className="text-[red]">{"<p>"}</span>
				<p className="pl-8">
					Apart from coding, my other interests include music, playing
					the guitar🎸, reading books on entrepreneurship and reading
					biographies of entrepreneurs. I can solve 2 types of
					Rubik&apos;s cube(that too within a minute🤓). Love all
					things Hollywood, be it Netflix original series, Marvel
					superhero movies, or some documentary. A keen follower of
					Simon Sinek&apos;s Infinite Mindset🔆.
				</p>
				<span className="text-[red]">{"</p>"}</span>
			</section>
			{/*  */}
			<footer className="pl-8">
				<span className="text-[red]">{"<footer>"}</span>
				<p className="pl-8">
					Overall, I believe that my unique journey has given me a
					unique perspective that I can bring to any new challenges
					that come my way. I am excited to see what the future holds
					and eager to contribute my skills and expertise to any
					organization that values creativity, hard work, and a
					thoughtful approach to problem-solving.
				</p>
				<span className="text-[red]">{"</footer>"}</span>
			</footer>
			<span className="text-[red]">{"</body>"}</span>
			<br />
			<span className="text-[red]">{"</html>"}</span>
		</div>
	);
};

export default AboutMe;
