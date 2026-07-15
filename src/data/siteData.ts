import { Building2, Megaphone, MonitorSmartphone, Palette, Search, Share2, Store, Stethoscope, Utensils, BriefcaseBusiness, Home, UserRound, ChartNoAxesCombined, Layers3, MessagesSquare, Target, Zap, ShieldCheck, Sparkles } from 'lucide-react'

export const companyData = {
  name: 'Vertex', slogan: 'Tecnologia • Marketing • Crescimento',
  whatsappDisplay: '(61) 9 9397-2886', whatsappNumber: '5561993972886',
  instagram: '@Vertex.df', email: 'contato.vertexdf@gmail.com',
  whatsappMessage: 'Olá! Conheci a Vertex pelo site e gostaria de solicitar um orçamento.'
}

export const navItems = [
  { label: 'Início', href: '#inicio' }, { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' }, { label: 'Processo', href: '#processo' },
  { label: 'Projetos', href: '#projetos' }, { label: 'Contato', href: '#contato' }
]

export const services = [
  { icon: MonitorSmartphone, kicker: 'Desenvolvimento', title: 'Sites que apresentam e convertem', text: 'Sites institucionais, landing pages e portfólios rápidos, responsivos e preparados para transformar visitas em oportunidades.', tags: ['Website', 'Landing pages', 'UX/UI'] },
  { icon: Megaphone, kicker: 'Marketing digital', title: 'Campanhas com direção estratégica', text: 'Planejamento e gestão de Google Ads e Meta Ads com canais, públicos e mensagens organizados em torno dos objetivos do negócio.', tags: ['Google Ads', 'Meta Ads', 'Tráfego pago'] },
  { icon: Share2, kicker: 'Redes sociais', title: 'Presença consistente para sua marca', text: 'Estruturação de perfil, planejamento de conteúdo, criação de publicações e organização da comunicação visual.', tags: ['Instagram', 'Conteúdo', 'Posicionamento'] },
  { icon: Palette, kicker: 'Estratégia & identidade', title: 'Uma base digital coerente', text: 'Identidade visual, posicionamento e consultoria para alinhar cada ponto de contato à realidade e ao momento da empresa.', tags: ['Identidade', 'Consultoria', 'Estratégia'] }
]

export const process = [
  { number: '01', title: 'Imersão', text: 'Entendemos o negócio, o público, os desafios e o momento atual.' },
  { number: '02', title: 'Estratégia', text: 'Definimos prioridades, canais e uma direção clara para o projeto.' },
  { number: '03', title: 'Criação', text: 'Transformamos a estratégia em design, conteúdo e tecnologia.' },
  { number: '04', title: 'Refinamento', text: 'Revisamos cada detalhe junto com você antes da entrega.' },
  { number: '05', title: 'Evolução', text: 'Indicamos os próximos passos para manter a presença digital ativa.' }
]

export const projects = [
  { category: 'Desenvolvimento', title: 'Site institucional para empresa de serviços', text: 'Uma experiência moderna e responsiva para apresentar serviços, transmitir confiança e facilitar o contato com potenciais clientes.', tags: ['Website', 'UX/UI', 'Responsivo', 'Conversão'], type: 'site' },
  { category: 'Marketing', title: 'Estrutura de campanha digital', text: 'Uma apresentação estratégica de campanhas, públicos, anúncios e indicadores para organizar a divulgação de uma empresa.', tags: ['Google Ads', 'Meta Ads', 'Estratégia', 'Analytics'], type: 'ads' },
  { category: 'Redes sociais', title: 'Presença digital para negócio local', text: 'Organização de identidade, perfil comercial, publicações e comunicação visual para fortalecer a marca nas redes sociais.', tags: ['Instagram', 'Conteúdo', 'Identidade', 'Posicionamento'], type: 'social' }
]

export const audiences = [
  [Building2, 'Empresas'], [Store, 'Lojas'], [Utensils, 'Restaurantes'], [Stethoscope, 'Clínicas'], [BriefcaseBusiness, 'Escritórios'], [Home, 'Imobiliárias'], [Search, 'Prestadores de serviços'], [UserRound, 'Profissionais autônomos'], [Layers3, 'Pequenos negócios'], [Target, 'Negócios locais']
] as const

export const benefits = [
  [Sparkles, 'Imagem mais profissional', 'Uma presença coerente aumenta a percepção de valor e confiança.'],
  [Target, 'Comunicação direcionada', 'Mensagens claras aproximam a empresa das pessoas certas.'],
  [ChartNoAxesCombined, 'Novas oportunidades', 'Canais bem estruturados ampliam o potencial de alcance.'],
  [MessagesSquare, 'Contato mais simples', 'Jornadas objetivas facilitam a conversa com potenciais clientes.'],
  [Zap, 'Mais agilidade', 'Tecnologia e organização reduzem atritos na rotina digital.'],
  [ShieldCheck, 'Base para evoluir', 'Uma estrutura sólida permite planejar os próximos passos.']
] as const

export const serviceOptions = ['Criação de site', 'Landing page', 'Google Ads', 'Meta Ads', 'Redes sociais', 'Identidade visual', 'Consultoria', 'Outro']
