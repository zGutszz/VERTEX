import { BarChart3, Bell, CircleDollarSign, Eye, LayoutDashboard, MousePointerClick, Settings2, Sparkles, Target } from 'lucide-react'
import { GrowthChart } from './GrowthChart'
import { VertexMark } from './VertexMark'

export function DashboardMockup({ mini = false }: { mini?: boolean }) {
  const bars = [38, 58, 45, 72, 64, 88, 78]
  return <div className={`dashboard ${mini ? 'dashboard-mini' : ''}`}>
    <aside className="dash-sidebar"><div className="dash-logo"><VertexMark /></div>{[LayoutDashboard, Target, BarChart3, Eye, Settings2].map((Icon, i) => <span className={i === 0 ? 'active' : ''} key={i}><Icon size={13}/></span>)}</aside>
    <div className="dash-main">
      <div className="dash-top"><div><small>Visão geral</small><strong>Olá, Vertex 👋</strong></div><div className="dash-actions"><span>Este mês</span><Bell size={13}/></div></div>
      <div className="dash-metrics">
        <div><span><CircleDollarSign size={12}/>Investimento</span><strong>R$ 24.780</strong><small>+12,4%</small></div>
        <div><span><MousePointerClick size={12}/>Cliques</span><strong>12.540</strong><small>+18,2%</small></div>
        <div><span><Target size={12}/>Conversões</span><strong>2.489</strong><small>+36,7%</small></div>
      </div>
      <div className="dash-content"><div className="dash-chart"><div><strong>Desempenho</strong><span>Últimos 30 dias</span></div><GrowthChart compact /></div><div className="dash-bars"><div><strong>Alcance</strong><span>por dia</span></div><div className="bars">{bars.map((h,i)=><i key={i} style={{height:`${h}%`, animationDelay:`${i*.08}s`}} />)}</div></div></div>
      <div className="dash-campaigns"><div><span><i className="status"/>Campanha institucional</span><b>Ativa</b><strong>4.820</strong></div><div><span><i className="status"/>Captação local</span><b>Ativa</b><strong>3.184</strong></div></div>
      <div className="demo-note"><Sparkles size={10}/> Dados demonstrativos</div>
    </div>
  </div>
}
