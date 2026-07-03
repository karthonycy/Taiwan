import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import ProjectOverview from './components/ProjectOverview';
import FeatureHighlights from './components/FeatureHighlights';
import ProductionTech from './components/ProductionTech';
import MarketValidation from './components/MarketValidation';
import BusinessModel from './components/BusinessModel';
import FinancialCalculator from './components/FinancialCalculator';
import Milestones from './components/Milestones';
import RiskAndExit from './components/RiskAndExit';
import ContactForm from './components/ContactForm';
import { Film, Menu, X, ChevronUp } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Quick active section tracking for menu highlight
      const sections = ['hero', 'overview', 'highlights', 'production', 'validation', 'business', 'calculator', 'milestones', 'risks', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'overview', label: '项目概述' },
    { id: 'highlights', label: '战略亮点' },
    { id: 'production', label: '创新制作' },
    { id: 'validation', label: '对标验证' },
    { id: 'business', label: '商业生态' },
    { id: 'calculator', label: '回报测算' },
    { id: 'milestones', label: '项目日程' },
    { id: 'risks', label: '风控退出' },
    { id: 'contact', label: '项目咨询' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      className="min-h-screen text-slate-100 font-sans selection:bg-indigo-900 selection:text-white antialiased relative"
      style={{
        background: "radial-gradient(at 0% 0%, #1e1b4b 0px, transparent 50%), radial-gradient(at 100% 0%, #312e81 0px, transparent 50%), radial-gradient(at 100% 100%, #1e1b4b 0px, transparent 50%), radial-gradient(at 0% 100%, #4338ca 0px, transparent 50%), #0f172a"
      }}
    >
      
      {/* Sticky Premium Header */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/5 border-b border-white/10 backdrop-blur-xl py-3 shadow-2xl' 
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo / Title with Glow */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-full bg-indigo-500 flex items-center justify-center text-white shadow-[0_0_15px_rgba(99,102,241,0.5)] group-hover:bg-indigo-600 transition-all">
              <Film size={18} />
            </div>
            <div>
              <span className="font-serif font-bold text-base tracking-wider block leading-none text-slate-100 group-hover:text-indigo-400 transition-colors">
                台湾！台湾！
              </span>
              <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase block mt-1">
                AIGC SHORT DRAMA
              </span>
            </div>
          </a>

          {/* Desktop Nav links with glassmorphism styling */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-1.5">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`px-3 py-1 rounded-xl text-xs font-medium transition-all tracking-wider ${
                  activeSection === link.id
                    ? 'bg-white/15 text-white border border-white/10 shadow-lg shadow-indigo-500/10'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action button (Investor Deck download trigger or jump to form) */}
          <div className="hidden sm:block">
            <a
              href="#contact"
              className="px-5 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full text-xs font-semibold shadow-lg shadow-indigo-500/20 transition-all duration-300 transform hover:-translate-y-0.5 inline-block"
            >
              商务合作对接
            </a>
          </div>

          {/* Mobile Menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white cursor-pointer"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-950/90 backdrop-blur-2xl pt-24 px-6 space-y-4 lg:hidden">
          <div className="flex flex-col gap-2 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`w-full py-3.5 px-4 rounded-xl text-sm font-medium transition-all ${
                  activeSection === link.id
                    ? 'bg-white/10 text-white border border-white/10'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full mt-4 py-3.5 rounded-full bg-indigo-500 text-white font-semibold text-center shadow-lg shadow-indigo-500/20 block"
            >
              在线提交意向书
            </a>
          </div>
        </div>
      )}

      {/* Core Sections stack */}
      <main className="relative">
        <HeroSection />
        <ProjectOverview />
        <FeatureHighlights />
        <ProductionTech />
        <MarketValidation />
        <BusinessModel />
        <FinancialCalculator />
        <Milestones />
        <RiskAndExit />
        <ContactForm />
      </main>

      {/* Elegant Cinematic Footer with glassmorphism */}
      <footer className="bg-transparent border-t border-white/10 py-16 text-center text-slate-400 relative overflow-hidden">
        
        {/* Fine background element */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-indigo-500/5 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          
          <div className="flex justify-center items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-300 border border-white/10 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
              <Film size={14} />
            </div>
            <span className="font-serif font-bold text-lg text-slate-200 tracking-widest uppercase">
              台湾！台湾！
            </span>
          </div>

          <p className="text-xs text-slate-400 max-w-xl mx-auto font-light leading-relaxed">
            本案所呈示的 AIGC 混合影像渲染、投资回报倍数及海外发售溢价区间均为结合标杆案例《霍去病》、现行出海流媒体采购分成标准以及先锋 AI 工业化路径所得。本公司对此拥有最终版权和解释权。
          </p>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-slate-400">
            <span>© 2026 湖南潮生纪数字科技有限公司. All Rights Reserved.</span>
            <div className="flex gap-4">
              <a href="#overview" className="hover:text-white transition-colors">项目章程</a>
              <span>·</span>
              <a href="#risks" className="hover:text-white transition-colors">免责风控</a>
              <span>·</span>
              <a href="#contact" className="hover:text-white transition-colors">隐私保护</a>
            </div>
          </div>

        </div>
      </footer>

      {/* Floating Scroll to Top button */}
      {scrolled && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-white/5 hover:bg-indigo-500 border border-white/10 hover:border-indigo-400 text-slate-300 hover:text-white shadow-2xl transition-all z-40 cursor-pointer backdrop-blur-md"
          title="返回顶部"
        >
          <ChevronUp size={16} />
        </button>
      )}

    </div>
  );
}
