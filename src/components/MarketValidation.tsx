import React from 'react';
import { motion } from 'motion/react';
import { BarChart3, Globe2, Trophy, Star, ArrowRight, Play } from 'lucide-react';
import { marketValidation } from '../data';

export default function MarketValidation() {
  const icons = [
    <Play size={20} className="text-indigo-300 animate-pulse" />,
    <Trophy size={20} className="text-indigo-300" />,
    <Globe2 size={20} className="text-indigo-300" />,
    <Star size={20} className="text-indigo-300" />
  ];

  return (
    <section id="validation" className="py-24 bg-transparent text-slate-100 relative">
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-2">Market & Reference Validation</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-100">对标项目验证：历史战争并非小众</h2>
          <p className="text-slate-400 text-sm mt-3 font-light">
            通过头部标杆项目《霍去病》的多维度市场爆发表现，验证两岸近代史题材具有庞大的全网爆款势能
          </p>
          <div className="h-1 w-12 bg-indigo-500 mx-auto mt-4" />
        </div>

        {/* Benchmarking Metrics Grid - Frosted Glass panels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {marketValidation.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 relative group overflow-hidden shadow-lg hover:shadow-indigo-500/5"
            >
              <div className="absolute -right-4 -bottom-4 text-7xl font-mono font-extrabold text-white/5 group-hover:text-indigo-400/10 transition-colors pointer-events-none">
                {metric.label}
              </div>

              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-mono text-slate-400 tracking-wider uppercase">REFERENCE METRIC</span>
                <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center">
                  {icons[idx]}
                </div>
              </div>

              <div className="space-y-1 relative z-10">
                <div className="text-3xl sm:text-4xl font-mono font-bold text-slate-100 tracking-tight">
                  {metric.value}
                </div>
                <div className="text-sm font-semibold text-indigo-400 font-serif">
                  {metric.label}
                </div>
                <p className="text-xs text-slate-300 font-light mt-2 pt-2 border-t border-white/10 leading-relaxed">
                  {metric.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Narrative Model Explain block - Massive Glass Panel */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs text-indigo-300 font-mono">
                <BarChart3 size={14} />
                市场验证结论 / Market Conclusion
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-100 leading-tight">
                历史海战与爱国情绪，不仅能引爆流量，更能实现极高商业化闭环
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                标杆项目《霍去病》证明：历史战争题材只要拥有<strong>强有力的叙事推进</strong>和<strong>极高的视觉完成度</strong>，就能瞬间在海外华人圈以及泛亚洲市场上取得重磅突破。
              </p>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                对本剧《台湾！台湾！》而言，这意味着：两岸同胞抵御外侮的守土大义，题材天然成立、海外版权极具溢价空间、极易引发各界官方与民间自发安利。
              </p>
            </div>

            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4 backdrop-blur-md">
              <h4 className="text-sm font-semibold text-slate-200">“短剧打样—IP放大”可复制闭环逻辑</h4>
              
              <div className="space-y-3.5">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/10 border border-white/15 text-indigo-300 text-xs flex items-center justify-center font-mono font-bold flex-shrink-0 mt-0.5 shadow-sm">1</div>
                  <div>
                    <h5 className="text-xs font-semibold text-slate-200">低成本快速试水</h5>
                    <p className="text-[11px] text-slate-400 font-light mt-0.5">利用 AIGC 极低成本快速生成剧目，迅速完成市场付费反馈测试。</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/10 border border-white/15 text-indigo-300 text-xs flex items-center justify-center font-mono font-bold flex-shrink-0 mt-0.5 shadow-sm">2</div>
                  <div>
                    <h5 className="text-xs font-semibold text-slate-200">海外版权直接变现</h5>
                    <p className="text-[11px] text-slate-400 font-light mt-0.5">历史与情感的通用属性，促使该剧可以快速打入 Netflix、Viki 等出海分发系统。</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/10 border border-white/15 text-indigo-300 text-xs flex items-center justify-center font-mono font-bold flex-shrink-0 mt-0.5 shadow-sm">3</div>
                  <div>
                    <h5 className="text-xs font-semibold text-slate-200">无缝反哺院线大片</h5>
                    <p className="text-[11px] text-slate-400 font-light mt-0.5">验证播放数据与粘性后，以全套成熟数字资产和高分知名度无缝切入院线电影。</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
