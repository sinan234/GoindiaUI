import { HiOutlineUser, HiOutlineChat, HiOutlineCash, HiOutlineBell, HiOutlineViewList, HiOutlineGlobe, HiOutlineEye, HiOutlineCalendar, HiOutlineNewspaper, HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { useState } from 'react';


export default function Sidebar() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className=" h-screen flex">
      {isSidebarVisible && (
        <div className="h-screen w-60 bg-[#093967] text-white p-4" style={{position:'relative'}}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <HiOutlineUser className="mr-2" />
            <button className="hover:bg-white hover:text-[#093967] transition-colors duration-300">Hello User</button>
          </div>
          <HiOutlineBell />
        </div>
        <hr className="border-white mb-4" />
        <button className="flex items-center hover:bg-white hover:text-[#093967] transition-colors duration-300 mb-4">
          <HiOutlineChat className="mr-2" />
          <span>Discussion Forum</span>
        </button>
        <button className="flex items-center hover:bg-white hover:text-[#093967] transition-colors duration-300">
          <HiOutlineCash className="mr-2" />
          <span>Market Stories</span>
        </button>
        <button className="flex items-center hover:bg-white hover:text-[#093967] transition-colors duration-300 mt-4">
          <HiOutlineGlobe className="mr-2" />
          <span>Market</span>
        </button>
        <button className="flex items-center hover:bg-white hover:text-[#093967] transition-colors duration-300 mt-4">
          <HiOutlineViewList className="mr-2" />
          <span>Sector</span>
        </button>
        <button className="flex items-center hover:bg-white hover:text-[#093967] transition-colors duration-300 mt-4">
          <HiOutlineEye className="mr-2" />
          <span>Watchlist</span>
        </button>
        <button className="flex items-center hover:bg-white hover:text-[#093967] transition-colors duration-300 mt-4">
          <HiOutlineCalendar className="mr-2" />
          <span>Events</span>
        </button>
        <button className="flex items-center hover:bg-white hover:text-[#093967] transition-colors duration-300 mt-4">
          <HiOutlineNewspaper className="mr-2" />
          <span>News/Interview</span>
        </button>
      </div>
    )}
      <button 
        onClick={toggleSidebar} 
        className={`px-2 py-10 rounded-md h-23 w-8 mb-36 bg-[#093967] ${isSidebarVisible ? 'relative left-0 h-15' : 'absolute left-0 h-15'} self-center`}
      >
        <HiOutlineArrowNarrowRight  className={`${isSidebarVisible ? 'transform rotate-180' : ''}`} />
      </button>
    </div>
  );
}
