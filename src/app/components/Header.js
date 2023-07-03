import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Header() {
	return (
		<div className="flex flex-col items-center w-full">
			<div className="flex w-full justify-between bg items-center ">
				<img className="h-12 w-2/12" src="./download.jpeg" alt="Logo" />
				<div className="relative w-9/12 lg:xl:w-5/12">
					<input className="h-8 bg-gray-200 text-black px-2 py- 2 rounded-lg w-full" />
					<FaSearch className="absolute right-10 top-2/4 transform -translate-y-2/4 text-gray-500" />
				</div>
				<div className="hidden lg:xl:flex lg:xl:w-5/12 justify-end">
					<h4 className=" ml-40 text-black text-1xl">Contact Us</h4>
					<button className=" ml-10 h-8 w-45 px-4 rounded-sm border border-black text-black ">
						SIGN UP
					</button>
					<button className=" ml-10 h-8 w-45 px-4 rounded-sm border  text-black border-black">
						SIGN IN
					</button>
				</div>
			</div>

			<div
				className="flex space-x-4 text-xs w-full bg-[#011425] text-white overflow-x-scroll lg:xl:justify-between 
      lg:xl:overflow-hidden 
      lg:xl:px-10"
			>
				<span>0.50</span>
				<span className="text-red-600">0.21%</span>
				<span>NIFTYBANK</span>
				<span>412345</span>
				<span className="text-green-500">0.01%</span>
				<span>BAJAJFINANCE</span>
				<span>654380</span>
				<span>BHARATIAIRTEL</span>
				<span>7234</span>
				<span>HDFCBANK</span>
				<span>123433</span>
				<span className="text-red-600">0.40%</span>
				<span>HINDUUNILVR</span>
				<span>25557</span>
				<span className="text-green-500">0.2%</span>
				<span>INDIGO</span>
			</div>

			<div className="w-full hidden">
				<h2 className="text-red-600 text-2xl font-Poppins">
					FEATURED COMPANIES
				</h2>
			</div>

			<div className="w-full h-14 bg-blue-100 flex space-x-12 overflow-x-scroll px-10 lg:xl:justify-between lg:xl:overflow-hidden">
				<img className="h-14 w-19" src="./a.jpg"></img>
				<img className="h-14 w-19" src="./b.jpg"></img>
				<img className="h-14 w-19" src="./c.png"></img>
				<img className="h-14 w-19" src="./d.jpg"></img>
				<img className="h-14 w-19" src="./e.png"></img>
				<img className="h-14 w-19" src="./f.jpg"></img>
				<img className="h-14 w-19" src="./f.png"></img>
				<img className="h-14 w-19" src="./g.png"></img>
			</div>
		</div>
	);
}
