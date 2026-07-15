import { MessageCircle } from 'lucide-react'
import { whatsappUrl } from '../../utils/whatsapp'
export function WhatsAppFloatingButton(){return <a className="whatsapp-float" href={whatsappUrl()} target="_blank" rel="noopener noreferrer" aria-label="Fale com a Vertex pelo WhatsApp"><span>Fale com a Vertex</span><MessageCircle/></a>}
