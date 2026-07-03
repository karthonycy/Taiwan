import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, Calendar, Award, Compass, Volume2, VolumeX, Music, RotateCcw } from 'lucide-react';
import { projectBasicInfo } from '../data';

interface LyricLine {
  time: number;
  text: string;
}

const LYRICS: LyricLine[] = [
  { time: 0, text: "《孤岛长风》" },
  { time: 2, text: "《台湾！台湾！》精品短剧主题曲" },
  { time: 4, text: "制作：潮生纪 | 声线风格：谭维维 (AI)" },
  { time: 10, text: "海雾 锁住了基隆的旧梦" },
  { time: 16, text: "谁的残旗 还在风里 猎猎地痛" },
  { time: 22, text: "佐泰老矣 白发在闽江 惊了苍龙" },
  { time: 28, text: "刘郎孤坐 撤军的令 笔尖重逾千钧重" },
  { time: 35, text: "这一局 舍了城 换了命 谁懂？" },
  { time: 41, text: "半生勋名 抵不过 孤岛上一场 连绵的雨红" },
  { time: 48, text: "看那 渔网入水 缠住 贪婪的桨舵" },
  { time: 54, text: "听那 誓言入海 惊起 翻涌的雷火" },
  { time: 60, text: "男儿 既然 避无可避 何不 燃成这一抹 绝色的火！" },
  { time: 67, text: "还我河山！这一刀 劈开 时代的 狂浪" },
  { time: 73, text: "还我河山！那一面 岳字旗 遮住了 绝望" },
  { time: 79, text: "血沫 溅在 眉心 胜过 胭脂的烫" },
  { time: 85, text: "杀气 贯入 咽喉 才是 活着的 狂！" },
  { time: 91, text: "孙九 跃马 斩旗 头颅 包在 锦缎中" },
  { time: 97, text: "丛林 设伏 陷阱 鬼佬 做了 孤魂冢" },
  { time: 103, text: "不要 问我 这里的 土 有多少 英雄的 冢" },
  { time: 109, text: "只要 记得 这里的 浪 永远 姓着 华夏的 宗！" },
  { time: 116, text: "国家有望 诸君努力" },
  { time: 121, text: "这一身 尘灰 葬在 宝岛的 泥" },
  { time: 126, text: "死生 之后 才有 这一省的 基" },
  { time: 132, text: "台湾！台湾！ 这一剑 刺破 黑暗的 屏障" },
  { time: 138, text: "台湾！台湾！ 我辈 终将 挺直 脊梁 站成 港防！" },
  { time: 145, text: "杀敌 寇！ 饮尽 这一碗 孤独的 酒" },
  { time: 151, text: "守我 家！ 哪怕 这一身 尽是 伤口！" },
  { time: 158, text: "[尾奏 - 沧海起帆，壮怀激烈]" }
];

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(372); // Default estimate for backup
  const [isAutoplayBlocked, setIsAutoplayBlocked] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const lyricContainerRef = useRef<HTMLDivElement | null>(null);

  // Soundwave animation elements
  const waves = Array.from({ length: 24 });

  // Handle play/pause toggle
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            setIsAutoplayBlocked(false);
          })
          .catch((err) => {
            console.log("Playback failed:", err);
          });
      }
    }
  };

  // Handle mute toggle
  const toggleMute = () => {
    if (audioRef.current) {
      const nextMuted = !isMuted;
      audioRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  // Restart song
  const restartSong = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      setCurrentTime(0);
      if (!isPlaying) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(e => console.log(e));
      }
    }
  };

  // Audio loading & Autoplay logic
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set initial mute
    audio.muted = isMuted;

    // Attempt autoplay
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          setIsAutoplayBlocked(false);
        })
        .catch((err) => {
          console.log("Unmuted autoplay blocked. Falling back to muted autoplay:", err);
          // Auto-fallback to muted autoplay
          audio.muted = true;
          setIsMuted(true);
          setIsAutoplayBlocked(true);
          audio.play()
            .then(() => {
              setIsPlaying(true);
            })
            .catch((mutedErr) => {
              console.log("Muted autoplay blocked as well. Waiting for user interaction:", mutedErr);
            });
        });
    }
  }, []);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration || 372);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextTime = Number(e.target.value);
    setCurrentTime(nextTime);
    if (audioRef.current) {
      audioRef.current.currentTime = nextTime;
    }
  };

  // Determine current active lyric line
  const activeLyricIndex = LYRICS.reduce((activeIndex, lyric, idx) => {
    if (currentTime >= lyric.time) {
      return idx;
    }
    return activeIndex;
  }, 0);

  // Smoothly center scroll active lyric
  useEffect(() => {
    if (lyricContainerRef.current) {
      const activeElement = lyricContainerRef.current.querySelector('[data-active="true"]');
      if (activeElement) {
        activeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    }
  }, [activeLyricIndex]);

  const formatTime = (secs: number) => {
    if (isNaN(secs)) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between bg-transparent text-slate-100 overflow-hidden pt-24">
      {/* Audio element hosting the high-quality atmospheric cinematic theme track */}
      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        preload="auto"
        loop
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />

      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 bg-radial-gradient from-indigo-500/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Animated Floating Particles */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 py-12 flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Calligraphy Title & Core Copy */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-indigo-300 uppercase tracking-widest mx-auto lg:mx-0 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
                AIGC Premium Short Drama Project
              </div>
              
              {/* Calligraphy Title Representation */}
              <h1 className="text-5xl sm:text-7xl font-serif font-bold tracking-tight leading-none text-slate-100 relative">
                <span className="block font-sans text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 pb-2">
                  台湾！台湾！
                </span>
                <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase block mt-3">
                  TAIWAN TAIWAN · 1884
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed"
            >
              湖南潮生纪数字科技有限公司倾力打造。用最先锋的影像艺术抚慰真挚的家国情怀，重塑 1884 年中法战争时期台湾同胞血融一体、浴血御敌的史诗华章。
            </motion.p>

            {/* Quick Metrics Cards - Frosted Glass styled */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 pt-2"
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl text-center hover:bg-white/10 transition-all shadow-lg hover:shadow-indigo-500/10">
                <div className="text-2xl font-semibold font-mono text-indigo-400">100万</div>
                <div className="text-xs text-slate-400 mt-1">融资规模</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl text-center hover:bg-white/10 transition-all shadow-lg hover:shadow-indigo-500/10">
                <div className="text-2xl font-semibold font-mono text-indigo-400">横屏史诗</div>
                <div className="text-xs text-slate-400 mt-1">剧目形态</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl text-center hover:bg-white/10 transition-all shadow-lg hover:shadow-indigo-500/10">
                <div className="text-2xl font-semibold font-mono text-indigo-400">120分钟</div>
                <div className="text-xs text-slate-400 mt-1">单元剧时长</div>
              </div>
            </motion.div>

            {/* CTA Buttons - Rounded Full with Glass look */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="#calculator"
                className="px-8 py-3.5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full font-semibold shadow-lg shadow-indigo-500/20 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                计算投资回报
              </a>
              <a
                href="#overview"
                className="px-8 py-3.5 bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 rounded-full font-semibold transition-all duration-300 backdrop-blur-md"
              >
                浏览项目详情
              </a>
            </motion.div>
          </div>

          {/* Epic Real Music Lyric-Synced Player Window - High Visual Polish */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative w-full max-w-md aspect-[3/4] bg-slate-950/80 rounded-3xl overflow-hidden border border-white/10 shadow-2xl group backdrop-blur-xl flex flex-col justify-between p-6"
            >
              {/* Animated Cinematic background overlay representing smoke & sea depth */}
              <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center mix-blend-overlay pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50 pointer-events-none" />

              {/* Player Top Meta Bar */}
              <div className="relative z-10 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }}>
                    <Music size={14} />
                  </div>
                  <div>
                    <span className="text-[10px] text-indigo-400 font-mono block tracking-wider uppercase">NOW PLAYING</span>
                    <h3 className="text-xs font-serif font-bold text-slate-100">孤岛长风 · 主题曲</h3>
                  </div>
                </div>

                {/* Mute/Unmute Action */}
                <button 
                  onClick={toggleMute}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-all backdrop-blur-md cursor-pointer"
                  title={isMuted ? "取消静音" : "静音"}
                >
                  {isMuted ? <VolumeX size={15} className="text-rose-400 animate-pulse" /> : <Volume2 size={15} className="text-indigo-400" />}
                </button>
              </div>

              {/* Autoplay status warning if browser restricted */}
              {isAutoplayBlocked && isMuted && isPlaying && (
                <div className="relative z-10 mx-auto max-w-xs text-center mt-2">
                  <span className="inline-block text-[9px] font-mono text-indigo-300 bg-indigo-950/60 px-2 py-0.5 rounded-full border border-indigo-500/30 animate-pulse">
                    已为您静音自动播放中 · 点击右上方取消静音
                  </span>
                </div>
              )}

              {/* Lyrcs Scrolling Viewport - Masterly center-scrolling */}
              <div className="relative z-10 flex-grow my-6 flex flex-col justify-center overflow-hidden h-[180px]">
                <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-slate-950 to-transparent pointer-events-none z-20" />
                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none z-20" />
                
                <div 
                  ref={lyricContainerRef}
                  className="h-full overflow-y-auto scrollbar-none py-16 space-y-5 flex flex-col items-center select-none"
                  style={{ scrollbarWidth: 'none' }}
                >
                  {LYRICS.map((line, idx) => {
                    const isActive = idx === activeLyricIndex;
                    return (
                      <motion.div
                        key={idx}
                        data-active={isActive ? "true" : "false"}
                        animate={{
                          scale: isActive ? 1.05 : 0.92,
                          opacity: isActive ? 1 : 0.35,
                          y: 0
                        }}
                        transition={{ duration: 0.35 }}
                        className={`text-center font-medium leading-relaxed px-4 transition-colors duration-300 cursor-pointer ${
                          isActive 
                            ? 'text-indigo-300 font-serif text-base font-bold drop-shadow-[0_2px_10px_rgba(99,102,241,0.2)]' 
                            : 'text-slate-400 font-sans text-xs'
                        }`}
                        onClick={() => {
                          if (audioRef.current) {
                            audioRef.current.currentTime = line.time;
                            setCurrentTime(line.time);
                          }
                        }}
                      >
                        {isActive ? `「 ${line.text} 」` : line.text}
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Progress Slider & Interactive Drag Area */}
              <div className="relative z-10 space-y-3 pt-4 border-t border-white/5">
                <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono">
                  <span>{formatTime(currentTime)}</span>
                  <span className="text-[9px] text-indigo-400 bg-indigo-950/40 px-2 py-0.5 rounded-full border border-indigo-500/10">
                    谭维维风格 · 潮生纪数字科技
                  </span>
                  <span>{formatTime(duration)}</span>
                </div>

                <div className="relative group/slider">
                  <input 
                    type="range"
                    min="0"
                    max={duration || 372}
                    value={currentTime}
                    onChange={handleProgressChange}
                    className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-indigo-500 hover:accent-indigo-400 transition-colors"
                  />
                  {/* Glowing progress rail */}
                  <div 
                    className="absolute top-0 left-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full pointer-events-none opacity-40"
                    style={{ width: `${(currentTime / (duration || 372)) * 100}%` }}
                  />
                </div>

                {/* Sound wave visualizer syncing in frequency size on Play */}
                <div className="flex justify-center items-end gap-1 h-5 pt-1">
                  {waves.map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-[2px] bg-gradient-to-t from-indigo-500 to-indigo-300 rounded-full"
                      animate={{
                        height: isPlaying ? [4, Math.random() * 16 + 4, 4] : 4
                      }}
                      transition={{
                        duration: 0.5 + i * 0.04,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    />
                  ))}
                </div>

                {/* Controls Deck */}
                <div className="flex items-center justify-between bg-white/5 backdrop-blur-md rounded-2xl p-2.5 border border-white/5 mt-1">
                  <button 
                    onClick={restartSong}
                    className="p-2 rounded-full hover:bg-white/5 text-slate-400 hover:text-indigo-400 transition-colors cursor-pointer"
                    title="重播"
                  >
                    <RotateCcw size={14} />
                  </button>

                  <button
                    onClick={togglePlay}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-500 hover:bg-indigo-600 text-white transition-all shadow-lg hover:shadow-indigo-500/20 active:scale-95 cursor-pointer"
                    title={isPlaying ? "暂停" : "播放"}
                  >
                    {isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" className="ml-0.5" />}
                  </button>

                  <span className="text-[9px] text-indigo-300 font-mono tracking-widest bg-indigo-950/40 px-2 py-1 rounded-full border border-indigo-500/20">
                    AIGC AUDIO
                  </span>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>

      {/* Decorative Slide Footer showing Company & Project Title - Frosted Glass style */}
      <div className="bg-white/5 border-t border-white/10 py-4 z-10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 text-slate-400 text-xs font-mono">
          <span>Hunan Chaoshengji Digital Technology Co., Ltd.</span>
          <span className="hidden sm:inline">|</span>
          <span>AIGC Premium Short Drama Project Financing Plan</span>
        </div>
      </div>
    </section>
  );
}
