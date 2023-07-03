import ImageCard from "./ImageCard";

export default function News() {
	return (
		<div className="flex flex-col space-y-4 my-4 items-center relative w-full md:xl:my-0 md:xl:w-12 lg:xl:my-0 lg:xl:w-3/12">
			<h2 className="text-xl font-bold bg-blue-900 text-center text-white w-full">
				MARKET STORIES
			</h2>

			<div className="flex flex-col justify-center w-full px-6 space-y-6">
				<ImageCard />
				<ImageCard />
				<ImageCard />
			</div>
		</div>
	);
}
