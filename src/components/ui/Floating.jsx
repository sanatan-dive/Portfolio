import React, { useEffect } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function for className management
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// FloatingNav Component
const FloatingNav = ({ navItems = [], className }) => {
  return (
    <div
      className={cn(
        "fixed bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center items-center max-w-fit mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-stone-950 bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-6 py-4 space-x-4 bg-opacity-90 backdrop-blur-md",
        className
      )}
    >
      {navItems.map((navItem, idx) => (
        <a
          key={`link-${idx}`}
          href={navItem.link}
          className={cn(
            "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 justify-center dark:hover:text-neutral-300 hover:text-neutral-500 transition-all duration-300",
            "group", // Group for hover effect
            idx !== navItems.length - 1 ? "border-r border-neutral-300 dark:border-neutral-700 pr-4" : "pr-0"
          )}
        >
          <span className="block sm:hidden">{navItem.icon}</span>
          <span className="flex flex-wrap sm:block text-sm">
            {navItem.name}
          </span>
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-all duration-300"></div>
        </a>
      ))}
    </div>
  );
};

// Floating Component (Docked Navbar)
const Floating = () => {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Technologies", link: "#technologies" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  useEffect(() => {
    // Check for system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
  }, []);
  
  return (
    <div className="w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
};

export default Floating;
