import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { process } from '../../data/siteData'
import { whatsappUrl } from '../../utils/whatsapp'
import { Button } from '../common/Button'
import { Container } from '../common/Container'
import { Reveal } from '../common/Reveal'
import { SectionHeading } from '../common/SectionHeading'

export function ProcessSection(){return <section id="processo" className="section process-section"><Container><div className="process-intro"><SectionHeading badge="Nosso processo" title="Um caminho claro, do diagnóstico à evolução." text="Você acompanha cada decisão. Nós organizamos as etapas para o projeto avançar com ritmo, coerência e transparência."/><Button href={whatsappUrl()} external variant="secondary">Iniciar uma conversa</Button></div><div className="process-list">{process.map((p,i)=><Reveal className="process-item" key={p.number} delay={i*.06}><span>{p.number}</span><div className="process-dot"><i/></div><h3>{p.title}</h3><p>{p.text}</p>{i<process.length-1?<ArrowDown/>:<ArrowUpRight/>}</Reveal>)}</div></Container></section>}
