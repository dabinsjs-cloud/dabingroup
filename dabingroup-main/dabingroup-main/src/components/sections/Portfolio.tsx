import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { cn } from '../../lib/utils';

const PORTFOLIO_ITEMS = [
  { 
    id: '01', 
    title: '공공디자인', 
    images: [
      'https://drive.google.com/thumbnail?id=1IZtrMo0I2FnnkxCeiH-wjd6WZeI96P_g&sz=w1200',
      'https://drive.google.com/thumbnail?id=1YWVvaXz8z82UXTFDlkIBoRV6vw9On1ob&sz=w1200',
      'https://drive.google.com/thumbnail?id=1G66Jxc_uDBrKrtg0FzHUU-Wfka7c7q_e&sz=w1200',
      'https://drive.google.com/thumbnail?id=1QLp42pcRqzk7zpU9gVar2COPaXarZbRD&sz=w1200',
      'https://drive.google.com/thumbnail?id=1ehYt3EawKVxx4t9Kd7qPL0caA3zwMuk0&sz=w1200',
      'https://drive.google.com/thumbnail?id=1GNYUsJ1s4WCZSWc7fzJcNn9fOqwNF3rL&sz=w1200',
      'https://drive.google.com/thumbnail?id=1B7Pi-U3eSTPdccb5lUDbsMeZS6NyXYFV&sz=w1200',
      'https://drive.google.com/thumbnail?id=1q8z2KGwU11Fc-UphB3HGRWEM9XnrVemt&sz=w1200',
      'https://drive.google.com/thumbnail?id=1_cQ8799D1iDflkYSwZOeTZYvKQstyi8c&sz=w1200',
      'https://drive.google.com/thumbnail?id=1IHv8C-i3UnFz2fBLLPJwnUwHWGbF8EwB&sz=w1200',
      'https://drive.google.com/thumbnail?id=1Pf13CrGHcv4jdv3a0Ca4XWoTJQBhKOVr&sz=w1200',
      'https://drive.google.com/thumbnail?id=1MyxIQg-MDB1c_XhPWClcRMnw4HaigHQY&sz=w1200',
      'https://drive.google.com/thumbnail?id=1aS3FidLq3or_wHL21XMbZCjNcY-pWgtV&sz=w1200',
      'https://drive.google.com/thumbnail?id=1J8D0MO2E9H7Ld5k0x26aQxy3zgXBRRdD&sz=w1200',
      'https://drive.google.com/thumbnail?id=1YTiT_WIU5q-ruZAKV0iThmRmn1lDCcEM&sz=w1200'
    ] 
  },
  { 
    id: '02', 
    title: '브랜딩디자인', 
    images: [
      'https://drive.google.com/thumbnail?id=1XeKtt2VLQl6ytol6jzN6DSVtA1zI7IBZ&sz=w1200',
      'https://drive.google.com/thumbnail?id=1cPy7_zoAjViB0Ciy-QBIblr8cfmfx63k&sz=w1200',
      'https://drive.google.com/thumbnail?id=1ZRUEL5HFiiUNesALJGWP5djk2kUYyzFq&sz=w1200',
      'https://drive.google.com/thumbnail?id=1ujytrcpsp7rPkoE3P79Y5UsNbVvLM6KC&sz=w1200',
      'https://drive.google.com/thumbnail?id=1ItamZga-txl4xDTt9Dc18SfqMVDVYb8T&sz=w1200',
      'https://drive.google.com/thumbnail?id=1j-z3x_Qcn-eSMaxhNH-nYZt_w5mIIQXg&sz=w1200',
      'https://drive.google.com/thumbnail?id=1PeXpFm_-ncfA2vu2eiDlGLpw6XSjw_LC&sz=w1200',
      'https://drive.google.com/thumbnail?id=1CmqS10SjdtQW6QNRVhlx-7hsJ26gzgiq&sz=w1200',
      'https://drive.google.com/thumbnail?id=1rusCZGI0gvbT2sTKC5VgEe88ZgoPJhej&sz=w1200'
    ] 
  },
  { 
    id: '03', 
    title: '시각디자인', 
    images: [
      'https://drive.google.com/thumbnail?id=1jXgG3Sc42b-2pdyx6OSR-GhFwAZrVM6r&sz=w1200',
      'https://drive.google.com/thumbnail?id=17cyUOxN370QMsCiGgFGO6e2t-ubY2xdI&sz=w1200',
      'https://drive.google.com/thumbnail?id=1MlIEGtgjuvNzMKT3QIA1JfZZCt-TkqZF&sz=w1200',
      'https://drive.google.com/thumbnail?id=1seLxrX_QmcOwqk4LllITdvAZhSgNafRu&sz=w1200',
      'https://drive.google.com/thumbnail?id=1Sizn1UT5Zr52RazJvOZI0gWEVPtr-iIf&sz=w1200',
      'https://drive.google.com/thumbnail?id=1nVuKpFXYDoxUlVpPhbr5FEov3UdlN8KS&sz=w1200',
      'https://drive.google.com/thumbnail?id=1YRoSDvIO60Tfa0gYqgw24kTaOzBFM_mW&sz=w1200',
      'https://drive.google.com/thumbnail?id=1R2-iHp_ZsG5Gv8iIpnmFnWErfIv20glN&sz=w1200',
      'https://drive.google.com/thumbnail?id=1azaezm6z-pFJM0lu4VHRyQWy-QaJNjcw&sz=w1200',
      'https://drive.google.com/thumbnail?id=1FBuDOYjWu72AmT2Ke25HUwtGzCwN2JO8&sz=w1200',
      'https://drive.google.com/thumbnail?id=1mJxRxKH156DrSPusDUcVTacL-_1RbgRY&sz=w1200',
      'https://drive.google.com/thumbnail?id=1tLWlHd5DqPZL7T_tPh9wk8JH1TeR7y7i&sz=w1200'
    ] 
  },
  { 
    id: '04', 
    title: '인테리어디자인', 
    images: [
      'https://drive.google.com/thumbnail?id=1uFhSXCAnsMcnXGrOhnKwnALm85vGNNDx&sz=w1200',
      'https://drive.google.com/thumbnail?id=11qBv9ekVZjDgJ9-__gHIRDT7pBkcRDeJ&sz=w1200',
      'https://drive.google.com/thumbnail?id=1c21uB7aksuFRjFux--pZbDaa3UUGXZJ1&sz=w1200',
      'https://drive.google.com/thumbnail?id=1OBUPYeD_jm0-3_-ZQZ6mT3sKEYo4Oikh&sz=w1200',
      'https://drive.google.com/thumbnail?id=1GB_njmeRN1kGAH7Oq0LTl6ymgE7ebgo-&sz=w1200',
      'https://drive.google.com/thumbnail?id=1HegfHAxpbl_75y9q12UCdgf6Xhd67Jy8&sz=w1200',
      'https://drive.google.com/thumbnail?id=1_2CAI3rRwkyzbFIJqmqSX7mYB1xzcc2_&sz=w1200',
      'https://drive.google.com/thumbnail?id=1IjOP834tJIJKkvwdmdFfKqDWivBN_67O&sz=w1200',
      'https://drive.google.com/thumbnail?id=1uaiR52_oWEu1ePc1F5C9QHJZZCsY0Dmd&sz=w1200',
      'https://drive.google.com/thumbnail?id=1pV4MbJWlJqh5sOPCSIPFfD12_N0ARkwh&sz=w1200',
      'https://drive.google.com/thumbnail?id=1NeKiT6V4Zd3HprOnsE8ra8LDaIlwiBjR&sz=w1200',
      'https://drive.google.com/thumbnail?id=1XpI7Ja4FCMs9CD84VFa0kDuuUnLi6qrF&sz=w1200',
      'https://drive.google.com/thumbnail?id=12ZfgLlnaM04MxzQueHb3gT3mTmW8RHrw&sz=w1200'
    ] 
  },
  { 
    id: '05', 
    title: '행사기획디자인', 
    images: [
      'https://drive.google.com/thumbnail?id=1cjBpA38AYsB1jbmRgfw3pjE2MwkzY0u0&sz=w1200',
      'https://drive.google.com/thumbnail?id=1eIbyZDS3wM06g9nbaLepFfng-Kv3Y6E-&sz=w1200',
      'https://drive.google.com/thumbnail?id=1bK2e19V9fYvPeV6HRQ8FSS4LjGeySgD-&sz=w1200',
      'https://drive.google.com/thumbnail?id=1pM0keaj07oEjM7LB5xPH37QnG-UMJnpI&sz=w1200',
      'https://drive.google.com/thumbnail?id=1-9FSXXcRQRuICGRiSXfyeO2z_mZOtTg_&sz=w1200',
      'https://drive.google.com/thumbnail?id=1frzyrIcK3ArS3wxsLp-CGWk0hFgiwpY8&sz=w1200',
      'https://drive.google.com/thumbnail?id=1fjpVAOrKyLLoXGWKkkGKLETbNrFHvc1C&sz=w1200',
      'https://drive.google.com/thumbnail?id=1F7jUVhM-b0_apn2ljMOPeGZNVidYArHd&sz=w1200',
      'https://drive.google.com/thumbnail?id=1gDTZtpDU9zlpCPUcbfVGTlHvZJMvf27x&sz=w1200',
      'https://drive.google.com/thumbnail?id=1wG0rqFvDTF5zlooYeRO7Tk8UjrksYHbR&sz=w1200',
      'https://drive.google.com/thumbnail?id=195WDs_ANfqdX4FbjS8MwoPlGVrw81ZTq&sz=w1200',
      'https://drive.google.com/thumbnail?id=14YRjMrR0TB5Fv6tJ-iE-HyRL9u39XGB2&sz=w1200',
      'https://drive.google.com/thumbnail?id=13Z3NS6WEa4JHWTpzT1dolWKmlRAcsPi_&sz=w1200'
    ] 
  },
];

