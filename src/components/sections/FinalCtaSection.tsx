import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { whatsappUrl } from '../../utils/whatsapp'
import { Button } from '../common/Button'
import { Container } from '../common/Container'
import { DashboardMockup } from '../visual/DashboardMockup'
import { PhoneMockup } from '../visual/PhoneMockup'
import { VertexMark } from '../visual/VertexMark'

export function FinalCtaSection(){return <section className="final-cta"><div className="final-grid"/><VertexMark className="final-watermark"/><Container><div className="final-copy"><span>VAMOS CONSTRUIR O PRÓXIMO PASSO</span><h2>Sua empresa merece uma presença digital à altura da qualidade do seu trabalho.</h2><p>Conte com a Vertex para desenvolver uma presença moderna, profissional e preparada para gerar novas oportunidades.</p><div><Button href={whatsappUrl()} external variant="light">Solicitar orçamento</Button><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><MessageCircle/> Falar pelo WhatsApp <ArrowUpRight/></a></div></div><div className="final-visual"><DashboardMockup mini/><div className="final-phone"><PhoneMockup/></div></div></Container></section>}
