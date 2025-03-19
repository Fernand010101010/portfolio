"use client";
import React from "react";
import { SparklesCore } from "../components/ui/sparkles";

export function SparklesPreview() {
  return (
    <div className="h-[5rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md z-20 mb-20">
     
      <div className="w-[110rem] h-40 relative">
        {/* Gradients */}
        
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
