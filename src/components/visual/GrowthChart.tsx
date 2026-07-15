import { motion } from 'framer-motion'

export function GrowthChart({ compact = false }: { compact?: boolean }) {
  return <svg viewBox="0 0 460 150" className={`growth-chart ${compact ? 'compact' : ''}`} role="img" aria-label="Gráfico demonstrativo de crescimento">
    <defs><linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#38A4F5" stopOpacity=".32"/><stop offset="1" stopColor="#38A4F5" stopOpacity="0"/></linearGradient></defs>
    {[25, 65, 105, 145].map(y => <line key={y} x1="0" y1={y} x2="460" y2={y} stroke="#dbe7f4" strokeWidth="1" />)}
    <path d="M0,133 C38,128 55,112 83,116 C119,121 129,92 162,96 C198,100 214,65 247,71 C281,77 298,48 331,54 C365,61 380,22 420,30 C437,33 447,18 460,13 L460,150 L0,150Z" fill="url(#chartFill)" />
    <motion.path d="M0,133 C38,128 55,112 83,116 C119,121 129,92 162,96 C198,100 214,65 247,71 C281,77 298,48 331,54 C365,61 380,22 420,30 C437,33 447,18 460,13" fill="none" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.4, ease: 'easeOut' }} />
    {[['83','116'],['162','96'],['247','71'],['331','54'],['420','30']].map(([x,y]) => <circle key={x} cx={x} cy={y} r="4" fill="white" stroke="#2563EB" strokeWidth="3" />)}
  </svg>
}
