"use client";
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import MainContent from "./components/main";
import News from "./components/News";
export default function Home() {
	return (
		<div className="bg-gray-50 min-h-screen flex flex-col relative">
			<Header />
			<div className="flex flex-col w-full lg:xl:flex-row">
				<Sidebar />
				<MainContent />
				<News />
			</div>
		</div>
	);
}
