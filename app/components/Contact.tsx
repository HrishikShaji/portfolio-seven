
import { data } from "../lib/data";

export const Contact = () => {
	return (
		<div className="h-screen w-full bg-teal-300 text-black flex justify-center items-center">
			<div className="h-[60vh] w-[60vw] flex">
				<div className="flex-1 bg-purple-500 h-full">
					<h1 className="text-6xl text-white">PROJECTS</h1>
				</div>
				<div className="flex-1 bg-pink-500 h-full">
					<form className="flex flex-col gap-2">
						<div className="flex flex-col gap-1">
							<label>Name</label>
							<input className="p-1 rounded-md" />
						</div>
						<div className="flex flex-col gap-1">
							<label>Email</label>
							<input className="p-1 rounded-md" />
						</div>
						<div className="flex flex-col gap-1">
							<label>Message</label>
							<textarea className="p-1 rounded-md" />
						</div>
						<button>SEND</button>
					</form>
				</div>
			</div>
		</div>
	);
};
