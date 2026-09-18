import { Link } from 'react-router-dom'
import { KnowledgePipe } from '../components/KnowledgePipe'
import { ClaimQuoteSplit } from '../components/ClaimQuoteSplit'
import { PipelineStep } from '../components/PipelineStep'
import { Stamp, AwaitBadge, ConflictBadge, ConfirmedBadge } from '../components/Stamp'
import { DocCallout } from '../components/DocCallout'
import { REVIEW_FIXTURES } from '../data/fixtures'

const sample = REVIEW_FIXTURES[0]

export function ProductPage() {
  return (
    <div className="container" style={{ paddingBottom: '3rem' }}>
      <header style={{ padding: '3rem 0 1.5rem' }}>
        <p className="t-label" style={{ marginBottom: '0.75rem' }}>
          Product
        </p>
        <h1 className="t-display-md" style={{ margin: '0 0 1rem', maxWidth: '24ch' }}>
          A company brain your tools can drink from
        </h1>
        <p className="t-body-lg muted" style={{ margin: 0, maxWidth: '40rem' }}>
          Knowlith compiles knowledge from folders on your computer and serves only what you
          approved — over MCP — to the agents you already run.
        </p>
      </header>

      <KnowledgePipe />

      <section className="chapter">
        <h2 className="t-title-lg">Local by default</h2>
        <p className="t-body muted">
          Your documents stay on your machine. Approved knowledge lives under{' '}
          <code className="t-mono">~/Knowlith</code>. No Knowlith chat thread. No “Ask Knowlith.”
        </p>
      </section>

      <section className="chapter">
        <h2 className="t-title-lg">Evidence gate, then you decide</h2>
        <p className="t-body muted" style={{ marginBottom: '1.25rem' }}>
          Claims carry the sentence they came from. A quote that is not in the file is refused. The
          review queue is yours — undecided subjects are never silently answered.
        </p>
        <ClaimQuoteSplit
          kind={sample.kind}
          title={sample.title}
          claim={sample.claim}
          statusSentence={sample.statusSentence}
          consequence={sample.consequence}
          quote={sample.quote}
          sourceHint={sample.sourceHint}
        />
        <div style={{ marginTop: '1.5rem' }}>
          <p className="t-label" style={{ marginBottom: '0.75rem' }}>
            Stamp legend
          </p>
          <div className="stamp-legend">
            <span className="stamp-legend-item">
              <Stamp /> Approved / official
            </span>
            <span className="stamp-legend-item">
              <AwaitBadge /> Needs your OK
            </span>
            <span className="stamp-legend-item">
              <ConflictBadge /> Conflict
            </span>
            <span className="stamp-legend-item">
              <ConfirmedBadge /> Confirmed / live for AI
            </span>
          </div>
        </div>
      </section>

      <section className="chapter">
        <h2 className="t-title-lg">Knowledge graph after approve</h2>
        <p className="t-body muted">
          After you approve, the roadmap is Lake + Graphiti (knowledge graph + embeddings) so
          approved objects connect richer for retrieval. Graphiti is post-approve / later — not
          claimed as shipped in this marketing pass. What ships first is the pipe: extract →
          evidence → approve → MCP.
        </p>
        <DocCallout variant="honesty" title="Honest roadmap">
          Graphiti enrichment sits after your approve — later. Do not treat the graph as core product
          shipping today.
        </DocCallout>
      </section>

      <section className="chapter">
        <h2 className="t-title-lg">Context for Claude, Codex, Grok Bots</h2>
        <p className="t-body muted" style={{ marginBottom: '1.25rem' }}>
          Connect as an MCP knowledge provider. Your hosts drink approved context; Knowlith does not
          replace the chat UI.
        </p>
        <p className="t-body-sm muted" style={{ marginBottom: '1rem' }}>
          Process labels (not the hero metaphor):
        </p>
        <PipelineStep />
        <p className="t-body-sm" style={{ marginTop: '1.5rem' }}>
          <Link to="/waitlist" className="btn btn-primary">
            Join the free waitlist
          </Link>
        </p>
      </section>
    </div>
  )
}
