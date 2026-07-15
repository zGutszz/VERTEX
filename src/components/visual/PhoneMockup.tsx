import { Heart, MessageCircle, MoreHorizontal } from 'lucide-react'
import { VertexMark } from './VertexMark'

const posts = ['PRESENÇA\nDIGITAL', 'ESTRATÉGIA\nQUE MOVE', 'SUA MARCA\nEM DESTAQUE', 'SITES PARA\nEMPRESAS', 'MARKETING\nCOM PROPÓSITO', 'PRONTO PARA\nCRESCER']
export function PhoneMockup() {
  return <div className="phone"><div className="phone-notch"/><div className="phone-screen"><div className="phone-head"><b>vertex.df</b><MoreHorizontal size={13}/></div><div className="profile"><div className="avatar"><VertexMark/></div><div><b>Vertex</b><span>Soluções digitais para empresas</span><small>Tecnologia • Marketing • Crescimento</small></div></div><div className="profile-stats"><span><b>54</b> posts</span><span><b>1,8k</b> seguidores</span><span><b>312</b> seguindo</span></div><button>Seguir</button><div className="highlights"><i/><i/><i/><i/></div><div className="posts">{posts.map((p,i)=><div key={p} className={`post post-${i}`}><span>{p.split('\n').map(x=><span key={x}>{x}</span>)}</span>{i===0&&<VertexMark/>}</div>)}</div><div className="phone-nav"><Heart/><MessageCircle/><VertexMark/></div></div></div>
}
