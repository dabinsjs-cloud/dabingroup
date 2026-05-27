import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink } from 'lucide-react';

const AFFILIATES = [
  { 
    name: '다빈기획', 
    image: 'https://lh3.googleusercontent.com/d/1XZ0nsNLfGAGh7F5d689oRQPSVU6RPMZw',
    description: '시각디자인, 행사기획/대행, 친환경 사인물, 홍보·판촉물',
    pdfUrl: 'https://drive.google.com/file/d/14LMz27PbrVjxVqwPWhm1zXtXGrDM7Xek/preview'
  },
  { 
    name: '미도', 
    image: 'https://lh3.googleusercontent.com/d/19h-kPs4uDwxk9K4X6bTSro0XeUlmIaKF',
    description: '실내 · 외 건축, 옥내·외 사인물, 금속창호, 인테리어 전문',
    pdfUrl: 'https://drive.google.com/file/d/1Vit3FMz_WCELII7lkw0UuC_nE_EsYJe4/preview'
  },
  { 
    name: '이든컴퍼니', 
    image: 'https://drive.google.com/thumbnail?id=1NudE3Hei1whUuhPFXfaxKiU2TtybpCYc&sz=w1200',
    description: '건물 위생관리, 입주·준공청소, 시설물유지보수, 사무용품 · 가구 전문',
    pdfUrl: 'https://drive.google.com/file/d/1V26HYxi6h-DaWGysYiZA9SvHJb2PgT5z/preview'
  },
  { 
    name: '세종스러움', 
    image: 'https://lh3.googleusercontent.com/d/1l3IylGAsm6sUfj2uyfykPVlmiNA5Dp_S',
    description: '종합광고기획, 인쇄·편집·출판, 간판·시트지, 상패·감사패·명패 전문',
    pdfUrl: 'https://drive.google.com/file/d/1Kw4GLRig2MhrMY-srZrva5q37NhYMbXv/preview'
  },
  { 
    name: '다빈ECO', 
    image: 'https://lh3.googleusercontent.com/d/12Kve2EhHZ6LYthII0gUly6yXGQ8naHkT',
    description: '공공기관 ESG 대응, 친환경 에너지 솔루션, 신재생 에너지 설비, 탄소중립 컨설팅 전문',
    isPreparing: true
  },
  { 
    name: '다빈판촉물', 
    image: 'https://lh3.googleusercontent.com/d/1onRD724-oLqB9v_NYa1xXFSNGj5Y5n0u',
    description: '문구 인쇄, 정성스런 포장, 선물용품 전문 판촉물 쇼핑몰',
    link: 'http://www.xn--2j1b71n3qcx6vo8g.kr/front/index/f_main.asp?'
  },
];

export const Affiliates = () => {
  const [selectedPdf, setSelectedPdf] = React.useState<{ name: string; url: string } | null>(null);
  const [isPreparingOpen, setIsPreparingOpen] = React.useState(false);

  const handleClick = (item: any) => {
    if (item.isPreparing) {
      setIsPreparingOpen(true);
      return;
    }
    if (item.pdfUrl) {
      setSelectedPdf({ name: item.name, url: item.pdfUrl });
    }
  };

  return (
    <section id="affiliates" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#004225] mb-4 uppercase tracking-tighter [text-shadow:0_0_1px_rgba(0,66,37,0.3)]">동행기업</h2>
            <div className="w-full h-1 bg-[#004225]" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0">
        {AFFILIATES.map((item, idx) => {
          const Content = (
            <>
              <img 
                src={item.image} 
                alt={item.name} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#004225]/60 group-hover:bg-black/20 transition-colors duration-500" />
              
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <div className="transform transition-all duration-700 ease-out group-hover:-translate-y-[100%]">
                  <h3 className="text-white font-black text-xl md:text-2xl lg:text-3xl tracking-tighter leading-tight mb-2">
                    {item.name}
                  </h3>
                  <div className="h-0 overflow-hidden opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-700 delay-100">
                    <div className="text-white/90 text-xs md:text-sm leading-relaxed font-medium">
                      {item.description.split(',').map((text, i) => (
                        <div key={i} className="mb-1 last:mb-0">
                          {text.trim()}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          );

          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative aspect-[1/2.2] overflow-hidden group cursor-pointer"
              onClick={() => handleClick(item)}
            >
              {'link' in item && item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                  {Content}
                </a>
              ) : (
                Content
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Preparing Modal */}
      <AnimatePresence>
        {isPreparingOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPreparingOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white w-full max-w-sm rounded-[32px] overflow-hidden shadow-2xl p-10 text-center"
            >
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#004225]">
                <X className="w-10 h-10 opacity-20" />
                <div className="absolute font-black text-2xl">!</div>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">업데이트 예정</h3>
              <p className="text-gray-500 mb-8 text-sm">현재 준비중입니다.<br />조금만 기다려 주세요.</p>
              <button
                onClick={() => setIsPreparingOpen(false)}
                className="w-full py-4 bg-[#004225] text-white rounded-2xl font-bold hover:bg-[#00321d] transition-colors"
              >
                닫기
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* PDF Viewer Modal */}
      <AnimatePresence>
        {selectedPdf && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPdf(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white w-full h-full rounded-2xl md:rounded-[32px] overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-[#004225]" />
                  <h3 className="font-bold text-gray-900">{selectedPdf.name} 카탈로그</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <a 
                    href={selectedPdf.url.replace('/preview', '/view')} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-[#004225] transition-colors"
                    title="새창으로 보기"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <button
                    onClick={() => setSelectedPdf(null)}
                    className="p-2 text-gray-400 hover:text-gray-900 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="flex-1 bg-gray-100 relative">
                <iframe
                  src={`${selectedPdf.url}?embedded=true`}
                  className="w-full h-full border-none"
                  title={`${selectedPdf.name} PDF Viewer`}
                  allow="autoplay"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

