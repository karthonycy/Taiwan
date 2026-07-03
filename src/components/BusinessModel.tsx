import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Tv, Clapperboard, Globe2, Boxes, CheckCircle2, ChevronRight } from 'lucide-react';
import { businessPhases } from '../data';

export default function BusinessModel() {
  const [activePhase, setActivePhase] = useState(0);

  const icons = [
    <Tv size={24} />,
    <Clapperboard size={24} />,
    <Globe2 size={24} />,
    <Boxes size={24} />
  ];

  return (
    <section id="business" className="py-24 bg-transparent border-t border-white/10 relative">
      <div className="absolute inset-0 bg-radial-gradient from-indigo-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-2">Business Model</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-100">全链路 IP 生态商业模式</h2>
          <p className="text-slate-400 text-sm mt-3 font-light">
            通过四个阶段的阶梯式IP化运作，打破传统短剧一次性流量消费的生命周期，实现长期IP增值
          </p>
          <div className="h-1 w-12 bg-indigo-500 mx-auto mt-4" />
        </div>

        {/* Horizontal/Interactive Timeline Navigator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Navigator Panel */}
          <div className="lg:col-span-5 space-y-4">
            {businessPhases.map((phase, idx) => (
              <button
                key={idx}
                onClick={() => setActivePhase(idx)}
                className={`w-full text-left p-5 rounded-3xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                  activePhase === idx
                    ? 'bg-white/15 border-indigo-500/40 shadow-lg shadow-indigo-500/10'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/15'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                    activePhase === idx
                      ? 'bg-white/10 text-indigo-300 border border-white/10'
                      : 'bg-white/5 text-slate-400 group-hover:text-slate-200 border border-white/5'
                  }`}>
                    {icons[idx]}
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">PHASE {phase.phase}</div>
                    <h3 className={`text-base font-semibold transition-colors ${
                      activePhase === idx ? 'text-indigo-300' : 'text-slate-300 group-hover:text-slate-100'
                    }`}>
                      {phase.title}
                    </h3>
                  </div>
                </div>
                <ChevronRight 
                  size={16} 
                  className={`transition-transform duration-350 ${
                    activePhase === idx ? 'text-indigo-300 translate-x-1' : 'text-slate-600 group-hover:text-slate-400'
                  }`} 
                />
              </button>
            ))}
          </div>

          {/* Interactive display detail block - Glass Card */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 space-y-6 backdrop-blur-md shadow-2xl">
            <div className="flex justify-between items-start pb-4 border-b border-white/10">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-indigo-300 bg-white/10 border border-white/10 px-2.5 py-1 rounded-full">
                  STAGE DETAILS · 战略拆解
                </span>
                <h3 className="text-2xl font-serif font-bold text-slate-100 mt-2">
                  {businessPhases[activePhase].title}
                </h3>
              </div>
              <div className="text-3xl font-mono font-extrabold text-white/10">
                0{activePhase + 1}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-slate-400">核心发展定位</h4>
              <p className="text-base text-slate-200 font-light leading-relaxed">
                {businessPhases[activePhase].description}
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">具体战役实施与路径规划 / Key Actions</h4>
              
              <div className="space-y-3">
                {businessPhases[activePhase].details.map((detail, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-3 items-start bg-white/5 p-4 rounded-xl border border-white/5"
                  >
                    <CheckCircle2 size={16} className="text-indigo-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-300 font-light leading-relaxed">{detail}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Micro value multiplier metrics */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>ESTIMATED PAYBACK FACTOR</span>
              <span className="text-indigo-300 font-semibold uppercase">
                {activePhase === 0 ? "快速回款 / 高流动性" : 
                 activePhase === 1 ? "10X 溢价 / IP跨界升值" : 
                 activePhase === 2 ? "60% 净利弹性 / 美元外汇" : "长期长尾 / 垄断性IP资产"}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
