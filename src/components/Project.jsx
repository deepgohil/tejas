function Project({ image, title, description, tags, url }) {
	return (
		<a href={url} target="_blank" rel="noopener noreferrer">
			<div className="w-64 h-80 xl:h-96 rounded bg-[#241e29] text-[whitesmoke] place-self-center flex flex-col cursor-pointer ">
				<img src={image} alt={title} className="w-full rounded" />
				<div className="px-4 py-2">
					<div className="font-bold text-sm mb-2 xl:text-base">
						{title}
					</div>
					<p className="text-xs xl:text-sm">{description}</p>
				</div>
				<div className="px-2 mt-auto mb-4 mx-auto">
					{tags.map((tag, index) => (
						<span
							key={index}
							className="inline-block rounded-full px-1 xl:px-3 py-0.5 text-xs xl:text-sm font-semibold mr-2 border-2 m-1"
						>
							{tag}
						</span>
					))}
				</div>
			</div>
		</a>
	);
}

export default Project;
