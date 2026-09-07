"use client";

import React, { useRef, useState, useEffect } from "react";

interface MouseSvgDividerProps {
  className?: string;
  glowColor?: string;
}

export function MouseSvgDivider({
  className = "",
  glowColor = "#6D28D9",
}: MouseSvgDividerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [curveY, setCurveY] = useState(60);
  const [curveX, setCurveX] = useState(500);
  const [isHovered, setIsHovered] = useState(false);

  const targetY = useRef(60);
  const targetX = useRef(500);
  const currentY = useRef(60);
  const currentX = useRef(500);

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      // Spring physics towards target
      currentY.current += (targetY.current - currentY.current) * 0.12;
      currentX.current += (targetX.current - currentX.current) * 0.12;

      setCurveY(currentY.current);
      setCurveX(currentX.current);

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const relativeX = ((e.clientX - rect.left) / rect.width) * 1000;
    const relativeY = Math.max(10, Math.min(110, ((e.clientY - rect.top) / rect.height) * 120));

    targetX.current = relativeX;
    targetY.current = relativeY;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    targetX.current = 500;
    targetY.current = 60;
    setIsHovered(false);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full h-24 sm:h-28 overflow-hidden cursor-crosshair select-none flex items-center justify-center ${className}`}
    >
      <svg
        viewBox="0 0 1000 120"
        preserveAspectRatio="none"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="dividerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6D28D9" stopOpacity="0" />
            <stop offset="25%" stopColor="#6D28D9" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#FFD45C" stopOpacity="0.9" />
            <stop offset="75%" stopColor="#6D28D9" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#6D28D9" stopOpacity="0" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Secondary subtle shadow curve */}
        <path
          d={`M 0,60 Q ${curveX},${curveY + 12} 1000,60`}
          stroke={glowColor}
          strokeWidth="1.5"
          strokeOpacity="0.25"
          fill="none"
        />

        {/* Primary Interactive Reactive Wave Path */}
        <path
          d={`M 0,60 Q ${curveX},${curveY} 1000,60`}
          stroke="url(#dividerGrad)"
          strokeWidth={isHovered ? "2.5" : "1.5"}
          filter="url(#glow)"
          fill="none"
          className="transition-all duration-75"
        />

        {/* Glowing bead tracking user cursor */}
        {isHovered && (
          <circle
            cx={curveX}
            cy={curveY}
            r="4.5"
            fill="#FFD45C"
            className="animate-pulse"
          />
        )}
      </svg>

      {/* Micro-hint */}
      <span className="absolute bottom-2 text-[10px] tracking-widest uppercase font-mono text-zinc-600 pointer-events-none opacity-40">
        interactive vector divider • drag cursor
      </span>
    </div>
  );
}
