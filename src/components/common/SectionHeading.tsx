import { motion } from 'framer-motion'

export function SectionHeading({ badge, title, text, align = 'left', light = false }: { badge: string; title: string; text?: string; align?: 'left' | 'center'; light?: boolean }) {
  return <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .4 }} transition={{ duration: .65, ease: [0.22, 1, 0.36, 1] }} className={`section-heading ${align === 'center' ? 'section-heading-center' : ''} ${light ? 'is-light' : ''}`}>
    <span className="eyebrow"><span />{badge}</span><h2>{title}</h2>{text && <p>{text}</p>}
  </motion.div>
}
