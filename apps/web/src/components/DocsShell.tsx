import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { DOCS_NAV } from '../data/fixtures'

interface Props {
  children: ReactNode
  title: string
}

export function DocsShell({ children, title }: Props) {
  return (
    <div className="container docs-shell">
      <aside className="docs-sidebar" aria-label="Docs">
        <p className="t-label docs-sidebar-title">Documentation</p>
        <ul className="docs-nav">
          {DOCS_NAV.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} end={'end' in item ? Boolean(item.end) : false}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>
      <article className="docs-content">
        <h1 className="t-display-md">{title}</h1>
        {children}
      </article>
    </div>
  )
}
