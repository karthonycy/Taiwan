import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Coins, PiggyBank, ArrowUpRight, ShieldAlert, Check, HelpCircle, Calculator, Info } from 'lucide-react';
import { budgetCategories, revenueForecasts, returnTiers } from '../data';

export default function FinancialCalculator() {
  const [yourInvestment, setYourInvestment] = useState(20); // default 20万元 (200k RMB)
  const [projectedRevenue, setProjectedRevenue] = useState(1200); // default 1200万元 (12 Million RMB, matches the 10M - 14M estimate)
  const [activeBudgetTab, setActiveBudgetTab] = useState(0);

  // Computations based on Return mechanism:
  // Total Project Cost/Funding is 100万元.
  const totalFunding = 100;
  const userShareRatio = yourInvestment / totalFunding; // e.g. 20%

  // Tiered Profit Distribution Logic:
  // Tier 1: 0 - 150万: 70% to investors / 30% to producer
  // Tier 2: 151 - 250万: 50% / 50%
  // Tier 3: 251 - 500万: 30% / 70%
  // Tier 4: 500万以上: 20% / 80%
  const calculateTotalInvestorReturn = (revenue: number) => {
    let pool = 0;
    
    // Tier 1 (up to 150万)
    if (revenue <= 150) {
      pool += revenue * 0.7;
    } else {
      pool += 150 * 0.7; // 105万
      
      // Tier 2 (150 to 250万)
      if (revenue <= 250) {
        pool += (revenue - 150) * 0.5;
      } else {
        pool += 100 * 0.5; // 50万 (cumulative pool: 155万)
        
        // Tier 3 (250 to 500万)
        if (revenue <= 500) {
          pool += (revenue - 250) * 0.3;
        } else {
          pool += 250 * 0.3; // 75万 (cumulative pool: 230万)
          
          // Tier 4 (above 500万)
          pool += (revenue - 500) * 0.2;
        }
      }
    }
    return pool;
  };

  const totalInvestorReturnPool = calculateTotalInvestorReturn(projectedRevenue);
  const userReturn = totalInvestorReturnPool * userShareRatio;
  const userNetProfit = userReturn - yourInvestment;
  const userRoiMultiplier = userReturn / yourInvestment;

  return (
    <section id="calculator" className="py-24 bg-transparent text-slate-100 relative">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-2">Financial Plan & Calculator</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-100">财务预算、收入预测与回报模拟</h2>
          <p className="text-slate-400 text-sm mt-3 font-light">
            融资金额 100 万元，预算严谨拆解，高透明度收益分配规则，保障每一分资本的稳健成长
          </p>
          <div className="h-1 w-12 bg-indigo-500 mx-auto mt-4" />
        </div>

        {/* TOP GRID: BUDGET BLOCK & REVENUE BLOCK - Both Frosted Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Left Block: Budget Breakdown */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 backdrop-blur-md shadow-2xl">
            <h3 className="text-lg font-serif font-semibold text-slate-100 flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
              100万融资预算拆解详情
            </h3>
            
            {/* Visual Budget Bar */}
            <div className="space-y-2">
              <div className="h-4 bg-white/5 rounded-full overflow-hidden flex border border-white/10">
                <div className="h-full bg-indigo-500 hover:bg-indigo-400 transition-colors cursor-pointer" style={{ width: '50%' }} title="制作费用: 50%" />
                <div className="h-full bg-purple-500 hover:bg-purple-400 transition-colors cursor-pointer" style={{ width: '34%' }} title="推广费用: 34%" />
                <div className="h-full bg-pink-500 hover:bg-pink-400 transition-colors cursor-pointer" style={{ width: '16%' }} title="其他费用: 16%" />
              </div>
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>制作费用: 50% (50万)</span>
                <span>推广/投流: 34% (34万)</span>
                <span>其他运维: 16% (16万)</span>
              </div>
            </div>

            {/* Quick tabs */}
            <div className="flex border-b border-white/10 pb-1 gap-2">
              {budgetCategories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveBudgetTab(idx)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-t-lg transition-colors cursor-pointer ${
                    activeBudgetTab === idx 
                      ? 'border-b-2 border-indigo-500 text-indigo-300 font-semibold' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {cat.name} ({cat.amount}万)
                </button>
              ))}
            </div>

            {/* Tab content detail */}
            <motion.div
              key={activeBudgetTab}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <p className="text-xs text-slate-300 leading-relaxed bg-white/5 p-3 rounded-xl border border-white/5">
                {budgetCategories[activeBudgetTab].description}
              </p>
              <div className="space-y-2">
                <h4 className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">预算细则 / Budget Items</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {budgetCategories[activeBudgetTab].details.map((detail, idx) => (
                    <div key={idx} className="flex gap-2 items-center bg-white/5 px-3 py-2 rounded-xl border border-white/5 text-xs text-slate-300 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Block: Projected Revenues */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 backdrop-blur-md shadow-2xl flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-lg font-serif font-semibold text-slate-100 flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
                整体收入渠道预测 (总计 1000万 - 1400万)
              </h3>

              <div className="space-y-3">
                {revenueForecasts.map((forecast, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-white/5 p-3.5 rounded-2xl border border-white/5 hover:border-indigo-500/30 hover:bg-white/10 transition-colors">
                    <div className="space-y-1 max-w-[70%]">
                      <h4 className="text-xs font-semibold text-slate-200">{forecast.source}</h4>
                      <p className="text-[10px] text-slate-400 font-light truncate">{forecast.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-mono font-bold text-indigo-300">{forecast.amount}</div>
                      <div className="text-[9px] text-slate-500 font-mono">ESTIMATED</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-indigo-950/20 border border-indigo-500/20 rounded-2xl p-3 text-center text-xs text-indigo-300 font-light mt-4">
              注：海外多语言版授权预计在 Netflix / Viki 等平台取得较高独家分成，占据整体收益弹性之首。
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION: INTERACTIVE RETURN MECHANISM CALCULATOR - Giant Glassmorphic Area */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 space-y-8 backdrop-blur-md shadow-2xl">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-white/10">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 text-xs text-indigo-300 font-mono uppercase tracking-widest bg-white/10 border border-white/10 px-2.5 py-1 rounded-full">
                <Calculator size={12} />
                INVESTMENT SIMULATOR · 投资回报仿真计算器
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-100 mt-2">
                阶梯分润与拟投收益仿真模拟
              </h3>
            </div>
            
            {/* Quick Helper text */}
            <div className="flex gap-2 items-center text-slate-300 text-xs max-w-xs font-light bg-white/5 p-3 rounded-2xl border border-white/5">
              <Info size={16} className="text-indigo-400 flex-shrink-0" />
              <span>本系统根据 slide 11 所列的四档阶梯收益规则为您提供自动化回报拟合计算。</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Sliders Input (Col 7) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Slider 1: Your Investment Amount */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-slate-200">
                    拟投入金额 (您的投资占比)
                  </label>
                  <span className="text-xl font-mono font-bold text-indigo-300 bg-white/10 px-3 py-1 rounded-full border border-white/10 shadow-inner">
                    {yourInvestment} 万元人民币
                  </span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="100" 
                  step="5"
                  value={yourInvestment} 
                  onChange={(e) => setYourInvestment(Number(e.target.value))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                  <span>最低拟投：5 万 (占5%)</span>
                  <span className="text-indigo-300 font-bold">您将占有总融资比例：{(userShareRatio * 100).toFixed(0)}%</span>
                  <span>最高独投：100 万 (占100%)</span>
                </div>
              </div>

              {/* Slider 2: Projected overall gross profit */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-slate-200">
                    预估剧目整体总收益 (分润池规模)
                  </label>
                  <span className="text-xl font-mono font-bold text-indigo-300 bg-white/10 px-3 py-1 rounded-full border border-white/10 shadow-inner">
                    {projectedRevenue} 万元人民币
                  </span>
                </div>
                <input 
                  type="range" 
                  min="100" 
                  max="2000" 
                  step="50"
                  value={projectedRevenue} 
                  onChange={(e) => setProjectedRevenue(Number(e.target.value))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                  <span>保守测算：100 万 (刚回本)</span>
                  <span className="text-indigo-300 font-bold">PPT预估区间：1000万 - 1400万</span>
                  <span>乐观爆款：2000 万</span>
                </div>
              </div>

              {/* Quick static rules display for validation */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-semibold text-slate-400">分润分账参照规则 (Slide 11)</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {returnTiers.map((tier, idx) => (
                    <div key={idx} className="bg-white/5 p-2.5 rounded-2xl text-center border border-white/5">
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">{tier.phaseName}</div>
                      <div className="text-xs font-semibold text-slate-200 mt-1">{tier.range}</div>
                      <div className="text-xs font-mono font-semibold text-indigo-300 mt-0.5">资方分 {tier.investorRatio}%</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Computation Display panel (Col 5) - Inner Glass Card */}
            <div className="lg:col-span-5 bg-white/5 rounded-3xl border border-white/10 p-6 space-y-6 flex flex-col justify-between backdrop-blur-md shadow-xl">
              
              <div className="space-y-4">
                <h4 className="text-xs font-mono text-slate-400 tracking-wider uppercase pb-2 border-b border-white/10 text-center">
                  您的专属投资回报测算结论
                </h4>
                
                {/* Metric 1: ROI Multiple */}
                <div className="text-center py-4 bg-white/5 border border-white/5 rounded-2xl">
                  <div className="text-xs text-slate-400">预估投资回报倍数 (ROI)</div>
                  <div className={`text-4xl font-mono font-bold mt-1 ${userRoiMultiplier >= 1 ? 'text-emerald-400' : 'text-indigo-300'}`}>
                    {userRoiMultiplier.toFixed(2)} x
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono mt-1">
                    {userRoiMultiplier >= 1 ? "本金已安全收回，进入盈余分成" : "本金仍在加速回笼中..."}
                  </div>
                </div>

                {/* Grid readouts */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5">
                    <div className="text-[11px] text-slate-400 font-light">预估总回款金额</div>
                    <div className="text-lg font-mono font-bold text-slate-200 mt-0.5">{userReturn.toFixed(1)} 万</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5">
                    <div className="text-[11px] text-slate-400 font-light">预估净获利</div>
                    <div className={`text-lg font-mono font-bold mt-0.5 ${userNetProfit >= 0 ? 'text-indigo-300' : 'text-slate-400'}`}>
                      {userNetProfit >= 0 ? `+${userNetProfit.toFixed(1)}` : userNetProfit.toFixed(1)} 万
                    </div>
                  </div>
                </div>

                {/* Repayment Speed visual cue */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-slate-400 font-light">
                    <span>资金安全级别 (本金赔付保障)</span>
                    <span className="font-semibold text-emerald-400">70% 首期高分成保底</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-indigo-500 transition-all duration-300"
                      style={{ width: `${Math.min(100, userRoiMultiplier * 100)}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-white/10 text-xs font-light text-slate-400">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5" />
                  <span><strong>资方优先回本机制</strong>：项目一上线，资方取得前150万收益中的70%，加速资金安全退出。</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5" />
                  <span><strong>收益估算公式已绑定</strong>：数据已与湖南潮生纪精品短剧项目收益阶梯自动扣合。</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
