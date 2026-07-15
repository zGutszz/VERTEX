import { ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'

export function Button({ href, children, variant = 'primary', className = '', external = false }: { href: string; children: ReactNode; variant?: 'primary' | 'secondary' | 'light'; className?: string; external?: boolean }) {
  return <a href={href} className={`button button-${variant} ${className}`} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{children}<ArrowUpRight size={17} /></a>
}
