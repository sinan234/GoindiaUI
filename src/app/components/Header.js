import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <div className="flex flex-wrap items-center"> 
      <img className="ml-5 h-12 w-16" src="./download.jpeg" alt="Logo" />
      <div className="relative">
        <input
          className="ml-14 bd-lg h-8 bg-gray-200 text-black pl-2 pr-8 rounded-lg search-bar"
          type="text" id="search-bar"
          style={{ width: "600px"  }}
        />
        <FaSearch className="absolute right-1 top-2/4 transform -translate-y-2/4 text-gray-500" />
      </div>
      <h4 className="hidden md:inline-block relative ml-40 text-black text-1xl">Contact Us</h4>
      <button className="hidden md:inline-block relative ml-10 h-8 w-45 px-4 rounded-sm border border-black text-black border-black">SIGN UP</button>
      <button className="hidden md:inline-block relative ml-10 h-8 w-45 px-4 rounded-sm border border-black text-black border-black">SIGN IN</button>
      <div className="w-full"> 
        <div className="bg-[#011425] w-full">
        <div className="flex justify-between">
  <h4 className="font-sans-serif text-sm space-x-7">
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
  </h4>
</div>
 </div>
      </div>
      <div className="w-full">
          <h2 className="text-red-600 text-2xl font-Poppins">FEATURED COMPANIES</h2>
      </div>
      <div className="w-full h-14 bg-blue-100 flex space-x-12">
  <img className="ml-6 h-14 w-19" src="./a.jpg"></img>
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


// import React from "react";
// import { FaSearch } from "react-icons/fa";

// export default function Header() {
//   return (
//     <div className="flex flex-wrap items-center">
//       <div className="flex items-center md:flex md:items-center">
//         <img className="ml-5 h-12 w-16" src="./download.jpeg" alt="Logo" />
//         <div className="relative">
//           <input
//             className="ml-14 bd-lg h-8 bg-gray-200 text-black pl-2 pr-8 rounded-lg "
//             type="text"
//             style={{ width: "100%" }}
//           />
//           <FaSearch className="absolute right-0 top-2/4 transform -translate-y-2/4 text-gray-500" />
//         </div>
//       </div>
//       <h4 className="hidden md:inline-block ml-40 text-black text-1xl">Contact Us</h4>
//       <button className="hidden md:inline-block ml-10 h-8 w-45 px-4 rounded-sm border border-black text-black border-black">SIGN UP</button>
//       <button className="hidden md:inline-block ml-10 h-8 w-45 px-4 rounded-sm border border-black text-black border-black">SIGN IN</button>
//       <div className="w-full">
//         <div className="bg-[#011425] w-full">
//           <div className="flex justify-between">
//             <h4 className="font-sans-serif text-sm space-x-7">
//               <span>0.50</span>
//               <span className="text-red-600">0.21%</span>
//               <span>NIFTYBANK</span>
//               <span>412345</span>
//               <span className="text-green-500">0.01%</span>
//               <span>BAJAJFINANCE</span>
//               <span>654380</span>
//               <span>BHARATIAIRTEL</span>
//               <span>7234</span>
//               <span>HDFCBANK</span>
//               <span>123433</span>
//               <span className="text-red-600">0.40%</span>
//               <span>HINDUUNILVR</span>
//               <span>25557</span>
//               <span className="text-green-500">0.2%</span>
//               <span>INDIGO</span>
//             </h4>
//           </div>
//         </div>
//       </div>
//       <div className="w-full">
//         <h2 className="text-red-600 text-2xl font-Poppins">FEATURED COMPANIES</h2>
//       </div>
//       <div className="w-full h-14 bg-blue-100 flex space-x-12">
//         <img className="ml-6 h-14 w-19" src="./a.jpg" />
//         <img className="h-14 w-19" src="./b.jpg" />
//         <img className="h-14 w-19" src="./c.png" />
//         <img className="h-14 w-19" src="./d.jpg" />
//         <img className="h-14 w-19" src="./e.png" />
//         <img className="h-14 w-19" src="./f.jpg" />
//         <img className="h-14 w-19" src="./f.png" />
//         <img className="h-14 w-19" src="./g.png" />
//       </div>
//     </div>
//   );
// }