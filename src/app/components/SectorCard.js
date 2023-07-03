import React from "react";

export default function SectorCard({ color, value }) {
	return (
		<div
			className={`rounded-lg px-2 text-center py-0 h-5 text-xs text-white ${color} `}
			style={{ fontSize: 8 }}
		>
			{value}
		</div>
	);
}
