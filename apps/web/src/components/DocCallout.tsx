import type { ReactNode } from 'react'

type Variant = 'info' | 'honesty' | 'do-not'

const labels: Record<Variant, string> = {
  info: 'Info',
  honesty: 'Honesty',
  'do-not': 'Do not claim',
}

interface Props {
  variant?: Variant
  children: ReactNode
  title?: string
}

export function DocCallout({ variant = 'info', children, title }: Props) {
  return (
    <aside className={`doc-callout doc-callout-${variant}`} role="note">
      <span className="t-label doc-callout-label">{title ?? labels[variant]}</span>
      {typeof children === 'string' ? <p>{children}</p> : children}
    </aside>
  )
}
