import React from "react";
import { FaSearch } from 'react-icons/fa'; 
import {  FaHeart, FaEye, FaComment, FaShare } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

export default function MainContent() {
    return (
      <div className="flex-grow bg-white p-4 border border-gray-300 m-4 shadow-lg   mr-54   " style={{overflowY: 'scroll'}}>
        <h2 className="text-red-600 text-2xl font-Poppins">DISCUSSION FORUM </h2>
        <div className="bg-white rounded-md border border-gray-300 p-4">
          <h3 className="font-semibold text-black text-lg mb-2">Filters</h3>
          <div className="flex space-x-4 w-30">
            <div className="bg-white rounded-full   p-2">
              <button className="bg-red-600 px-2 py-0 text-white rounded-full">Sector 1</button>
            </div>
            <div className="bg-white rounded-full  p-2">
              <button className="bg-blue-600 px-3 py-0 text-white rounded-full">Sector 2</button>
            </div>
            <div className="bg-white rounded-full  p-2">
              <button className="bg-yellow-400 px-3 py-0 text-white rounded-full">Sector 3</button>
            </div>
            <div className="bg-white rounded-full  p-2 flex items-center">
              <FaSearch className="text-gray-500 mr-2" />
              <input className="bg-gray-300 w-28 py-0 px-2 text-black rounded-full" placeholder="Search here" />
            </div>
          </div>
        </div>
        
    <div className="flex-grow bg-white p-4 border border-gray-300 m-4 shadow-lg  ">
     <div className="flex flex-col items-center">
        <img className="p-4 h-50 w-70" src="./1a.png" alt="Post image" />
        <div className="flex space-x-2 justify-start items-center">
          <FaUserAlt className="text-blue-800 h-5 w-5"/>
          <h2 className="text-black">Lorem Ipsum</h2>
          <button className="bg-red-600 px-2 py-1 text-white rounded-full text-xs">Sector 1</button>
        </div>
        <p className="text-black text-sm mt-2">Many of life’s failures are people who how close they were to success when they gave up</p>
        <div className="flex items-center my-4">
          <FaHeart className="text-red-600 mr-2" />
          <span className="text-gray-500 text-sm mr-4">2k Likes</span>
          <FaEye className="text-red-600 mr-2" />
          <span className="text-gray-500 text-sm mr-4">2k Views</span>
          <FaComment className="text-red-600 mr-2" />
          <span className="text-gray-500 text-sm mr-4">2k Comments</span>
          <FaShare className="text-red-600 mr-2" />
          <span className="text-gray-500 text-sm">Share</span>
    
        </div>
      </div>
    </div>
     
    <div className="flex-grow bg-white p-4 border border-gray-300 m-4 shadow-lg  ">
     <div className="flex flex-col items-center">
        <img className="p-4 h-50 w-70" src="./1b.jpg" alt="Post image" />
        <div className="flex space-x-2 justify-start items-center">
          <FaUserAlt className="text-blue-800 h-5 w-5"/>
          <h2 className="text-black">Lorem Ipsum</h2>
          <button className="bg-blue-600 px-2 py-1 text-white rounded-full text-xs">Sector 2</button>
        </div>
        <p className="text-black text-sm mt-2">Everybody wants to be famous, but nobody wants to do the work. I live by that. You grind hard so you can play hard. At the end of the day, you put all the work in, and eventually it’ll pay off. It could be in a year, it could be in 30 years. Eventually, your hard work will pay off.</p>
        <div className="flex items-center my-4">
          <FaHeart className="text-red-600 mr-2" />
          <span className="text-gray-500 text-sm mr-4">1.5k Likes</span>
          <FaEye className="text-red-600 mr-2" />
          <span className="text-gray-500 text-sm mr-4">2k Views</span>
          <FaComment className="text-red-600 mr-2" />
          <span className="text-gray-500 text-sm mr-4">1k Comments</span>
          <FaShare className="text-red-600 mr-2" />
          <span className="text-gray-500 text-sm">Share</span>
    
        </div>
      </div>
    </div>
    
    <div className="flex-grow bg-white p-4 border border-gray-300 m-4 shadow-lg  ">
     <div className="flex flex-col items-center">
        <img className="p-4 h-50 w-70" src="./g.png" alt="Post image" />
        <div className="flex space-x-2 justify-start items-center">
          <FaUserAlt className="text-blue-800 h-5 w-5"/>
          <h2 className="text-black">Lorem Ipsum</h2>
          <button className="bg-yellow-400 px-2 py-1 text-white rounded-full text-xs">Sector 3</button>
        </div>
        <p className="text-black text-sm mt-2">Watch your thoughts; they become words. Watch your words; they become actions. Watch your actions; they become habits. Watch your habits; they become character. Watch your character; it becomes your destiny.</p>
        <div className="flex items-center my-4">
          <FaHeart className="text-red-600 mr-2" />
          <span className="text-gray-500 text-sm mr-4">1.5k Likes</span>
          <FaEye className="text-red-600 mr-2" />
          <span className="text-gray-500 text-sm mr-4">2k Views</span>
          <FaComment className="text-red-600 mr-2" />
          <span className="text-gray-500 text-sm mr-4">1k Comments</span>
          <FaShare className="text-red-600 mr-2" />
          <span className="text-gray-500 text-sm">Share</span>
    
        </div>
      </div>
    </div>

    </div>
    );
  }
  
