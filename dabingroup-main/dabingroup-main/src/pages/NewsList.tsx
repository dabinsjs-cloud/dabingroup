import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Search, ChevronRight, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { NOTICES } from '../constants/newsData';

export default function NewsList() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Header */}
        <div className="mb-12 max-w-4xl mx-auto lg:mx-0">
          <Link to="/" className="inline-flex items-center text-gray-500 hover:text-[#004225] transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            메인으로 돌아가기
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-[#004225] mb-4 tracking-tighter">소식과 이야기</h1>
              <p className="text-gray-500">다빈그룹의 새로운 소식과 다양한 활동을 전해드립니다.</p>
            </div>
            <div className="relative w-full md:w-64">
              <input 
                type="text" 
                placeholder="검색어를 입력하세요"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#004225]/20 transition-all text-sm"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Board List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {NOTICES.map((notice, idx) => (
            <motion.div
              key={notice.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer flex flex-col h-full"
              onClick={() => navigate(`/news/${notice.id}`)}
            >
              <div className="flex-1 rounded-3xl bg-gray-50 overflow-hidden hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-gray-100 flex flex-col">
                {/* Thumbnail Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-200">
                  {notice.images && notice.images[0] ? (
                    <img 
                      src={notice.images[0]} 
                      alt={notice.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 font-medium italic">
                      No Image available
                    </div>
                  )}
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <div className="flex items-center text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-3">
                    <Calendar className="w-3.5 h-3.5 mr-1.5" />
                    {notice.date}
                  </div>
                  <h2 className="text-xl font-black text-gray-900 mb-3 group-hover:text-[#004225] transition-colors line-clamp-2 leading-tight">
                    {notice.title}
                  </h2>
                  <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed mb-6">
                    {notice.content}
                  </p>
                  
                  <div className="mt-auto flex items-center text-[#004225] text-xs font-black uppercase tracking-wider group-hover:gap-2 transition-all">
                    자세히 보기
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Placeholder */}
        <div className="mt-12 flex justify-center space-x-2">
          {[1, 2, 3].map((n) => (
            <button
              key={n}
              className={`w-10 h-10 rounded-xl font-bold text-sm transition-all ${
                n === 1 ? 'bg-[#004225] text-white' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
              }`}
            >
              {n}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
