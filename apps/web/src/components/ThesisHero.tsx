import { Link } from 'react-router-dom'
import { KnowledgePipe } from './KnowledgePipe'

export function ThesisHero() {
  return (
    <section className="thesis-hero hero-paper">
      <div className="container" style={{ position: 'relative' }}>
        <p className="t-label" style={{ marginBottom: '1rem' }}>
          MCP knowledge provider
        </p>
        <h1 className="t-display-xl">The pipe of knowledge all your agents drink from.</h1>
        <p className="lead t-body-lg">
          Knowlith is not a chat app. It is a local company brain — evidence-quoted, human-approved —
          served over MCP to Claude Desktop, Codex, Grok Bots, and other hosts.
        </p>
        <div className="thesis-ctas">
          <Link to="/waitlist" className="btn btn-primary">
            Join the free waitlist
          </Link>
          <Link to="/how-it-works" className="btn btn-ghost">
            See how it works
          </Link>
        </div>
        <KnowledgePipe />
        <p className="thesis-foot">
          Runs on your computer. Nothing reaches an agent until you approve it.
        </p>
      </div>
    </section>
  )
}
