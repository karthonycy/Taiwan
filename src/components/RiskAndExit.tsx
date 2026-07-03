import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, LogOut, Milestone, Award, CheckCircle, TrendingUp } from 'lucide-react';
import { riskControls, exitPaths } from '../data';

export default function RiskAndExit() {
  const [activeSegment, setActiveSegment] = useState<'risk' | 'exit' | 'value'>('risk');

  const coreValues = [
    {
      title: "可观的财务回报 (Excellent Return)",
      desc: "投入产出比极高。项目初始融资仅需100万，在保守的预期下，通过多重分账与海外独家买断授权，可取得200万至350万的投资方利润分配，投资回收周期极快。"
    },
    {
      title: "稳健的风险控制 (Robust Risk Control)",
      desc: "采取阶梯式分成机制，首批150万收益的70%直接倾斜优先返给投资人，极大地降低本金搁浅风险。多渠道组合型收入，具有极强的抗波动性。"
    },
    {
      title: "显著的品牌增值 (Brand Premium)",
      desc: "两岸保卫战主旋律题材极易获得视听行业主管部门、两岸合作协会与主流媒体的重视 and 红利推荐，极大增强投资方企业社会知名度与政府关系商誉。"
    }
  ];

  return (
    <section id="risks" className="py-24 bg-transparent text-slate-100 relative">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-2">Risk Management & Exit Strategy</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-100">风控保障、退出逻辑与核心投资价值</h2>
          <div className="h-1 w-12 bg-indigo-500 mx-auto mt-4" />
        </div>

        {/* Triple Tab Navigator */}
        <div className="flex justify-center border-b border-white/10 max-w-lg mx-auto mb-12">
          <button
            onClick={() => setActiveSegment('risk')}
            className={`flex-1 text-center pb-4 text-sm font-semibold transition-colors relative cursor-pointer ${
              activeSegment === 'risk' ? 'text-indigo-300 font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            风险控制体系
            {activeSegment === 'risk' && (
              <motion.div layoutId="activeUnderline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500" />
            )}
          </button>
          
          <button
            onClick={() => setActiveSegment('exit')}
            className={`flex-1 text-center pb-4 text-sm font-semibold transition-colors relative cursor-pointer ${
              activeSegment === 'exit' ? 'text-indigo-300 font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            投资人退出通路
            {activeSegment === 'exit' && (
              <motion.div layoutId="activeUnderline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500" />
            )}
          </button>

          <button
            onClick={() => setActiveSegment('value')}
            className={`flex-1 text-center pb-4 text-sm font-semibold transition-colors relative cursor-pointer ${
              activeSegment === 'value' ? 'text-indigo-300 font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            核心投资价值
            {activeSegment === 'value' && (
              <motion.div layoutId="activeUnderline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500" />
            )}
          </button>
        </div>

        {/* Display Panel - Glass Card */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-md shadow-2xl">
          
          {/* Segment 1: Risk Control */}
          {activeSegment === 'risk' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-4 space-y-4 text-center lg:text-left">
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-indigo-300 mx-auto lg:mx-0 shadow-lg">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-100">三维度闭环风控</h3>
                <p className="text-xs text-slate-400 font-mono tracking-widest uppercase">Mitigating Project Risks</p>
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  通过“技术降本”、“广电宣发协同”与“轻量化短剧测试”三大核心抓手，将风险拦截在起跑线。
                </p>
              </div>

              <div className="lg:col-span-8 space-y-4">
                {riskControls.map((risk, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-colors space-y-2">
                    <div className="flex items-center gap-2 text-indigo-300 font-semibold text-sm font-serif">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      <span>{risk.type}控制</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-light">
                      {risk.control}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Segment 2: Exit Logic */}
          {activeSegment === 'exit' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-4 space-y-4 text-center lg:text-left">
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-indigo-300 mx-auto lg:mx-0 shadow-lg">
                  <LogOut size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-100">高灵活退出机制</h3>
                <p className="text-xs text-slate-400 font-mono tracking-widest uppercase">Clear Exit Strategies</p>
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  本金在第一时间优先返回，并且享有后续衍生电影/续作、轻度游戏等长期溢价权，保障来去自由。
                </p>
              </div>

              <div className="lg:col-span-8 space-y-4">
                {exitPaths.map((path, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-colors space-y-2">
                    <div className="flex items-center gap-2 text-indigo-300 font-semibold text-sm font-serif">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      <span>{path.title}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-light">
                      {path.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Segment 3: Investment Value */}
          {activeSegment === 'value' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-4 space-y-4 text-center lg:text-left">
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-indigo-300 mx-auto lg:mx-0 shadow-lg">
                  <TrendingUp size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-100">核心投资价值</h3>
                <p className="text-xs text-slate-400 font-mono tracking-widest uppercase">Why Invest In Us</p>
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  小投资撬动超级历史影视 IP 的黄金通道，享受高安全系数与高溢价红利。
                </p>
              </div>

              <div className="lg:col-span-8 space-y-4">
                {coreValues.map((val, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-colors space-y-2">
                    <div className="flex items-center gap-2 text-indigo-300 font-semibold text-sm font-serif">
                      <CheckCircle size={14} className="text-indigo-300" />
                      <span>{val.title}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-light">
                      {val.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
}
