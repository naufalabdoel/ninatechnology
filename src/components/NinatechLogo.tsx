import React from "react";

interface NinatechLogoProps {
  className?: string;
  iconSize?: string;
  textSize?: string;
  showText?: boolean;
}

export default function NinatechLogo({
  className = "",
  iconSize = "w-10 h-10",
  textSize = "text-xl",
  showText = true,
}: NinatechLogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision Geometric SVG Icon */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${iconSize} text-white shrink-0`}
      >
        {/* Central concentric ring with professional 5px line weight */}
        <circle
          cx="50"
          cy="50"
          r="14"
          stroke="currentColor"
          strokeWidth="5"
          fill="none"
        />
        {/* Central solid dot */}
        <circle cx="50" cy="50" r="4.5" fill="currentColor" />

        {/* 120-degree rotationally symmetric orbital arms */}
        {/* Arm 1 (Top-Right): 240° to 330° */}
        <path
          d="M 35 24 A 30 30 0 0 1 76 35"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="76" cy="35" r="5" fill="currentColor" />

        {/* Arm 2 (Bottom): 0° to 90° */}
        <path
          d="M 80 50 A 30 30 0 0 1 50 80"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="50" cy="80" r="5" fill="currentColor" />

        {/* Arm 3 (Left-Top): 120° to 210° */}
        <path
          d="M 35 76 A 30 30 0 0 1 24 35"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="24" cy="35" r="5" fill="currentColor" />
      </svg>

      {/* Brand typography matching the official logo */}
      {showText && (
        <div className="flex flex-col">
          <span className={`text-white font-extrabold ${textSize} tracking-tight leading-none`}>
            ninatech
          </span>
        </div>
      )}
    </div>
  );
}
