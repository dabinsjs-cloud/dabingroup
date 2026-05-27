import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, ArrowLeft, Share2, Printer } from 'lucide-react';
import { NOTICES } from '../constants/newsData';

export default function NewsDetail() {
  const { id } = useParams<{ id: string }>();
  const notice = NOTICES.find(n => n.id === Number(id));

  if (!notice) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">게시글을 찾을 수 없습니다.</h2>
          <Link to="/news" className="text-[#004225] font-bold hover:underline">목록으로 돌아가기</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Navigation */}
        <div className="mb-12">
          <Link to="/news" className="inline-flex items-center text-gray-500 hover:text-[#004225] transition-colors group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            목록으로 돌아가기
          </Link>
        </div>

        {/* Post Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="flex items-center text-gray-400 text-sm">
              <Calendar className="w-4 h-4 mr-2" />
              {notice.date}
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-8 tracking-tighter leading-tight">
            {notice.title}
          </h1>
          
          <div className="flex items-center justify-between py-6 border-y border-gray-100">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#004225] font-bold">
                D
              </div>
              <div>
                <div className="text-sm font-bold text-gray-900">다빈그룹 관리자</div>
                <div className="text-xs text-gray-400">공식 소식</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-gray-400">
              <button className="p-2 hover:bg-gray-50 rounded-full transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-gray-50 rounded-full transition-colors">
                <Printer className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Post Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none mb-16"
        >
          {/* Main Image */}
          {notice.images && notice.images[0] && (
            <div className="rounded-3xl overflow-hidden mb-12 shadow-2xl">
              <img 
                src={notice.images[0]} 
                alt={notice.title}
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          )}

          {/* Text Content */}
          <div className="space-y-8 text-gray-700 leading-relaxed break-keep">
            <p className="text-xl font-medium text-gray-900">
              {notice.content}
            </p>
            <div className="text-lg whitespace-pre-wrap">
              {notice.longDescription || '추후 자세한 내용이 추가될 예정입니다.'}
            </div>
          </div>

          {/* Additional Images */}
          {notice.images && notice.images.length > 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
              {notice.images.slice(1).map((img, index) => (
                <div key={index} className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={img} 
                    alt={`${notice.title} - 추가 이미지 ${index + 1}`}
                    className="w-full h-auto object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Footer Navigation */}
        <div className="flex justify-between items-center py-8 border-t border-gray-100">
          <button className="text-sm font-bold text-gray-400 hover:text-[#004225] transition-colors flex items-center group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            이전글
          </button>
          <button className="text-sm font-bold text-gray-400 hover:text-[#004225] transition-colors flex items-center group">
            다음글
            <ArrowLeft className="w-4 h-4 ml-2 rotate-180 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
