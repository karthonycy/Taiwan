import React from 'react';
import { motion } from 'motion/react';
import { Shield, Film, Users, Sparkles, TrendingUp, Cpu, Bookmark, HelpCircle } from 'lucide-react';
import { highlights } from '../data';

const windows = [
  {
    id: "w1",
    title: "题材窗口",
    subtitle: "Subject Window",
    icon: Bookmark,
    color: "from-indigo-500/10 to-purple-500/10",
    desc: "台湾叙事与中国近代海防史具备天然的国民级关注度。历史战争题材在当今短剧赛道极为稀缺，极易形成差异化重磅突围。通过“守土、家国、统一”的叙事机制，能够最大化激活全民级情绪共鸣与文化向心力。"
  },
  {
    id: "w2",
    title: "产业窗口",
    subtitle: "Industry Window",
    icon: TrendingUp,
    color: "from-purple-500/10 to-pink-500/10",
    desc: "微短剧市场规模正处于爆发性增长中。各大头部平台正加速从过去的“低成本流量爽剧”转向“高品质、高艺术价值的破圈精品内容”。横屏史诗短剧正是承接电影级视听与精细化叙事表达的最佳蓝海形态。"
  },
  {
    id: "w3",
    title: "技术窗口",
    subtitle: "Technology Window",
    icon: Cpu,
    color: "from-indigo-500/10 to-pink-500/10",
    desc: "AIGC 视频生成与渲染算法正迎来颠覆式跃升。历史大型场景、宏大海洋战争场面制作效率显著提升。在传统影视中需要数千万级的预算，现在用100万级轻量预算即可实现，真正做到“轻舟先渡验证，再图大片爆发”。"
  }
];

export default function FeatureHighlights() {
  // Map icons helper
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Shield": return <Shield className="w-5 h-5 text-indigo-300" />;
      case "Film": return <Film className="w-5 h-5 text-indigo-300" />;
      case "Users": return <Users className="w-5 h-5 text-indigo-300" />;
      case "Sparkles": return <Sparkles className="w-5 h-5 text-indigo-300" />;
      default: return <HelpCircle className="w-5 h-5 text-indigo-300" />;
    }
  };

  return (
    <section id="highlights" className="py-24 bg-transparent text-slate-100 relative">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* BLOCK 1: WHY NOW */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-2">Why Produce "Taiwan Taiwan" Now</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-100">三大宏观战略窗口：为什么是现在？</h2>
          <p className="text-slate-400 text-sm mt-3 font-light">
            时代、行业、技术迎来历史交汇，精品爱国主义 AIGC 短剧正逢绝佳红利期
          </p>
          <div className="h-1 w-12 bg-indigo-500 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {windows.map((win) => {
            const IconComponent = win.icon;
            return (
              <motion.div
                key={win.id}
                whileHover={{ y: -5 }}
                className={`p-8 rounded-3xl bg-gradient-to-br ${win.color} backdrop-blur-md border border-white/10 flex flex-col justify-between shadow-lg hover:shadow-indigo-500/10 transition-all`}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-indigo-300 shadow-inner">
                    <IconComponent size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-100">{win.title}</h3>
                    <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">{win.subtitle}</p>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed font-light">{win.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BLOCK 2: PROJECT HIGHLIGHTS */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-2">Project Highlights</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-100">四大核坚项目亮点</h2>
          <p className="text-slate-400 text-sm mt-3 font-light">
            以顶流之姿切入细分蓝海，依托广电体系资源构建核心护城河
          </p>
          <div className="h-1 w-12 bg-indigo-500 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:bg-white/10 transition-all duration-300 shadow-xl hover:shadow-indigo-500/5"
            >
              {/* Corner badge index */}
              <div className="absolute top-6 right-8 text-5xl font-mono font-bold text-white/5 group-hover:text-indigo-400/10 transition-colors">
                {card.number}
              </div>

              <div className="flex gap-4 items-start relative z-10">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-indigo-300 shadow-sm">
                  {getIcon(card.icon)}
                </div>
                <div className="space-y-4 flex-grow">
                  <h3 className="text-lg font-serif font-semibold text-slate-100 group-hover:text-indigo-300 transition-colors">
                    {card.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {card.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-sm text-slate-300 flex items-start gap-2.5 font-light leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
