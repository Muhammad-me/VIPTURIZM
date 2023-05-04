import React from "react";

export default function Burger() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        stroke="#000"
        strokeWidth={1.5}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </div>
  );
}
