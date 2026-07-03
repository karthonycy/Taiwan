import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, MapPin, Users, History, Award, CheckCircle } from 'lucide-react';
import { projectBasicInfo } from '../data';

interface StoryChapter {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  focus: string;
}

const chapters: StoryChapter[] = [
  {
    id: "c1",
    title: "第一单元：《血战基隆》",
    subtitle: "北海岸的怒火与防线",
    desc: "1884年8月，法军舰队突袭基隆。面临绝境，淮军守军与台湾本地矿工、原住民抗法自卫队在大雨倾盆的泥泞中共同浴血守卫，用简陋火枪阻击法军精锐步兵，构筑起不可逾越的家国防线。",
    focus: "家国情怀 · 军民同心 · 泥泞巷战"
  },
  {
    id: "c2",
    title: "第二单元：《沪尾大捷》",
    subtitle: "大沙湾的伏击奇迹",
    desc: "法军兵临淡水河口，抗法名帅刘铭传高瞻远瞩，设伏于大沙湾茂密丛林。清军、黑旗军同台湾本地义军融为一体，利用潮汐陷阱与白刃冲锋痛击法国海军陆战队，创下近代御敌的辉煌大捷。",
    focus: "军事策略 · 丛林伏击 · 历史高光"
  },
  {
    id: "c3",
    title: "第三单元：《海角孤魂》",
    subtitle: "澎湖海域的最后的绝唱",
    desc: "法军转攻澎湖，清军浴血顽抗。虽然海疆受阻，但台湾人民的誓死不屈与大陆源源不断的募兵支援彻底拖垮了法国舰队，孤拔将军（Courbet）在焦灼与悔恨中于澎湖郁郁而终，折戟海疆。",
    focus: "壮烈史诗 · 敌帅折旗 · 历史回响"
  }
];

export default function ProjectOverview() {
  const [activeChapter, setActiveChapter] = useState(chapters[0]);

  return (
    <section id="overview" className="py-24 bg-transparent border-t border-white/10 relative">
      <div className="absolute inset-0 bg-radial-gradient from-indigo-500/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-2">Project Overview</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-100">项目概述与核心底色</h2>
          <div className="h-1 w-12 bg-indigo-500 mx-auto mt-4" />
        </div>

        {/* Basic specifications Grid - Frosted Glass Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-indigo-500/5">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-300 mb-4 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
              <History size={20} />
            </div>
            <h3 className="text-sm font-semibold text-indigo-400 font-mono mb-1">剧目定位</h3>
            <p className="text-base font-medium text-slate-200">横屏史诗级历史精品短剧</p>
            <p className="text-xs text-slate-400 mt-2">单元剧形式，兼备历史厚度与短剧张力</p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-indigo-500/5">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-300 mb-4 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
              <BookOpen size={20} />
            </div>
            <h3 className="text-sm font-semibold text-indigo-400 font-mono mb-1">剧目时长</h3>
            <p className="text-base font-medium text-slate-200">6-8分钟/集 · 共120分钟</p>
            <p className="text-xs text-slate-400 mt-2">单元剧节奏快、完播率高，利于平台算法分账</p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-indigo-500/5">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-300 mb-4 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
              <Users size={20} />
            </div>
            <h3 className="text-sm font-semibold text-indigo-400 font-mono mb-1">受众分析</h3>
            <p className="text-base font-medium text-slate-200">历史受众与泛华语市场</p>
            <p className="text-xs text-slate-400 mt-2">精准直击广大爱国青年、军迷及海外游子群落</p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-indigo-500/5">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-300 mb-4 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
              <Award size={20} />
            </div>
            <h3 className="text-sm font-semibold text-indigo-400 font-mono mb-1">内容卖点</h3>
            <p className="text-base font-medium text-slate-200">文化底蕴与情绪共鸣</p>
            <p className="text-xs text-slate-400 mt-2">用AIGC极致效率，重塑最具情绪张力的爱国经典</p>
          </div>
        </div>

        {/* Narrative & History Block - Giant Glassmorphic Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl">
          
          {/* Historical text detail */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-indigo-400">
              <MapPin size={18} />
              <span className="text-xs font-mono tracking-widest uppercase">1884 SINO-FRENCH WAR</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-100 leading-tight">
              历史底色：中法战争中的台湾守卫战
            </h3>
            <p className="text-slate-300 leading-relaxed font-light">
              1884年，法军挑起中法战争，意图强占台湾以切断清廷海疆。面对法军强大的铁甲铁舰，内陆赴台抗战的中华儿女与台湾同胞休戚与共、血溶一体，共同筑起血肉长城。
            </p>
            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle size={16} className="text-indigo-400 mt-1 flex-shrink-0" />
                <span className="text-slate-300 text-sm">
                  <strong>爱国情怀融为一体</strong>：揭示台湾自古即是神圣祖国不可分割之领土，两岸同胞骨肉相连。
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={16} className="text-indigo-400 mt-1 flex-shrink-0" />
                <span className="text-slate-300 text-sm">
                  <strong>宏大历史微观呈现</strong>：通过平凡百姓与抗敌将士的视角，以小见大，引发极强的现代家国共鸣。
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={16} className="text-indigo-400 mt-1 flex-shrink-0" />
                <span className="text-slate-300 text-sm">
                  <strong>海疆大捷极致还原</strong>：利用 AIGC 技术低成本恢复浩瀚大海战、基隆阵地大火战等视觉奇观。
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Chapter Selector & Preview - Inner Glass Area */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-6 backdrop-blur-md">
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <h4 className="text-xs font-mono text-indigo-400 uppercase tracking-widest">
                  剧集单元概念设定 / Story Arc Preview
                </h4>
                <span className="text-[10px] text-slate-400 font-mono">
                  共计 3 大核心战役单元
                </span>
              </div>

              {/* Selector buttons with premium pill active indicators */}
              <div className="flex flex-wrap gap-2">
                {chapters.map((ch) => (
                  <button
                    key={ch.id}
                    onClick={() => setActiveChapter(ch)}
                    className={`px-4 py-2 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer ${
                      activeChapter.id === ch.id
                        ? 'bg-white/15 text-white border border-indigo-500/40 shadow-lg shadow-indigo-500/10'
                        : 'bg-white/5 text-slate-400 hover:text-slate-200 border border-white/10'
                    }`}
                  >
                    {ch.title.split('：')[0]}
                  </button>
                ))}
              </div>

              {/* Display card for active chapter */}
              <motion.div
                key={activeChapter.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div>
                  <h5 className="text-lg font-serif font-semibold text-slate-100">
                    {activeChapter.title}
                  </h5>
                  <p className="text-xs text-indigo-300 font-mono mt-0.5">
                    {activeChapter.subtitle}
                  </p>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed font-light bg-white/5 p-4 rounded-xl border border-white/5">
                  {activeChapter.desc}
                </p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-[11px] text-slate-300 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                  视觉与叙事焦点：{activeChapter.focus}
                </div>
              </motion.div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
