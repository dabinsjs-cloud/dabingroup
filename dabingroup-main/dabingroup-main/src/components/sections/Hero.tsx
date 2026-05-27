import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative h-[70vh] lg:h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/d/1SK8zxLMTya56q5AxpZeLQR-l_sedzgFK=s0" 
          alt="DABIN GROUP Hero" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover contrast-[1.05] brightness-[1.02]"
        />
      </div>

      {/* Content Removed as per user request */}
      <div className="relative z-10 text-center px-4">
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};
