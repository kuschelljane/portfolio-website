'use client'; 

import React from "react";
import Works from "./components/Works";
import Background from "./components/Background";
import ThemeToggle from "@/theme/themeToggle";

export default function Home() {

  return (
    <div>
      <div className="px-10 py-5 flex flex-col font-[family-name:var(--font-geist-sans)] dark:bg-black">
        <div className="flex justify-end">
          <ThemeToggle />
        </div>
        <div className="pt-5">
          <Background />
        </div>
        <div className="pt-5">
          <Works />
        </div>
      </div>
    </div>
  );
}
