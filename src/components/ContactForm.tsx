import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, Building, MapPin, Send, CheckCircle2, ListFilter, Trash2 } from 'lucide-react';
import { ContactSubmission } from '../types';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState<number>(10); // default 10万
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorText, setErrorText] = useState('');
  
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);

  // Load existing inquiries from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('chaoshengji_inquiries');
    if (saved) {
      try {
        setSubmissions(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorText('');

    if (!name || !phone || !message) {
      setErrorText('请填写您的姓名、联系电话以及咨询合作内容。');
      return;
    }

    const newInquiry: ContactSubmission = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      company: company || '个人投资者',
      phone,
      email: email || '未提供',
      amount,
      message,
      createdAt: new Date().toLocaleString('zh-CN', { hour12: false })
    };

    const updatedSubmissions = [newInquiry, ...submissions];
    setSubmissions(updatedSubmissions);
    localStorage.setItem('chaoshengji_inquiries', JSON.stringify(updatedSubmissions));

    // Reset Form
    setName('');
    setCompany('');
    setPhone('');
    setEmail('');
    setAmount(10);
    setMessage('');
    setIsSubmitted(true);

    // Timeout to clear success screen
    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  const clearAllInquiries = () => {
    // Elegant fallback check avoiding native blocks where possible, or keep it standard
    const confirmClear = window.confirm ? window.confirm('确定要清除本地的所有咨询记录吗？') : true;
    if (confirmClear) {
      setSubmissions([]);
      localStorage.removeItem('chaoshengji_inquiries');
    }
  };

  return (
    <section id="contact" className="py-24 bg-transparent border-t border-white/10 relative">
      <div className="absolute inset-0 bg-radial-gradient from-indigo-500/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-2">Contact & Inquiries</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-100">项目咨询与洽谈对接</h2>
          <p className="text-slate-400 text-sm mt-3 font-light">
            诚邀志同道合的投资人、平台合作商与宣发渠道，携手共筑 1884 两岸保卫战的史诗影视神话
          </p>
          <div className="h-1 w-12 bg-indigo-500 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Block: Contact Cards (Col 5) */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-indigo-400 tracking-widest uppercase block">OFFICIAL OPERATOR · 出品与运营</span>
              <h3 className="text-2xl font-serif font-bold text-slate-100 leading-tight">
                湖南潮生纪数字科技有限公司
              </h3>
              <p className="text-slate-300 text-sm font-light">
                一家深耕先锋 AIGC 数字影像艺术、真人数字分身、多媒体分发与院线级精品IP全案孵化的数字科技高地。
              </p>
            </div>

            {/* Individual Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1: Wang */}
              <div className="p-5 rounded-3xl bg-white/5 border border-white/10 space-y-4 shadow-lg hover:bg-white/10 transition-colors">
                <div className="space-y-1">
                  <div className="text-lg font-bold text-slate-100">王先生</div>
                  <div className="text-xs text-indigo-400 font-mono">项目核心咨询负责人</div>
                </div>
                <div className="pt-2 border-t border-white/10 flex items-center gap-2.5 text-xs text-slate-300">
                  <Phone size={14} className="text-indigo-400" />
                  <a href="tel:19091783392" className="hover:text-indigo-300 transition-colors font-mono font-medium">
                    19091783392
                  </a>
                </div>
              </div>

              {/* Card 2: Chen */}
              <div className="p-5 rounded-3xl bg-white/5 border border-white/10 space-y-4 shadow-lg hover:bg-white/10 transition-colors">
                <div className="space-y-1">
                  <div className="text-lg font-bold text-slate-100">陈先生</div>
                  <div className="text-xs text-indigo-400 font-mono">商务对接负责人</div>
                </div>
                <div className="pt-2 border-t border-white/10 flex items-center gap-2.5 text-xs text-slate-300">
                  <Phone size={14} className="text-indigo-400" />
                  <a href="tel:13042360788" className="hover:text-indigo-300 transition-colors font-mono font-medium">
                    13042360788
                  </a>
                </div>
              </div>
            </div>

            {/* Email & Location details */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 space-y-4 backdrop-blur-md">
              <div className="flex items-center gap-3 text-slate-300 text-xs">
                <Mail size={16} className="text-indigo-400" />
                <div>
                  <span className="text-slate-500 block text-[10px] font-mono">OFFICIAL EMAIL</span>
                  <a href="mailto:916699634@qq.com" className="hover:text-indigo-300 font-mono">
                    916699634@qq.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-300 text-xs">
                <MapPin size={16} className="text-indigo-400" />
                <div>
                  <span className="text-slate-500 block text-[10px] font-mono">COMPANY HEADQUARTERS</span>
                  <span>中国 · 湖南长沙广播电视台麓谷新媒体孵化基地</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Block: Working Interactive Form (Col 7) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 backdrop-blur-md shadow-2xl">
              
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <h4 className="text-xs font-mono text-indigo-400 uppercase tracking-widest">
                  意向沟通表单 / Submit Joint Proposal
                </h4>
                <span className="text-[10px] text-slate-400 font-mono">
                  提交信息，专属客服24小时内回电
                </span>
              </div>

              {/* Submission success screen */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-4 bg-emerald-950/60 border border-emerald-900/50 rounded-2xl text-center text-emerald-400 text-xs space-y-1.5"
                  >
                    <CheckCircle2 size={24} className="mx-auto text-emerald-500 animate-bounce" />
                    <p className="font-semibold">意向表单提交成功！</p>
                    <p className="text-[10px] text-emerald-300/80">您的意向书已安全保存。王先生或陈先生将第一时间与您取得电话联系。</p>
                  </motion.div>
                )}
                
                {errorText && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-3 bg-red-950/60 border border-red-900/50 rounded-2xl text-center text-red-400 text-xs"
                  >
                    {errorText}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form elements */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-400 font-medium">您的姓名 <span className="text-indigo-400">*</span></label>
                    <input 
                      type="text" 
                      required
                      placeholder="例: 李总" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 focus:border-indigo-500 rounded-2xl px-4 py-2.5 text-xs text-slate-100 outline-none transition-colors"
                    />
                  </div>

                  {/* Company field */}
                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-400 font-medium">公司 / 投资实体名</label>
                    <input 
                      type="text" 
                      placeholder="例: 盛世文化产业投资" 
                      value={company} 
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 focus:border-indigo-500 rounded-2xl px-4 py-2.5 text-xs text-slate-100 outline-none transition-colors"
                    />
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Phone field */}
                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-400 font-medium">联系电话 <span className="text-indigo-400">*</span></label>
                    <input 
                      type="tel" 
                      required
                      placeholder="例: 138-xxxx-xxxx" 
                      value={phone} 
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 focus:border-indigo-500 rounded-2xl px-4 py-2.5 text-xs text-slate-100 outline-none transition-colors"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-400 font-medium">电子邮箱</label>
                    <input 
                      type="email" 
                      placeholder="例: investor@domain.com" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 focus:border-indigo-500 rounded-2xl px-4 py-2.5 text-xs text-slate-100 outline-none transition-colors"
                    />
                  </div>

                </div>

                {/* Expected Investment Slide option */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-slate-400 font-medium">
                    <span>意向拟投规模规模（万元）</span>
                    <span className="text-indigo-300 font-mono font-bold">{amount} 万 RMB</span>
                  </div>
                  <input 
                    type="range" 
                    min="5" 
                    max="100" 
                    step="5"
                    value={amount} 
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                    <span>5 万 (占股 5%)</span>
                    <span>100 万 (全包独占 100%)</span>
                  </div>
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label className="text-xs text-slate-400 font-medium">咨询及建议合作内容 <span className="text-indigo-400">*</span></label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="请输入您的投资意向描述、合作方向或特殊要求..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 focus:border-indigo-500 rounded-2xl p-4 text-xs text-slate-100 outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-slate-100 rounded-2xl font-medium shadow-lg hover:shadow-indigo-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send size={14} />
                  <span>提交商业意向咨询书</span>
                </button>

              </form>

            </div>

            {/* List of submissions recorded locally */}
            {submissions.length > 0 && (
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 space-y-4 backdrop-blur-md shadow-xl animate-fade-in">
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 font-mono">
                    <ListFilter size={14} className="text-indigo-400" />
                    <span>本地意向书记录 (已提交 {submissions.length} 条)</span>
                  </div>
                  <button 
                    onClick={clearAllInquiries}
                    className="p-1 text-slate-400 hover:text-red-400 rounded transition-colors cursor-pointer"
                    title="清空记录"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>

                <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                  {submissions.map((sub) => (
                    <div key={sub.id} className="bg-white/5 border border-white/5 p-4 rounded-2xl space-y-2">
                      <div className="flex justify-between items-start text-xs">
                        <div>
                          <span className="font-semibold text-slate-200">{sub.name}</span>
                          <span className="text-slate-400 text-[10px] ml-2">({sub.company})</span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-mono">{sub.createdAt}</span>
                      </div>
                      <div className="flex gap-2 items-center text-[11px]">
                        <span className="text-slate-300 font-mono">联系电话: {sub.phone}</span>
                        <span className="text-white/20">|</span>
                        <span className="text-indigo-300 font-semibold font-mono">意向拟投: {sub.amount} 万</span>
                      </div>
                      <p className="text-[11px] text-slate-300 font-light italic leading-relaxed">
                        “ {sub.message} ”
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
