import { FaComment, FaEye, FaHeart, FaShare, FaUserAlt } from "react-icons/fa";

export default function CompanyCard({ img }) {
	return (
		<div className="flex-grow bg-white p-4 border shadow-lg w-full">
			<div className="flex flex-col items-center">
				<img className="p-4 h-50 w-70" src={img} alt="Post image" />
				<div className="flex space-x-2 justify-start items-center">
					<FaUserAlt className="text-blue-800 h-5 w-5" />
					<h2 className="text-black">Lorem Ipsum</h2>
					<button className="bg-red-600 px-2 py-1 text-white rounded-full text-xs">
						Sector 1
					</button>
				</div>
				<p className="text-black text-sm mt-2">
					Many of life&apos;s failures are people who how close they were to
					success when they gave up
				</p>
				<div className="flex items-center my-4">
					<FaHeart className="text-red-600 mr-2" />
					<span className="text-gray-500 text-sm mr-4">2k</span>
					<FaEye className="text-red-600 mr-2" />
					<span className="text-gray-500 text-sm mr-4">2k</span>
					<FaComment className="text-red-600 mr-2" />
					<span className="text-gray-500 text-sm mr-4">2k</span>
					<FaShare className="text-red-600 mr-2" />
					<span className="text-gray-500 text-sm">Share</span>
				</div>
			</div>
		</div>
	);
}
