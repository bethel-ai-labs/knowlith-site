import type { ReactNode } from 'react'

type Props = { children?: ReactNode; className?: string }

export function Stamp({ children = 'Approved', className = '' }: Props) {
  return <span className={`stamp ${className}`.trim()}>{children}</span>
}

export function AwaitBadge({ children = 'Needs your OK', className = '' }: Props) {
  return <span className={`badge badge-await ${className}`.trim()}>{children}</span>
}

export function ConflictBadge({ children = 'Conflict', className = '' }: Props) {
  return <span className={`badge badge-conflict ${className}`.trim()}>{children}</span>
}

export function ConfirmedBadge({ children = 'Confirmed', className = '' }: Props) {
  return <span className={`badge badge-confirmed ${className}`.trim()}>{children}</span>
}
