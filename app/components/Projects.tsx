import { data } from "../lib/data";

export const Projects = () => {
	return (
		<div className="h-screen w-full bg-teal-300 text-black flex justify-center items-center">
			<div className="h-[60vh] w-[60vw] flex">
				<div className="flex-1 bg-purple-500 h-full">
					<h1 className="text-6xl text-white">PROJECTS</h1>
				</div>
				<div className="flex-1 bg-pink-500 h-full">
					{data.projects.data.map((item, i) => (
						<h1 key={i}>{item.title}</h1>
					))}
				</div>
			</div>
		</div>
	);
};
