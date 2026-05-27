import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronRight, X, Download, Home } from 'lucide-react';
import { NOTICES } from '../../constants/newsData';

const NEWS = [
  {
    id: 1,
    title: '다빈그룹의 새로운 소식을\n만나보세요',
    date: NOTICES[0]?.date || '2026.05.10',
    category: '우리들의 소식',
    image: NOTICES[0]?.images?.[0] || 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
    link: '/news',
    isCatalog: false
  },
  {
    id: 2,
    title: '다빈그룹 공식 네이버 블로그에서\n다양한 이야기를 확인해보세요',
    date: 'Daily Update',
    category: '네이버 블로그',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800',
    link: 'https://blog.naver.com/dabin_0408'
  },
  {
    id: 3,
    title: '다빈그룹 인스타그램 팔로우 하고\n최신 이야기를 만나보세요',
    date: 'Daily Update',
    category: '인스타그램',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800',
    link: 'https://www.instagram.com/sejong_dabin/'
  }
];

export const NewsBlog = () => {
  const [isCatalogOpen, setIsCatalogOpen] = React.useState(false);
  const [isInstagramOpen, setIsInstagramOpen] = React.useState(false);

  const AFFILIATES = [
    { name: '다빈기획', url: 'https://drive.google.com/uc?export=download&id=14LMz27PbrVjxVqwPWhm1zXtXGrDM7Xek', type: 'download' },
    { name: '미도', url: 'https://drive.google.com/uc?export=download&id=1Vit3FMz_WCELII7lkw0UuC_nE_EsYJe4', type: 'download' },
    { name: '이든컴퍼니', url: 'https://drive.google.com/uc?export=download&id=1V26HYxi6h-DaWGysYiZA9SvHJb2PgT5z', type: 'download' },
    { name: '세종스러움', url: 'https://drive.google.com/uc?export=download&id=1Kw4GLRig2MhrMY-srZrva5q37NhYMbXv', type: 'download' },
    { name: '다빈ECO', url: '#', type: 'preparing' },
    { name: '다빈판촉물', url: 'http://www.xn--2j1b71n3qcx6vo8g.kr/front/index/f_main.asp?', type: 'home' },
  ];

  const INSTAGRAM_ACCOUNTS = [
    { name: '(주)다빈기획', url: 'https://www.instagram.com/sejong_dabin/' },
    { name: '편집&인쇄', url: 'https://www.instagram.com/sejong____dabin/' },
  ];

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#004225] mb-4 uppercase tracking-tighter [text-shadow:0_0_1px_rgba(0,66,37,0.3)]">소식과 이야기</h2>
            <div className="w-full h-1 bg-[#004225]" />
          </div>
          
          <div className="flex justify-center space-x-2 md:space-x-4">
            <a 
              href="https://blog.naver.com/dabin_0408" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 md:px-8 py-2.5 md:py-3 bg-[#03C75A] text-white rounded-full font-bold text-[10px] md:text-sm hover:shadow-lg transition-all flex items-center space-x-1.5 md:space-x-2 whitespace-nowrap"
            >
              <span className="text-lg md:text-2xl font-black">B</span>
              <span>네이버 블로그</span>
            </a>
            <button 
              onClick={() => setIsInstagramOpen(true)}
              className="px-4 md:px-8 py-2.5 md:py-3 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white rounded-full font-bold text-[10px] md:text-sm hover:shadow-lg transition-all flex items-center space-x-1.5 md:space-x-2 whitespace-nowrap"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              <span>인스타그램</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS.map((item, idx) => {
            const isExternal = item.link.startsWith('http');
            const isCatalogLink = 'isCatalog' in item && item.isCatalog;
            const isInstagramLink = item.category === '인스타그램' || item.category === 'Instagram';

            const Content = (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer h-full flex md:flex-col"
                onClick={(e) => {
                  if (isCatalogLink) {
                    e.preventDefault();
                    setIsCatalogOpen(true);
                  } else if (isInstagramLink) {
                    e.preventDefault();
                    setIsInstagramOpen(true);
                  }
                }}
              >
                <div className="w-[100px] h-[100px] md:w-full md:h-64 overflow-hidden shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-3 md:p-8 flex-1 flex flex-col justify-center">
                  <div className="flex items-center space-x-2 mb-1.5 md:mb-4">
                    <span className="text-[7px] md:text-[10px] font-bold text-[#004225] bg-green-50 px-1.5 md:px-2 py-0.5 rounded uppercase tracking-widest whitespace-nowrap">
                      {item.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-[8px] md:text-xs">
                      <Calendar className="w-2 md:w-3 md:h-3 mr-1" />
                      {item.date}
                    </div>
                  </div>
                  <h3 className="text-xs md:text-lg font-bold text-gray-900 mb-0 md:mb-4 line-clamp-2 group-hover:text-[#004225] transition-colors whitespace-pre-line leading-tight">
                    {item.title}
                  </h3>
                </div>
              </motion.article>
            );

            if (isCatalogLink || isInstagramLink) {
              return <div key={item.id}>{Content}</div>;
            }

            return isExternal ? (
              <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">
                {Content}
              </a>
            ) : (
              <Link key={item.id} to={item.link}>
                {Content}
              </Link>
            );
          })}
        </div>

        {/* Catalog Selection Modal */}
        <AnimatePresence>
          {isCatalogOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsCatalogOpen(false)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative bg-white w-full max-w-lg rounded-[32px] overflow-hidden shadow-2xl p-8"
              >
                <button
                  onClick={() => setIsCatalogOpen(false)}
                  className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-900 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="text-center mb-10 pt-4">
                  <h3 className="text-2xl font-black text-[#004225] mb-2 tracking-tight">다빈그룹 카탈로그 다운로드</h3>
                  <p className="text-gray-500 text-sm">확인을 원하시는 계열사를 선택해주세요.</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {AFFILIATES.map((affiliate) => {
                    if (affiliate.type === 'preparing') {
                      return (
                        <div
                          key={affiliate.name}
                          className="group flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100 opacity-60"
                        >
                          <span className="font-bold text-gray-400">
                            {affiliate.name}
                          </span>
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">준비중</span>
                        </div>
                      );
                    }

                    return (
                      <a
                        key={affiliate.name}
                        href={affiliate.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between p-4 bg-gray-50 hover:bg-[#004225] rounded-2xl transition-all duration-300 border border-gray-100"
                      >
                        <span className="font-bold text-gray-900 group-hover:text-white transition-colors">
                          {affiliate.name}
                        </span>
                        {affiliate.type === 'home' ? (
                          <Home className="w-4 h-4 text-[#004225] group-hover:text-white transition-colors" />
                        ) : (
                          <Download className="w-4 h-4 text-[#004225] group-hover:text-white transition-colors" />
                        )}
                      </a>
                    );
                  })}
                </div>

                <div className="mt-10 text-center">
                  <button
                    onClick={() => setIsCatalogOpen(false)}
                    className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-gray-800 transition-colors"
                  >
                    닫기
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Instagram Selection Modal */}
        <AnimatePresence>
          {isInstagramOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsInstagramOpen(false)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative bg-white w-full max-w-lg rounded-[32px] overflow-hidden shadow-2xl p-8"
              >
                <button
                  onClick={() => setIsInstagramOpen(false)}
                  className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-900 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="text-center mb-10 pt-4">
                  <div className="w-16 h-16 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">다빈그룹 인스타그램</h3>
                </div>

                <div className="space-y-3">
                  {INSTAGRAM_ACCOUNTS.map((account, index) => (
                    <a
                      key={account.name}
                      href={account.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-5 bg-gray-50 hover:bg-gradient-to-r hover:from-[#833ab4] hover:to-[#fd1d1d] rounded-2xl transition-all duration-300 border border-gray-100"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#fd1d1d] group-hover:text-white group-hover:bg-transparent border border-gray-100 group-hover:border-white/20 transition-all">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        </div>
                        <span className="font-black text-lg text-gray-900 group-hover:text-white transition-colors">
                          {account.name}
                        </span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors translate-x-0 group-hover:translate-x-1" />
                    </a>
                  ))}
                </div>

                <div className="mt-10 text-center">
                  <button
                    onClick={() => setIsInstagramOpen(false)}
                    className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-gray-800 transition-colors"
                  >
                    닫기
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
