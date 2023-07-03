export default function ImageCard() {
	return (
		<div className="relative w-full rounded-2xl">
			<img className="h-17 w-full rounded-2xl" src="./2.jpg" />
			<div className="absolute bottom-4 flex items-center justify-center px-4">
				<p className="text-white font-semibold text-sm px-2 mt-5">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry
				</p>
			</div>
		</div>
	);
}
