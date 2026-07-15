import { Code2, GalleryVerticalEnd, Megaphone, Palette, PanelsTopLeft, Search, Share2, Target } from 'lucide-react'
const items=[[Code2,'Sites profissionais'],[PanelsTopLeft,'Landing pages'],[Search,'Google Ads'],[Target,'Meta Ads'],[Share2,'Redes sociais'],[Palette,'Identidade digital'],[GalleryVerticalEnd,'Conteúdo'],[Megaphone,'Consultoria']] as const
export function TrustBarSection(){return <div className="trustbar"><div className="trust-track">{[...items,...items].map(([Icon,label],i)=><span key={`${label}-${i}`}><Icon/>{label}</span>)}</div></div>}
