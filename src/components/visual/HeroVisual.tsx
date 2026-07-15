import { motion } from 'framer-motion'
import { Instagram, MousePointerClick, TrendingUp } from 'lucide-react'
import { DashboardMockup } from './DashboardMockup'
import { PhoneMockup } from './PhoneMockup'

export function HeroVisual() {
  return <motion.div className="hero-visual" initial={{ opacity: 0, scale: .94, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .9, delay: .35, ease: [0.22,1,.36,1] }}>
    <div className="visual-orbit orbit-one"/><div className="visual-orbit orbit-two"/>
    <div className="laptop"><div className="laptop-camera"/><DashboardMockup/><div className="laptop-base"/></div>
    <motion.div className="phone-wrap" animate={{ y: [0,-7,0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}><PhoneMockup/></motion.div>
    <motion.div className="floating-card card-growth" animate={{ y: [0,-6,0] }} transition={{ duration: 4, repeat: Infinity }}><span><TrendingUp/></span><div><small>Crescimento</small><strong>+36,7%</strong><em>este mês</em></div></motion.div>
    <motion.div className="floating-card card-clicks" animate={{ y: [0,6,0] }} transition={{ duration: 4.6, repeat: Infinity }}><span><MousePointerClick/></span><div><small>Cliques</small><strong>12.540</strong></div></motion.div>
    <div className="channel-pills"><span className="google">G</span><span className="meta">∞</span><span className="instagram"><Instagram/></span></div>
  </motion.div>
}
