import { Link } from 'react-router-dom'
import { DocsShell } from '../../components/DocsShell'
import { DocCallout } from '../../components/DocCallout'

const CARDS: { to: string; title: string; body: string; current?: boolean }[] = [
  {
    to: '/docs',
    title: 'What Knowlith is / isn’t',
    body: 'MCP knowledge provider vs chat app',
    current: true,
  },
  {
    to: '/docs/pipe',
    title: 'The pipe',
    body: 'extract → evidence → approve → MCP',
  },
  {
    to: '/docs/claims',
    title: 'What a claim means',
    body: 'quote, subject vs answer, approve states',
  },
  {
    to: '/docs/scores',
    title: 'Scores & percentages',
    body: 'only labels the product shows (no invented metrics)',
  },
  {
    to: '/docs/mcp',
    title: 'MCP surface',
    body: 'get_task_context, lookup_value, check_coverage',
  },
  {
    to: '/docs/activity',
    title: 'Activity',
    body: 'reads, not model rationale',
  },
  {
    to: '/docs/local',
    title: 'Local data',
    body: '~/Knowlith; no cloud claims here',
  },
]

export function DocsIndexPage() {
  return (
    <DocsShell title="Docs">
      <p className="t-body-lg">
        How Knowlith talks about claims, scores, and what MCP actually exposes — the Language of
        trust.
      </p>
      <DocCallout variant="honesty">
        Knowlith is an MCP knowledge provider — not a chat app. Nothing reaches an AI tool until a
        person approves it. Nothing can be approved without the quote in your own file.
      </DocCallout>

      <div className="docs-cards">
        {CARDS.map((card) =>
          card.current ? (
            <div key={card.title} className="docs-card" aria-current="page">
              <h2>{card.title}</h2>
              <p>{card.body}</p>
            </div>
          ) : (
            <Link key={card.to} to={card.to} className="docs-card">
              <h2>{card.title}</h2>
              <p>{card.body}</p>
            </Link>
          ),
        )}
      </div>

      <h2 className="t-title-sm">What Knowlith is / isn’t</h2>
      <p>
        <strong>Is:</strong> a local company brain that compiles evidence-quoted knowledge you
        approve, then serves it over MCP to Claude Desktop, Codex, Grok Bots, and other hosts.
      </p>
      <p>
        <strong>Isn’t:</strong> a chatbot, a “talk to Knowlith” product, or a cloud conversation API.
        Your hosts keep the chat UI; Knowlith feeds approved context.
      </p>
      <p>
        Prefer the short honesty contract?{' '}
        <Link to="/docs/language-of-trust" className="text-link">
          Language of trust
        </Link>
        .
      </p>

      <div className="docs-cta-strip">
        <p className="t-body" style={{ margin: '0 0 0.75rem' }}>
          Prefer the short version?
        </p>
        <Link to="/waitlist" className="btn btn-primary">
          Waitlist
        </Link>
      </div>
    </DocsShell>
  )
}
