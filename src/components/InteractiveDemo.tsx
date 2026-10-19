import React, { useState, useEffect, useRef } from 'react';
import { TranslationDictionary } from '../data/translations';
import { soundFx } from '../utils/audio';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  Clock,
  ShieldAlert,
  FileText,
  Check,
  Printer,
  Trash2,
  Plus,
  Minus,
  Award,
  UserCheck,
  AlertTriangle,
} from 'lucide-react';

interface Player {
  number: number;
  licence: string;
  name: string;
  goals: number;
  yellowCard: boolean;
  twoMinutes: number;
  redCard: boolean;
}

interface Penalty {
  id: string;
  team: 'home' | 'away';
  playerNumber: number;
  playerName: string;
  remainingSeconds: number;
}

interface InteractiveDemoProps {
  t: TranslationDictionary;
}

export const InteractiveDemo: React.FC<InteractiveDemoProps> = ({ t }) => {
  const [activeTab, setActiveTab] = useState<'console' | 'sheet' | 'display'>('console');

  // Match State
  const [isRunning, setIsRunning] = useState(false);
  const [matchSeconds, setMatchSeconds] = useState(1320); // 22:00
  const [period, setPeriod] = useState<string>('الشوط الأول (1st Half)');

  // Teams & Scores matching WAC vs FAR (الوداد الرياضي vs الجيش الملكي)
  const [homeScore, setHomeScore] = useState(23); // الوداد الرياضي (WAC)
  const [awayScore, setAwayScore] = useState(21); // الجيش الملكي (FAR)

  // Rosters matching the HD scoresheet reference image
  const [homePlayers, setHomePlayers] = useState<Player[]>([
    { number: 1, licence: 'FR-88912', name: 'أحمد التازي (حارس)', goals: 0, yellowCard: false, twoMinutes: 0, redCard: false },
    { number: 3, licence: 'FR-77201', name: 'ياسين بونو', goals: 3, yellowCard: false, twoMinutes: 0, redCard: false },
    { number: 7, licence: 'FR-66514', name: 'حمزة العلوي (عميد)', goals: 5, yellowCard: true, twoMinutes: 0, redCard: false },
    { number: 9, licence: 'FR-55423', name: 'سفيان المراكشي', goals: 4, yellowCard: false, twoMinutes: 0, redCard: false },
    { number: 10, licence: 'FR-44312', name: 'طارق الإدريسي', goals: 4, yellowCard: false, twoMinutes: 0, redCard: false },
    { number: 11, licence: 'FR-33201', name: 'عمر الصالحي', goals: 1, yellowCard: false, twoMinutes: 0, redCard: false },
    { number: 14, licence: 'FR-22190', name: 'مروان البهجة', goals: 2, yellowCard: false, twoMinutes: 0, redCard: false },
    { number: 16, licence: 'FR-11089', name: 'أيوب الفاسي (حارس)', goals: 0, yellowCard: false, twoMinutes: 0, redCard: false },
    { number: 21, licence: 'FR-99878', name: 'رضا الفيلالي', goals: 2, yellowCard: false, twoMinutes: 0, redCard: false },
    { number: 23, licence: 'FR-88767', name: 'بلال اليعقوبي', goals: 1, yellowCard: false, twoMinutes: 0, redCard: false },
    { number: 77, licence: 'FR-77656', name: 'وليد السعدي', goals: 1, yellowCard: false, twoMinutes: 0, redCard: false },
    { number: 99, licence: 'FR-66545', name: 'حسام العلمي', goals: 0, yellowCard: false, twoMinutes: 0, redCard: false },
  ]);

  const [awayPlayers, setAwayPlayers] = useState<Player[]>([
    { number: 1, licence: 'FR-55112', name: 'كريم الزروالي (حارس)', goals: 0, yellowCard: false, twoMinutes: 0, redCard: false },
    { number: 4, licence: 'FR-44223', name: 'مهدي العرانش', goals: 3, yellowCard: false, twoMinutes: 0, redCard: false },
    { number: 6, licence: 'FR-33334', name: 'زكرياء بنجلون', goals: 3, yellowCard: true, twoMinutes: 0, redCard: true },
    { number: 8, licence: 'FR-22445', name: 'بدر الوردي (عميد)', goals: 4, yellowCard: false, twoMinutes: 0, redCard: false },
    { number: 9, licence: 'FR-11556', name: 'نبيل البركاوي', goals: 3, yellowCard: false, twoMinutes: 1, redCard: false },
    { number: 12, licence: 'FR-99667', name: 'أنس الشرقاوي (حارس)', goals: 0, yellowCard: false, twoMinutes: 0, redCard: false },
    { number: 15, licence: 'FR-88778', name: 'يوسف العثماني', goals: 2, yellowCard: false, twoMinutes: 0, redCard: false },
    { number: 18, licence: 'FR-77889', name: 'عادل السملالي', goals: 3, yellowCard: false, twoMinutes: 0, redCard: false },
    { number: 22, licence: 'FR-66990', name: 'هشام القادري', goals: 1, yellowCard: false, twoMinutes: 0, redCard: false },
    { number: 27, licence: 'FR-55001', name: 'إلياس الرباطي', goals: 1, yellowCard: false, twoMinutes: 0, redCard: false },
    { number: 30, licence: 'FR-44112', name: 'عصام الحسني', goals: 1, yellowCard: false, twoMinutes: 0, redCard: false },
    { number: 44, licence: 'FR-33223', name: 'فؤاد المودن', goals: 0, yellowCard: false, twoMinutes: 0, redCard: false },
  ]);

  // Time-out State
  const [isTimeoutActive, setIsTimeoutActive] = useState(false);
  const [timeoutSeconds, setTimeoutSeconds] = useState(60);

  // Penalties State
  const [penalties, setPenalties] = useState<Penalty[]>([
    { id: 'p1', team: 'home', playerNumber: 7, playerName: 'حمزة العلوي', remainingSeconds: 45 },
    { id: 'p2', team: 'away', playerNumber: 9, playerName: 'نبيل البركاوي', remainingSeconds: 92 },
  ]);

  // Signature Canvas Ref
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSignature, setHasSignature] = useState(false);

  // Timer Tick Hook
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isRunning) {
      interval = setInterval(() => {
        setMatchSeconds((prev) => prev + 1);
        setPenalties((prev) =>
          prev
            .map((p) => {
              if (p.remainingSeconds === 1) {
                soundFx.playGoalChime();
              }
              return { ...p, remainingSeconds: Math.max(0, p.remainingSeconds - 1) };
            })
            .filter((p) => p.remainingSeconds > 0)
        );
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  // Timeout Tick Hook
  useEffect(() => {
    let tInterval: ReturnType<typeof setInterval> | null = null;
    if (isTimeoutActive) {
      tInterval = setInterval(() => {
        setTimeoutSeconds((prev) => {
          if (prev === 10) {
            soundFx.playWhistle();
          }
          if (prev <= 1) {
            soundFx.playHorn();
            setIsTimeoutActive(false);
            return 60;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (tInterval) clearInterval(tInterval);
    };
  }, [isTimeoutActive]);

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleToggleTimer = () => {
    if (!isRunning) {
      soundFx.playWhistle();
    }
    setIsRunning(!isRunning);
  };

  const handleResetTimer = () => {
    setIsRunning(false);
    setMatchSeconds(0);
  };

  const handleTriggerTimeout = () => {
    soundFx.playHorn();
    setIsRunning(false);
    setIsTimeoutActive(true);
    setTimeoutSeconds(60);
  };

  const handlePlayerAction = (team: 'home' | 'away', number: number, action: 'goal' | 'yellow' | '2min' | 'red') => {
    soundFx.playGoalChime();
    if (team === 'home') {
      setHomePlayers((prev) =>
        prev.map((p) => {
          if (p.number === number) {
            const updatedGoals = action === 'goal' ? p.goals + 1 : p.goals;
            const updatedYellow = action === 'yellow' ? true : p.yellowCard;
            const updated2Min = action === '2min' ? p.twoMinutes + 1 : p.twoMinutes;
            const updatedRed = action === 'red' ? true : p.redCard;
            return { ...p, goals: updatedGoals, yellowCard: updatedYellow, twoMinutes: updated2Min, redCard: updatedRed };
          }
          return p;
        })
      );
      if (action === 'goal') setHomeScore((s) => s + 1);
    } else {
      setAwayPlayers((prev) =>
        prev.map((p) => {
          if (p.number === number) {
            const updatedGoals = action === 'goal' ? p.goals + 1 : p.goals;
            const updatedYellow = action === 'yellow' ? true : p.yellowCard;
            const updated2Min = action === '2min' ? p.twoMinutes + 1 : p.twoMinutes;
            const updatedRed = action === 'red' ? true : p.redCard;
            return { ...p, goals: updatedGoals, yellowCard: updatedYellow, twoMinutes: updated2Min, redCard: updatedRed };
          }
          return p;
        })
      );
      if (action === 'goal') setAwayScore((s) => s + 1);
    }
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    setIsDrawing(true);
    setHasSignature(true);
    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    ctx.beginPath();
    ctx.moveTo(clientX - rect.left, clientY - rect.top);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#1e3a8a';
    ctx.lineTo(clientX - rect.left, clientY - rect.top);
    ctx.stroke();
  };

  const stopDrawing = () => setIsDrawing(false);

  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasSignature(false);
  };

  const handlePrint = () => window.print();

  return (
    <section id="interactive-demo" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-400">
            {t.demoSection.kicker}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            {t.demoSection.title}
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            {t.demoSection.subtitle}
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex p-1.5 bg-slate-900 border border-slate-800 rounded-xl max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveTab('console')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'console'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              🖥️ Console Table
            </button>
            <button
              onClick={() => setActiveTab('sheet')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'sheet'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              📄 Feuille de Match HD (WAC vs FAR)
            </button>
            <button
              onClick={() => setActiveTab('display')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'display'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              📺 {t.demoSection.tabs.scoreboard}
            </button>
          </div>
        </div>

        {/* TAB 1: CONSOLE TABLE DE MARQUE */}
        {activeTab === 'console' && (
          <div className="rounded-2xl bg-[#0B0F19] border border-slate-800 p-6 sm:p-8 shadow-2xl space-y-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 text-white">
                  الشوط الأول (1st Half)
                </span>
              </div>

              <div className="bg-slate-950 border border-slate-800 px-8 py-4 rounded-3xl text-center shadow-inner relative">
                <div className="text-4xl sm:text-5xl font-black text-white font-mono-score tracking-wider">
                  {formatTime(matchSeconds)}
                </div>
                <button
                  onClick={handleToggleTimer}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-lg border-2 border-slate-900"
                >
                  {isRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-white" />}
                </button>
              </div>

              <div className="flex items-center gap-3">
                <button onClick={() => soundFx.playHorn()} className="px-3 py-2 rounded-lg bg-red-950/60 border border-red-800 text-red-200 text-xs font-bold">
                  Buzzer
                </button>
                <button onClick={() => soundFx.playWhistle()} className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 text-xs font-semibold">
                  Sifflet
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-900/50 flex flex-col items-center justify-center space-y-4">
                <div className="text-base font-black text-emerald-400">الجيش الملكي (FAR)</div>
                <div className="text-6xl font-black text-white font-mono-score bg-emerald-600 w-28 h-28 rounded-2xl flex items-center justify-center shadow-lg">
                  {awayScore}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-blue-950/20 border border-blue-900/50 flex flex-col items-center justify-center space-y-4">
                <div className="text-base font-black text-blue-400">الوداد الرياضي (WAC)</div>
                <div className="text-6xl font-black text-white font-mono-score bg-blue-950 border border-blue-600 w-28 h-28 rounded-2xl flex items-center justify-center shadow-lg">
                  {homeScore}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <div className="text-sm font-bold text-emerald-400 pb-2 border-b border-slate-800">الجيش الملكي (FAR) Roster</div>
                <div className="grid grid-cols-3 gap-2">
                  {awayPlayers.map((p) => (
                    <button
                      key={p.number}
                      onClick={() => handlePlayerAction('away', p.number, 'goal')}
                      className="p-2.5 rounded-xl border bg-slate-900 border-slate-800 text-slate-300 text-center hover:border-slate-700 flex flex-col items-center"
                    >
                      <span className="font-bold text-base font-mono">#{p.number}</span>
                      <span className="text-[10px] truncate w-full">{p.name}</span>
                      {p.goals > 0 && <span className="mt-1 bg-emerald-600 text-white text-[9px] px-1.5 py-0.5 rounded font-bold">{p.goals} But</span>}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <div className="text-sm font-bold text-blue-400 pb-2 border-b border-slate-800">الوداد الرياضي (WAC) Roster</div>
                <div className="grid grid-cols-3 gap-2">
                  {homePlayers.map((p) => (
                    <button
                      key={p.number}
                      onClick={() => handlePlayerAction('home', p.number, 'goal')}
                      className="p-2.5 rounded-xl border bg-slate-900 border-slate-800 text-slate-300 text-center hover:border-slate-700 flex flex-col items-center"
                    >
                      <span className="font-bold text-base font-mono">#{p.number}</span>
                      <span className="text-[10px] truncate w-full">{p.name}</span>
                      {p.goals > 0 && <span className="mt-1 bg-blue-600 text-white text-[9px] px-1.5 py-0.5 rounded font-bold">{p.goals} But</span>}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: FEUILLE DE MATCH HD (Matching Reference Image exactly) */}
        {activeTab === 'sheet' && (
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 sm:p-8 space-y-6">
            
            {/* Actions Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-400" />
                <span className="font-bold text-white text-base">
                  Feuille de Match Officielle (HD Conforme Fédérale)
                </span>
              </div>
              <button
                onClick={handlePrint}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold flex items-center gap-2 transition-colors"
              >
                <Printer className="w-4 h-4" />
                <span>Imprimer / Export PDF HD</span>
              </button>
            </div>

            {/* HD Official Scoresheet Document View */}
            <div className="p-6 sm:p-8 bg-white text-slate-900 rounded-xl shadow-2xl border-4 border-slate-900 font-sans text-xs space-y-4">
              
              {/* Header with Federation Logos & Titles */}
              <div className="grid grid-cols-3 border-2 border-slate-900 text-center items-center font-bold">
                <div className="p-3 border-r-2 border-slate-900 text-[11px] leading-snug">
                  FÉDÉRATION ROYALE MAROCAINE<br />DU SPORT SCOLAIRE
                </div>
                <div className="p-3 border-r-2 border-slate-900 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-900 text-white flex items-center justify-center font-black text-lg shadow-md mb-1">
                    👑
                  </div>
                  <span className="text-[10px] text-slate-600">FRMSS OFFICIAL</span>
                </div>
                <div className="p-3 text-emerald-900 text-sm font-black">
                  الجامعة الملكية المغربية للرياضة المدرسية
                </div>
              </div>

              {/* Subheader Green Banner */}
              <div className="bg-emerald-800 text-white text-center font-extrabold py-2 text-sm tracking-wide rounded-xs shadow-xs">
                البطولة المدرسية — الكبار - القسم الممتاز (Seniors Excellence)
              </div>

              {/* Match Meta Data Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 border border-slate-800 p-2 text-[11px] bg-slate-50 font-medium gap-2">
                <div>الأكاديمية: عصبة الرباط سلا القنيطرة</div>
                <div>المديرية: الجامعة الملكية المغربية لكرة اليد</div>
                <div>القاعة: القاعة المغطاة مولاي عبد الله</div>
                <div className="font-bold text-blue-900">رقم: DEMO-2026-01 | 2026-10-19 | 18:00</div>
              </div>

              {/* Score Summary Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-slate-900 text-center font-mono">
                  <thead>
                    <tr className="bg-slate-900 text-white text-[11px]">
                      <th className="border border-slate-700 p-1.5">الفرق</th>
                      <th colSpan={2} className="border border-slate-700 p-1.5">شوط 1</th>
                      <th colSpan={2} className="border border-slate-700 p-1.5">نهاية</th>
                      <th colSpan={2} className="border border-slate-700 p-1.5">إضافي 1</th>
                      <th colSpan={2} className="border border-slate-700 p-1.5">إضافي 2</th>
                      <th colSpan={2} className="border border-slate-700 p-1.5">7م</th>
                      <th className="border border-slate-700 p-1.5 bg-amber-400 text-slate-950 font-black">المجموع</th>
                    </tr>
                    <tr className="bg-slate-100 text-[10px] text-slate-700">
                      <th></th>
                      <th>B</th><th>A</th>
                      <th>B</th><th>A</th>
                      <th>B</th><th>A</th>
                      <th>B</th><th>A</th>
                      <th>B</th><th>A</th>
                      <th className="bg-amber-100 font-bold">B</th><th className="bg-amber-100 font-bold">A</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-800 p-1 font-bold text-right pr-2">النتيجة</td>
                      <td className="border border-slate-800 p-1 font-bold">11</td>
                      <td className="border border-slate-800 p-1 font-bold">12</td>
                      <td className="border border-slate-800 p-1 font-black text-blue-900">21</td>
                      <td className="border border-slate-800 p-1 font-black text-blue-900">23</td>
                      <td className="border border-slate-800 p-1">-</td>
                      <td className="border border-slate-800 p-1">-</td>
                      <td className="border border-slate-800 p-1">-</td>
                      <td className="border border-slate-800 p-1">-</td>
                      <td className="border border-slate-800 p-1">-</td>
                      <td className="border border-slate-800 p-1">-</td>
                      <td className="border border-slate-800 p-1 font-black bg-amber-200">{awayScore}</td>
                      <td className="border border-slate-800 p-1 font-black bg-amber-200">{homeScore}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Timeout Indicator Bar */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-emerald-600 text-white font-black text-center py-1.5 rounded-t text-xs">
                  B — الجيش الملكي (FAR)
                </div>
                <div className="bg-blue-600 text-white font-black text-center py-1.5 rounded-t text-xs">
                  A — الوداد الرياضي (WAC)
                </div>
              </div>

              {/* Rosters Side by Side (Team B vs Team A) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Team B: الجيش الملكي (FAR) */}
                <div className="border-2 border-slate-900 rounded p-1.5 bg-white space-y-1">
                  <table className="w-full text-[10px] border-collapse border border-slate-900">
                    <thead>
                      <tr className="bg-slate-800 text-white">
                        <th className="border border-slate-700 p-1">رقم</th>
                        <th className="border border-slate-700 p-1">رخصة</th>
                        <th className="border border-slate-700 p-1">الاسم الكامل لللاعب</th>
                        <th className="border border-slate-700 p-1 w-7">أهداف</th>
                        <th className="border border-slate-700 p-1 w-6">إنذار</th>
                        <th className="border border-slate-700 p-1 w-6">2 د</th>
                        <th className="border border-slate-700 p-1 w-6">طرد</th>
                      </tr>
                    </thead>
                    <tbody>
                      {awayPlayers.map((p) => (
                        <tr key={p.number} className="hover:bg-slate-50">
                          <td className="border border-slate-400 p-1 text-center font-bold font-mono">{p.number}</td>
                          <td className="border border-slate-400 p-1 font-mono text-[9px]">{p.licence}</td>
                          <td className="border border-slate-400 p-1 font-semibold">{p.name}</td>
                          <td className="border border-slate-400 p-1 text-center font-mono font-bold text-emerald-800">{p.goals > 0 ? p.goals : ''}</td>
                          <td className="border border-slate-400 p-1 text-center">{p.yellowCard ? '🟨' : ''}</td>
                          <td className="border border-slate-400 p-1 text-center font-mono">{p.twoMinutes > 0 ? p.twoMinutes : ''}</td>
                          <td className="border border-slate-400 p-1 text-center">{p.redCard ? '🟥' : ''}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="flex justify-between items-center px-2 py-1 bg-slate-100 rounded text-[10px]">
                    <span>تحفظات: لا توجد</span>
                    <span className="font-bold text-slate-800">مسؤول الفريق: رشيد الطاوسي</span>
                  </div>
                </div>

                {/* Team A: الوداد الرياضي (WAC) */}
                <div className="border-2 border-slate-900 rounded p-1.5 bg-white space-y-1">
                  <table className="w-full text-[10px] border-collapse border border-slate-900">
                    <thead>
                      <tr className="bg-slate-800 text-white">
                        <th className="border border-slate-700 p-1">رقم</th>
                        <th className="border border-slate-700 p-1">رخصة</th>
                        <th className="border border-slate-700 p-1">الاسم الكامل لللاعب</th>
                        <th className="border border-slate-700 p-1 w-7">أهداف</th>
                        <th className="border border-slate-700 p-1 w-6">إنذار</th>
                        <th className="border border-slate-700 p-1 w-6">2 د</th>
                        <th className="border border-slate-700 p-1 w-6">طرد</th>
                      </tr>
                    </thead>
                    <tbody>
                      {homePlayers.map((p) => (
                        <tr key={p.number} className="hover:bg-slate-50">
                          <td className="border border-slate-400 p-1 text-center font-bold font-mono">{p.number}</td>
                          <td className="border border-slate-400 p-1 font-mono text-[9px]">{p.licence}</td>
                          <td className="border border-slate-400 p-1 font-semibold">{p.name}</td>
                          <td className="border border-slate-400 p-1 text-center font-mono font-bold text-blue-800">{p.goals > 0 ? p.goals : ''}</td>
                          <td className="border border-slate-400 p-1 text-center">{p.yellowCard ? '🟨' : ''}</td>
                          <td className="border border-slate-400 p-1 text-center font-mono">{p.twoMinutes > 0 ? p.twoMinutes : ''}</td>
                          <td className="border border-slate-400 p-1 text-center">{p.redCard ? '🟥' : ''}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="flex justify-between items-center px-2 py-1 bg-slate-100 rounded text-[10px]">
                    <span>تحفظات: لا توجد</span>
                    <span className="font-bold text-slate-800">مسؤول الفريق: رشيد الطاوسي</span>
                  </div>
                </div>

              </div>

              {/* Scoring Progression Grids (تسلسل الأهداف) */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="border border-slate-900 p-2 bg-slate-50 rounded text-center">
                  <div className="text-[10px] font-bold text-slate-700 mb-1">تسلسل الأهداف (الجيش الملكي) — 21 بوت</div>
                  <div className="grid grid-cols-6 gap-1 font-mono text-[10px]">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div key={i} className="border border-slate-400 bg-white p-1 text-center">
                        {i < 21 ? i + 1 : ''}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border border-slate-900 p-2 bg-slate-50 rounded text-center">
                  <div className="text-[10px] font-bold text-slate-700 mb-1">تسلسل الأهداف (الوداد الرياضي) — 23 بوت</div>
                  <div className="grid grid-cols-6 gap-1 font-mono text-[10px]">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div key={i} className="border border-slate-400 bg-white p-1 text-center">
                        {i < 23 ? i + 1 : ''}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Officials & Signatures */}
              <div className="border-2 border-slate-800 rounded p-3 bg-slate-50 space-y-3">
                <div className="grid grid-cols-2 gap-4 text-[11px]">
                  <div>
                    <span className="font-bold text-slate-900">المسؤولون:</span>
                    <div className="text-slate-700">المسجل: عمر حماني (مسجل)</div>
                    <div className="text-slate-700">الميقاتي: أمين سنوسي (ميقاتي)</div>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">الحكام:</span>
                    <div className="text-slate-700">1. محجوبي خالد (حكم وطني 1)</div>
                    <div className="text-slate-700">2. العلمي رشيد (حكم وطني 2)</div>
                  </div>
                </div>

                {/* Touch Signature Pad */}
                <div className="pt-2 border-t border-slate-300">
                  <p className="text-[10px] text-slate-500 mb-1">Signatures électroniques des arbitres :</p>
                  <div className="relative border-2 border-dashed border-slate-400 rounded bg-white overflow-hidden">
                    <canvas
                      ref={canvasRef}
                      width={600}
                      height={80}
                      onMouseDown={startDrawing}
                      onMouseMove={draw}
                      onMouseUp={stopDrawing}
                      onMouseLeave={stopDrawing}
                      onTouchStart={startDrawing}
                      onTouchMove={draw}
                      onTouchEnd={stopDrawing}
                      className="w-full h-20 touch-none cursor-crosshair"
                    />
                    {!hasSignature && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-slate-400 text-xs italic">
                        ✍️ Signez ici avec la souris ou le doigt
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between items-center pt-1">
                    <button onClick={clearSignature} className="text-red-600 text-[10px]">Effacer</button>
                    <span className="text-[10px] text-slate-500">Document certifié HD · handballpro.printomrdesigne.workers.dev</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* TAB 3: AFFICHAGE GYMNASE */}
        {activeTab === 'display' && (
          <div className="rounded-2xl bg-black border-2 border-blue-900/60 p-6 sm:p-10 shadow-2xl relative space-y-8">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <span className="text-sm font-bold tracking-widest text-slate-200 uppercase">
                GYMNASE MOULAY ABDELLAH · EXCELLENCE SENIORS
              </span>
              <div className="font-mono text-xs text-blue-400 font-bold bg-blue-950 px-3 py-1 rounded border border-blue-800">
                {period}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center py-6">
              <div className="space-y-3">
                <div className="text-xl font-black text-emerald-400">الجيش الملكي (FAR)</div>
                <div className="text-7xl font-black text-white font-mono-score">{awayScore}</div>
              </div>

              <div className="space-y-3 bg-slate-950 p-6 rounded-2xl border border-slate-800">
                <div className="text-xs font-mono text-slate-400 tracking-widest">TEMPS DE JEU</div>
                <div className="text-6xl font-black text-amber-400 font-mono-score">
                  {formatTime(matchSeconds)}
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-xl font-black text-blue-400">الوداد الرياضي (WAC)</div>
                <div className="text-7xl font-black text-white font-mono-score">{homeScore}</div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
