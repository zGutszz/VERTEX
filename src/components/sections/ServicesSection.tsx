import { ArrowUpRight } from 'lucide-react'
import { services } from '../../data/siteData'
import { Container } from '../common/Container'
import { Reveal } from '../common/Reveal'
import { SectionHeading } from '../common/SectionHeading'

export function ServicesSection(){return <section id="servicos" className="section services"><Container><SectionHeading badge="Nossos serviços" title="Uma estrutura digital completa para sua empresa evoluir." text="Do primeiro contato com a marca à estratégia de crescimento, construímos soluções integradas e adequadas à realidade de cada negócio."/><div className="services-grid">{services.map((s,i)=><Reveal key={s.title} delay={i*.07} className="service-card"><div className="service-number">0{i+1}</div><div className="service-icon"><s.icon/></div><span className="card-kicker">{s.kicker}</span><h3>{s.title}</h3><p>{s.text}</p><div className="tag-list">{s.tags.map(t=><span key={t}>{t}</span>)}</div><a href="#contato">Saiba mais <ArrowUpRight/></a></Reveal>)}</div></Container></section>}
