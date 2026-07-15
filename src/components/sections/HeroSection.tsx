import { motion } from 'framer-motion'
import { Check, Sparkles } from 'lucide-react'
import { whatsappUrl } from '../../utils/whatsapp'
import { Button } from '../common/Button'
import { Container } from '../common/Container'
import { HeroVisual } from '../visual/HeroVisual'

const item={hidden:{opacity:0,y:25},show:{opacity:1,y:0}}
export function HeroSection(){return <section id="inicio" className="hero"><div className="hero-grid-bg"/><div className="hero-glow"/><Container className="hero-layout"><motion.div className="hero-copy" initial="hidden" animate="show" transition={{staggerChildren:.1,delayChildren:.12}}><motion.div variants={item} className="hero-badge"><Sparkles/> Soluções digitais para empresas</motion.div><motion.h1 variants={item}>Transformamos empresas em <span>marcas fortes</span> no digital.</motion.h1><motion.p variants={item} className="hero-lead">Desenvolvemos sites, campanhas, redes sociais e estratégias digitais para empresas que desejam crescer, conquistar clientes e fortalecer sua presença na internet.</motion.p><motion.div variants={item} className="hero-actions"><Button href={whatsappUrl()} external>Solicitar orçamento</Button><Button href="#servicos" variant="secondary">Conhecer nossos serviços</Button></motion.div><motion.div variants={item} className="hero-checks">{['Atendimento personalizado','Estratégias sob medida','Tecnologia moderna'].map(x=><span key={x}><i><Check/></i>{x}</span>)}</motion.div><motion.p variants={item} className="trust-line"><span/>Estratégia, design e tecnologia trabalhando juntos pelo seu crescimento.</motion.p></motion.div><HeroVisual/></Container><a className="scroll-cue" href="#sobre" aria-label="Rolar para conhecer a Vertex"><span/></a></section>}
