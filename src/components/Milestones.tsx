import React from 'react';
import { motion } from 'motion/react';
import { Calendar, CheckCircle2, ChevronRight } from 'lucide-react';
import { milestones } from '../data';

export default function Milestones() {
  return (
    <section id="milestones" className="py-24 bg-transparent border-t border-white/10 relative">
      <div className="absolute inset-0 bg-radial-gradient from-indigo-500/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-2">Project Implementation Milestones</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-100">项目推进里程碑规划</h2>
          <p className="text-slate-400 text-sm mt-3 font-light">
            精心编排的 5 个月开发与发行周期，通过精细化流程节点，实现极致的工业化交付速度
          </p>
          <div className="h-1 w-12 bg-indigo-500 mx-auto mt-4" />
        </div>

        {/* Timelines Matrix - Frosted Glass cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((milestone, idx) => (
            <motion.div
              key={milestone.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:border-indigo-500/40 hover:bg-white/10 transition-all duration-300 group shadow-lg"
            >
              <div className="space-y-4">
                {/* Node marker header */}
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-2xl font-mono font-extrabold text-indigo-900/60 group-hover:text-indigo-400 transition-colors">
                    0{idx + 1}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-[10px] font-mono font-semibold text-indigo-300">
                    <Calendar size={10} />
                    {milestone.timeline}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-serif font-semibold text-slate-100 group-hover:text-indigo-300 transition-colors">
                    {milestone.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {milestone.description}
                  </p>
                </div>

                {/* Checklist sub-items */}
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <h4 className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">
                    执行要点 / KEY DELIVERABLES
                  </h4>
                  <div className="space-y-1.5">
                    {milestone.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex gap-2 items-start text-[11px] text-slate-300 font-light">
                        <CheckCircle2 size={12} className="text-indigo-400 mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {idx < milestones.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 translate-y-1/2 -right-4 text-white/5 pointer-events-none">
                  <ChevronRight size={24} />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Guarantee */}
        <div className="mt-12 text-center text-xs text-slate-400 font-light">
          如对推进细节或主创团队的过往成熟履历有兴趣，欢迎随时在最下方的“项目咨询”板块联系。
        </div>

      </div>
    </section>
  );
}
