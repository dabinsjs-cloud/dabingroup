import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header, Footer } from './components/Layout';
import { FloatingButtons } from './components/FloatingButtons';
import Home from './pages/Home';
import Greetings from './pages/Greetings';
import Philosophy from './pages/Philosophy';
import NewsList from './pages/NewsList';
import NewsDetail from './pages/NewsDetail';
import AdminNews from './pages/AdminNews';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900 pt-[80px]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/greetings" element={<Greetings />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/news" element={<NewsList />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/admin/news" element={<AdminNews />} />
        </Routes>
        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  );
}
