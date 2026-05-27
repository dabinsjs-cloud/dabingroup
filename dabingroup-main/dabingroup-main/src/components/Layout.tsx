import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone, Mail, MessageCircle, Menu, X, ChevronDown, ChevronRight, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

const NAV_ITEMS = [
  {
    title: '그룹소개',
    links: [
      { name: '인사말', href: '/greetings' },
      { name: '경영이념', href: '/philosophy' },
      { name: '인증 및 특허', href: '/#certifications' },
      { name: '사업영역', href: '/#business' },
      { name: '함께하는 사람들', href: '/#clients' },
    ],
  },
  {
    title: '동행기업',
    links: [
      { name: '다빈기획', href: '/#affiliates' },
      { name: '미도', href: '/#affiliates' },
      { name: '이든컴퍼니', href: '/#affiliates' },
      { name: '세종스러움', href: '/#affiliates' },
      { name: '다빈ECO', href: '/#affiliates' },
      { name: '다빈판촉물', href: '/#affiliates' },
    ],
  },
  {
    title: '우리의 결과물',
    links: [
      { name: '공공디자인', href: '/#portfolio' },
      { name: '브랜딩디자인', href: '/#portfolio' },
      { name: '시각디자인', href: '/#portfolio' },
      { name: '인테리어디자인', href: '/#portfolio' },
      { name: '행사기획디자인', href: '/#portfolio' },
    ],
  },
  {
    title: '소식과 이야기',
    links: [
      { name: '우리들의 소식', href: '/news' },
      { 
        name: '우리들의 이야기', 
        href: '#',
        subLinks: [
          { name: '(주)다빈기획', href: 'https://www.instagram.com/sejong_dabin/', external: true },
          { name: '편집&인쇄', href: 'https://www.instagram.com/sejong____dabin/', external: true },
          { name: '네이버 블로그', href: 'https://blog.naver.com/dabin_0408', external: true },
        ]
      },
    ],
  },
  {
    title: '문의하기',
    onClick: 'openInquiryModal',
    isButton: true,
  },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href?: string, external?: boolean, onClick?: string) => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileAccordion(null);

    if (onClick === 'openInquiryModal') {
      setIsInquiryModalOpen(true);
      return;
    }
    
    if (!href || external) return;

    if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (href.startsWith('/#')) {
      const sectionId = href.split('#')[1];
      if (location.pathname === '/') {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        "bg-white/90 backdrop-blur-md",
        isScrolled ? "py-2 shadow-sm" : "py-5"
      )}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2" onClick={() => handleLinkClick('/')}>
            <span className="text-2xl font-black tracking-tighter text-[#004225]">
              DABIN GROUP
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <div 
                key={item.title} 
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.links ? (
                  <button className="flex items-center space-x-1 text-sm font-bold text-gray-700 hover:text-[#004225] transition-colors">
                    <span>{item.title}</span>
                    <ChevronDown className={cn("w-4 h-4 transition-transform", activeDropdown === item.title && "rotate-180")} />
                  </button>
                ) : (
                  <button 
                    onClick={() => {
                      if ('onClick' in item && item.onClick === 'openInquiryModal') {
                        setIsInquiryModalOpen(true);
                      } else if ('href' in item && typeof item.href === 'string') {
                        handleLinkClick(item.href);
                      }
                    }}
                    className={cn(
                      "text-sm font-bold transition-colors flex items-center space-x-2",
                      item.isButton ? "bg-[#FEE500] text-[#3C1E1E] px-5 py-2 rounded-full hover:bg-[#F7E600] shadow-lg shadow-black/5" : 
                      "text-gray-700 hover:text-[#004225]"
                    )}
                  >
                    {item.isButton && <MessageCircle className="w-4 h-4 fill-current transition-transform group-hover:scale-110" />}
                    <span>{item.title}</span>
                  </button>
                )}

                {item.links && (
                  <AnimatePresence>
                    {activeDropdown === item.title && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white shadow-2xl rounded-2xl py-3 border border-gray-100"
                      >
                        {item.links.map((link: any) => (
                          'subLinks' in link && link.subLinks ? (
                            <div key={link.name} className="relative group/sub">
                              <button className="w-full px-6 py-2.5 text-sm font-bold text-gray-600 hover:bg-green-50 hover:text-[#004225] transition-all flex items-center justify-between group-hover/sub:text-[#004225]">
                                <span>{link.name}</span>
                                <ChevronRight className="w-4 h-4 transition-transform group-hover/sub:translate-x-1" />
                              </button>
                              <div className="absolute left-[calc(100%-8px)] top-[-8px] w-48 bg-white shadow-2xl rounded-2xl py-3 border border-gray-100 invisible opacity-0 group-hover/sub:visible group-hover/sub:opacity-100 transition-all duration-200">
                                {link.subLinks.map((sub: any) => (
                                  <a
                                    key={sub.name}
                                    href={sub.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block px-6 py-2.5 text-sm font-medium text-gray-600 hover:bg-green-50 hover:text-[#004225] transition-colors"
                                  >
                                    {sub.name}
                                  </a>
                                ))}
                              </div>
                            </div>
                          ) : link.external ? (
                            <a
                              key={link.name}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-6 py-2.5 text-sm font-medium text-gray-600 hover:bg-green-50 hover:text-[#004225] transition-colors"
                            >
                              {link.name}
                            </a>
                          ) : (
                            <Link
                              key={link.name}
                              to={link.href}
                              onClick={() => handleLinkClick(link.href)}
                              className="block px-6 py-2.5 text-sm font-medium text-gray-600 hover:bg-green-50 hover:text-[#004225] transition-colors"
                            >
                              {link.name}
                            </Link>
                          )
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-gray-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {NAV_ITEMS.map((item) => (
                  <div key={item.title} className="border-b border-gray-50 pb-4 last:border-0">
                    {item.links ? (
                      <>
                        <button 
                          onClick={() => setMobileAccordion(mobileAccordion === item.title ? null : item.title)}
                          className="flex items-center justify-between w-full text-sm font-bold text-gray-900"
                        >
                          <span>{item.title}</span>
                          <ChevronDown className={cn("w-4 h-4 transition-transform", mobileAccordion === item.title && "rotate-180")} />
                        </button>
                        <AnimatePresence>
                          {mobileAccordion === item.title && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="grid grid-cols-2 gap-2 pt-4 pl-2">
                                {item.links.map((link: any) => (
                                  'subLinks' in link && link.subLinks ? (
                                    <div key={link.name} className="col-span-2 space-y-2 py-2">
                                      <div className="text-xs font-black text-gray-400 uppercase tracking-widest pl-2 mb-1">{link.name}</div>
                                      <div className="grid grid-cols-2 gap-2 pl-2">
                                        {link.subLinks.map((sub: any) => (
                                          <a
                                            key={sub.name}
                                            href={sub.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-gray-500 py-1 hover:text-[#004225]"
                                          >
                                            {sub.name}
                                          </a>
                                        ))}
                                      </div>
                                    </div>
                                  ) : link.external ? (
                                    <a
                                      key={link.name}
                                      href={link.href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-sm text-gray-500 py-1"
                                    >
                                      {link.name}
                                    </a>
                                  ) : (
                                    <Link
                                      key={link.name}
                                      to={link.href}
                                      onClick={() => handleLinkClick(link.href)}
                                      className="text-sm text-gray-500 py-1"
                                    >
                                      {link.name}
                                    </Link>
                                  )
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <button
                        onClick={() => {
                          const href = 'href' in item && typeof item.href === 'string' ? item.href : undefined;
                          const onClick = 'onClick' in item && typeof item.onClick === 'string' ? item.onClick : undefined;
                          handleLinkClick(href, false, onClick);
                        }}
                        className={cn(
                          "flex items-center space-x-2 text-sm font-bold",
                          item.isButton ? "bg-[#FEE500] text-[#3C1E1E] px-4 py-2 rounded-xl inline-flex" : "text-gray-900"
                        )}
                      >
                        {item.isButton && <MessageCircle className="w-4 h-4 fill-current" />}
                        <span>{item.title}</span>
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Inquiry Modal */}
      <AnimatePresence>
        {isInquiryModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsInquiryModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-sm rounded-[32px] overflow-hidden shadow-2xl"
            >
              <div className="p-8 pt-12 text-center">
                <div className="mb-8 space-y-1">
                  <p className="text-base font-bold text-gray-900 break-keep leading-tight">주식회사 다빈기획은</p>
                  <p className="text-base font-bold text-gray-900 break-keep leading-tight">사람과 세상을 디자인하는 아름다운 공동체입니다.</p>
                  <p className="text-base font-bold text-gray-900 break-keep leading-tight">여러분들의 생각과 마음을 디자인 하겠습니다:)</p>
                </div>
                <div className="space-y-2 text-gray-500 text-xs text-center mb-8">
                  <p>[영업시간] 평일 09:00 ~ 18:00 (주말,공휴일 휴무)</p>
                  <p>[점심시간] 12:00 ~ 13:00</p>
                  <p>[상담/문의] 044-715-5636</p>
                  <p>[E-mail] dabin_0408@naver.com</p>
                </div>
                
                <a 
                  href="https://pf.kakao.com/_YGjgb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#FEE500] text-[#3C1E1E] py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-[#F7E600] transition-colors shadow-lg shadow-yellow-400/20"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>카카오톡 문의하기</span>
                </a>
              </div>
              <button 
                onClick={() => setIsInquiryModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export const Footer = () => (
  <footer className="bg-[#004225] text-gray-200 py-12 px-4">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16">
      <div className="space-y-8 max-w-md">
        <h2 className="text-white text-2xl font-black tracking-tighter">DABIN GROUP</h2>
        <p className="text-sm leading-relaxed break-keep">
          공간의 가치를 설계하고 <br />
          도시의 이야기를 만들어가며 <br />
          실력과 신뢰를 바탕으로 <br />
          미래를 만들어 갑니다.
        </p>
        <div className="flex space-x-4">
          <a href="https://www.instagram.com/sejong____dabin/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center text-white hover:opacity-80 transition-all">
            <span className="sr-only">Instagram</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="https://blog.naver.com/dabin_0408" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#03C75A] flex items-center justify-center text-white hover:opacity-80 transition-all font-black text-lg">
            B
          </a>
          <a href="https://pf.kakao.com/_YGjgb" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#FEE500] flex items-center justify-center hover:bg-[#F7E600] text-[#3C1E1E] transition-all">
            <MessageCircle className="w-5 h-5 fill-current" />
          </a>
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-white font-bold uppercase tracking-widest text-xs">Contact</h3>
        <div className="space-y-4 text-sm">
          <p className="flex items-center"><Phone className="w-4 h-4 mr-3 text-white/40" /> 044-715-5636</p>
          <p className="flex items-center"><Mail className="w-4 h-4 mr-3 text-white/40" /> dabin_0408@naver.com</p>
          <a href="https://pf.kakao.com/_YGjgb" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white transition-colors">
            <MessageCircle className="w-4 h-4 mr-3 text-white/40" /> 카카오톡 문의하기
          </a>
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-white font-bold uppercase tracking-widest text-xs">찾아오시는 길</h3>
        <div className="space-y-4 text-sm">
          <div className="space-y-4">
            <div className="flex items-start">
              <MapPin className="w-4 h-4 mr-3 mt-1 text-white/40 shrink-0" />
              <div>
                <p className="text-white font-bold text-xs mb-1">세종본사</p>
                <p className="text-xs leading-relaxed">세종특별자치시 금남면 용포로 110 2층</p>
                <p className="text-xs leading-relaxed">세종특별자치시 집현중앙7로 6 801호(지식산업센터)</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="w-4 h-4 mr-3 mt-1 text-white/40 shrink-0" />
              <div>
                <p className="text-white font-bold text-xs mb-1">대전지사</p>
                <p className="text-xs leading-relaxed">대전광역시 서구 둔산로 45, 엠빌딩 3층</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="w-4 h-4 mr-3 mt-1 text-white/40 shrink-0" />
              <div>
                <p className="text-white font-bold text-xs mb-1">충남지사</p>
                <p className="text-xs leading-relaxed">충청남도 천안시 서북구 불당동 789</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="w-4 h-4 mr-3 mt-1 text-white/40 shrink-0" />
              <div>
                <p className="text-white font-bold text-xs mb-1">충북지사</p>
                <p className="text-xs leading-relaxed">충청북도 청주시 흥덕구 가경동 456</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest">
      <p>© 2026 DABIN GROUP. ALL RIGHTS RESERVED.</p>
    </div>
  </footer>
);
