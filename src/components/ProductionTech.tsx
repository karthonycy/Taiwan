import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, Eye, Zap, Layers, RefreshCw } from 'lucide-react';

export default function ProductionTech() {
  const [sliderVal, setSliderVal] = useState(50); // 0 to 100 percentage
  const [activeTab, setActiveTab] = useState<'compare' | 'spec'>('compare');

  return (
    <section id="production" className="py-24 bg-transparent border-t border-white/10 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-2">Innovative Production</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-100">创新制作：AIGC与真人实拍的完美平衡</h2>
          <p className="text-slate-400 text-sm mt-3 font-light">
            通过最前沿的影视工业化路径，兼得 AIGC 的极致性价比与真人表演的饱满情绪张力
          </p>
          <div className="h-1 w-12 bg-indigo-500 mx-auto mt-4" />
        </div>

        {/* Content Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Narrative / Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-serif font-semibold text-slate-100">技术降本增效与艺术真实表达的双向平衡策略</h3>
              <p className="text-xs text-indigo-300 font-mono tracking-widest uppercase">Dual-Engine Industrialization Pipeline</p>
            </div>

            <div className="space-y-4">
              {/* Card 1: AIGC - Frosted Glass */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors shadow-lg">
                <div className="flex items-center gap-3 text-indigo-300 mb-2">
                  <Cpu size={18} />
                  <h4 className="font-semibold text-sm text-slate-200">AIGC 极致降本增效（宏大视效）</h4>
                </div>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  利用最先进的 AIGC 核心引擎，渲染还原 1884 年基隆港、中法两军浩瀚铁甲舰对轰以及海战炮火熏天的壮观全景。大幅缩短制作周期，将数千万的传统影视特技费用降至几十万元。
                </p>
              </div>

              {/* Card 2: Real Shooting - Frosted Glass */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors shadow-lg">
                <div className="flex items-center gap-3 text-indigo-300 mb-2">
                  <Eye size={18} />
                  <h4 className="font-semibold text-sm text-slate-200">真人数字影棚实拍（细腻情感）</h4>
                </div>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  坚决克服纯 AI 角色在微表情 and 情绪表达上的冰冷和缺陷。项目坚持采用核心骨干演员进入虚拟 LED / 绿幕影棚实战拍摄。通过微表情动作捕捉与深度修复，保障人物热泪、坚毅、悲壮等情感的深度传递。
                </p>
              </div>
            </div>
          </div>

          {/* Right Block: Interactive Split Screen VFX Slider */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 space-y-6 backdrop-blur-md shadow-2xl">
              
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <div>
                  <h4 className="text-xs font-mono text-indigo-300 uppercase tracking-widest">
                    VFX 混合流水线演示 / Interactive VFX Pipeline
                  </h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    拖动下方滑块，实时预览“演员绿幕”到“AIGC背景”的最终融合合成过程
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="text-[10px] bg-white/10 text-indigo-300 px-2.5 py-1 rounded-full border border-white/10 font-mono">
                    PRO LEVEL
                  </span>
                </div>
              </div>

              {/* Slider View Stage - Frosted frame */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-inner">
                
                {/* Left Image: Actor Green Screen */}
                <div className="absolute inset-0 bg-slate-950">
                  <div 
                    className="absolute inset-0 bg-cover bg-center filter brightness-110 saturate-[1.2]"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&q=80&w=800')`
                    }}
                  />
                  {/* Neon Green overlay filter to represent Green Screen acting */}
                  <div className="absolute inset-0 bg-emerald-500/20 mix-blend-color" />
                  <div className="absolute bottom-4 left-4 bg-emerald-950/80 border border-emerald-500/20 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-mono text-emerald-400">
                    ACTOR: 绿幕拍摄 (30% 质感)
                  </div>
                </div>

                {/* Right Image: AIGC Background Scene (Clipped based on slider value) */}
                <div 
                  className="absolute inset-y-0 right-0 left-0 overflow-hidden transition-all duration-75"
                  style={{ clipPath: `polygon(${sliderVal}% 0, 100% 0, 100% 100%, ${sliderVal}% 100%)` }}
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center filter saturate-50 contrast-125"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&q=80&w=800')`
                    }}
                  />
                  {/* Deep slate blue/red movie overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 right-4 bg-indigo-950/80 border border-indigo-500/20 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-mono text-indigo-300">
                    AIGC: 浩瀚海战渲染 (100% 电影级融合)
                  </div>
                </div>

                {/* Vertical Divider line indicating slider handle position */}
                <div 
                  className="absolute inset-y-0 w-0.5 bg-indigo-400 pointer-events-none"
                  style={{ left: `${sliderVal}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-indigo-500 border-2 border-white rounded-full flex items-center justify-center text-white text-xs shadow-lg">
                    ↔
                  </div>
                </div>
              </div>

              {/* Slider Control Input */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-xs font-mono text-slate-400">
                  <span>← 纯影棚真人录像 (Green Screen)</span>
                  <span className="text-indigo-400 font-bold">{sliderVal}% 复合强度</span>
                  <span>AIGC 场景渲染背景 (VFX Backdrop) →</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={sliderVal} 
                  onChange={(e) => setSliderVal(Number(e.target.value))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
              </div>

              {/* Explanatory footer inside tool card */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 text-center">
                <div className="space-y-1">
                  <div className="text-sm font-bold font-mono text-indigo-400">10倍 降本</div>
                  <div className="text-[10px] text-slate-400">免去繁重大型海战场景物理搭建</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-bold font-mono text-indigo-400">3倍 高效</div>
                  <div className="text-[10px] text-slate-400">AI算力替代慢速的后期特效团队</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-bold font-mono text-indigo-400">100% 真情</div>
                  <div className="text-[10px] text-slate-400">人脸数字融合保留真实动人神态</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
