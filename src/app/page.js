"use client";
import React from 'react';
import Header from './components/Header';
import Sidebar from './components/SideBar';
import MainContent from './components/main';
import News from './components/News';
export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <div className="flex ">
      < Sidebar />
        <MainContent />
        <News/>
      </div>
    </div>
  );
}