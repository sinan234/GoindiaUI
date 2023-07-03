import React from "react";
import { FaSearch } from "react-icons/fa";
import SectorCard from "./SectorCard";
import CompanyCard from "./CompanyCard";

export default function MainContent() {
	return (
		<div className="w-full lg:xl:w-9/12">
			<h2 className="text-xl font-bold bg-blue-900 text-center text-white">
				Discussion Forum
			</h2>
			<div className="p-4 flex flex-col">
				<h3 className="font-semibold text-black text-lg mb-2">Filters</h3>
				<div className="flex justify-center items-center space-x-2  bg-white rounded-md border border-gray-300 ">
					<SectorCard color="bg-red-600" value="Sector-1" />
					<SectorCard color="bg-blue-500" value="Sector-2" />
					<SectorCard color="bg-yellow-400" value="Sector-3" />

					<div className="bg-white rounded-full  p-2 flex items-center">
						<FaSearch className="text-gray-500 mr-2" />
						<input
							className="bg-gray-300 w-28 py-0 px-2 text-black rounded-full"
							placeholder="Search here"
						/>
					</div>
				</div>
			</div>

			<div className="flex flex-col space-y-4 px-2">
				<CompanyCard img="./1a.png" />
				<CompanyCard img="./1b.jpg" />
				<CompanyCard img="./g.png" />
			</div>
		</div>
	);
}