export const Portfolio = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#004225] mb-4 uppercase tracking-tighter [text-shadow:0_0_1px_rgba(0,66,37,0.3)]">우리의 결과물</h2>
            <div className="w-full h-1 bg-[#004225]" />
          </div>
        </div>

        <div className="divide-y divide-gray-100">
          {PORTFOLIO_ITEMS.map((item, idx) => (
            <a
              key={item.id}
              href="https://dabinpf.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block py-10 md:py-14 transition-all"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Hover Marquee Background (Always Visible with transitions) */}
              <div 
                className={cn(
                  "absolute inset-0 z-0 flex items-center overflow-hidden pointer-events-none transition-all duration-700 ease-in-out w-screen left-1/2 -translate-x-1/2",
                  hoveredId === item.id 
                    ? "opacity-90 blur-0 scale-105" 
                    : "opacity-50 blur-[2px] scale-100"
                )}
              >
                <div 
                  className="flex animate-marquee whitespace-nowrap"
                  style={{ 
                    animationDuration: `${(item.images.length * 66) / 13}s`,
                    animationDelay: idx % 2 === 0 ? "0s" : (item.id === '02' || item.id === '04' ? "-17.5s" : "-15s")
                  }}
                >
                  {[1, 2, 3].map((i) => (
                    <div 
                      key={i} 
                      className="flex space-x-5 px-4"
                    >
                      {item.images.map((img, imgIdx) => (
                        <div key={imgIdx} className="w-[200px] h-[129px] rounded-md overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.3)]">
                          <img 
                            src={img} 
                            alt="" 
                            referrerPolicy="no-referrer" 
                            className="w-full h-full object-cover" 
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between relative z-10 px-4 md:px-0">
                <div className="flex items-center">
                  <h3 className="text-xl md:text-[2.7rem] font-[900] text-[#004225] tracking-tighter group-hover:translate-x-4 transition-transform duration-500 [text-shadow:1px_1px_10px_rgba(255,255,255,1),-1px_-1px_10px_rgba(255,255,255,1),2px_2px_20px_rgba(255,255,255,0.8)] whitespace-nowrap">
                    {item.title}
                  </h3>
                </div>
                <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity pr-4">
                  <ExternalLink className="w-8 h-8 text-[#004225]" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
