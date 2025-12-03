"use client";
import { RefObject } from "react";

interface ArrowButtonsProps {
  scrollRef: RefObject<HTMLDivElement>;
}

export function ArrowButtons({ scrollRef }: ArrowButtonsProps) {
  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollLeft += dir === "right" ? amount : -amount;
  };

  return (
    <div className="flex justify-between px-4 mt-4 md:hidden">
      <button
        onClick={() => scroll("left")}
        className="bg-white/10 backdrop-blur-xl border border-white/20 
        w-12 h-12 rounded-xl flex items-center justify-center
        hover:bg-white/20 transition"
      >
        ←
      </button>

      <button
        onClick={() => scroll("right")}
        className="bg-white/10 backdrop-blur-xl border border-white/20
        w-12 h-12 rounded-xl flex items-center justify-center
        hover:bg-white/20 transition"
      >
        →
      </button>
    </div>
  );
}
