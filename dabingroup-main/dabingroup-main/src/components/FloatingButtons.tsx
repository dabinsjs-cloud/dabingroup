import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

const ITEMS = [
  "장애인기업인증업체",
  "여성기업인증업체",
  "직접생산등록업체",
  "산업디자인전문회사",
  "전문건설업",
  "옥외광고업등록업체",
  "ISO 9001 인증",
  "ISO 14001 인증",
  "나라장터",
  "이음장터"
];

export const FloatingButtons = () => {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const ITEM_HEIGHT = 44;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (index >= ITEMS.length) {
      // Wait for the animation to finish (duration is 0.8s)
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setIndex(0);
        // Turn transition back on after a tiny delay
        setTimeout(() => setIsTransitioning(true), 20);
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div className="fixed top-24 right-4 lg:top-auto lg:bottom-[78px] lg:right-6 z-50 flex flex-row lg:flex-col items-center lg:items-end space-y-0 lg:space-y-4 space-x-2 lg:space-x-0 w-auto lg:w-[210px]">
      {/* Floating Ticker (Casino Slot Form) */}
      <div className="bg-white/20 backdrop-blur-md p-8 px-4 rounded-[40px] shadow-2xl border border-[#004225]/10 w-full hidden lg:block overflow-hidden relative h-[320px]">
        {/* Fixed Title */}
        <div className="flex flex-col items-center mb-4 relative z-10 border-b border-[#004225]/10 pb-4">
          <span className="text-[14px] font-black text-[#004225] tracking-tighter text-center [text-shadow:0_0_1px_rgba(0,66,37,0.5)]">
            공공기관 우선구매대상
          </span>
        </div>

        {/* Masking gradients for smooth enter/exit visuals */}
        <div className="absolute top-20 left-0 right-0 h-12 bg-gradient-to-b from-white/10 to-transparent z-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white/10 to-transparent z-20 pointer-events-none" />

        {/* Slot highlight background - perfectly centered in the scroll area */}
        <div className="absolute top-[62%] left-0 right-0 -translate-y-1/2 h-10 bg-[#004225]/10 z-0 pointer-events-none rounded-full mx-2" />
        
        <div className="relative h-[220px] overflow-hidden">
          <motion.div
            animate={{ y: -((index + ITEMS.length) * ITEM_HEIGHT) + 92 }}
            transition={isTransitioning ? { duration: 0.8, ease: [0.32, 0.72, 0, 1] } : { duration: 0 }}
            className="flex flex-col items-center w-full"
          >
            {/* Displaying multiple sets of items for smooth infinite-feeling loop */}
            {[...ITEMS, ...ITEMS, ...ITEMS].map((item, i) => {
              // Normalize the highlight index
              const normalizedIndex = index % ITEMS.length;
              const isCurrentlyHighlighted = i === (normalizedIndex + ITEMS.length);
              
              return (
                <div
                  key={`${item}-${i}`}
                  style={{ height: ITEM_HEIGHT }}
                  className="flex items-center justify-center w-full"
                >
                  <motion.div
                    animate={{ 
                      scale: isCurrentlyHighlighted ? 1.15 : 0.85,
                      opacity: isCurrentlyHighlighted ? 1 : 0.4,
                      color: "#004225"
                    }}
                    transition={{ duration: 0.6 }}
                    className={cn(
                      "text-[12px] font-black tracking-tight flex items-center justify-center space-x-2 w-full",
                      isCurrentlyHighlighted && "z-10 drop-shadow-[0_0_15px_rgba(0,66,37,0.2)]"
                    )}
                  >
                    {isCurrentlyHighlighted && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#004225] shadow-[0_0_10px_#004225] shrink-0" />
                    )}
                    <span className="truncate text-center">{item}</span>
                    {isCurrentlyHighlighted && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#004225] shadow-[0_0_10px_#004225] shrink-0" />
                    )}
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Mobile Ticker (single item) */}
      <div className="bg-white/95 backdrop-blur-md p-1 px-3 rounded-full shadow-lg border border-[#004225]/10 lg:hidden overflow-hidden h-8 flex items-center w-[120px] justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -8, opacity: 0 }}
            className="text-[8px] font-bold text-[#004225] tracking-tight whitespace-nowrap"
          >
            {ITEMS[index % ITEMS.length]}
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.a
        href="https://pf.kakao.com/_YGjgb"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#FAE100] text-[#3C1E1E] py-2 lg:py-4 px-4 lg:px-0 rounded-full shadow-2xl flex items-center justify-center space-x-2 lg:space-x-3 w-auto lg:w-full"
      >
        <MessageCircle className="w-4 h-4 lg:w-6 lg:h-6 fill-current" />
        <span className="font-black text-[10px] lg:text-sm tracking-tighter">카카오톡 문의</span>
      </motion.a>
    </div>
  );
};
