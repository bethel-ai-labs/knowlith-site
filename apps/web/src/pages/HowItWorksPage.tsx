import { Link } from 'react-router-dom'
import { PipelineStep } from '../components/PipelineStep'
import { DocCallout } from '../components/DocCallout'

const STEPS = [
  {
    title: 'Point at a folder',
    body: 'PDF, DOCX, XLSX, CSV, Markdown on your machine. Deterministic extract — same bytes, same offsets.',
  },
  {
    title: 'Compile with evidence',
    body: 'Knowlith proposes rules, processes, and terms — each with the sentence it came from. The evidence gate checks the quote against the file.',
  },
  {
    title: 'You approve',
    body: 'Review duplicates, conflicts, and open questions. Until you approve, AI tools see subjects — not answers.',
  },
  {
    title: 'Agents drink',
    body: 'The MCP gateway serves approved knowledge to Claude Desktop, Codex, Grok Bots, Cursor, and other hosts. Activity records what was read — not why the model answered.',
  },
] as const

export function HowItWorksPage() {
  return (
    <div className="container" style={{ paddingBottom: '3rem' }}>
      <header style={{ padding: '3rem 0 1.5rem', maxWidth: '40rem' }}>
        <p className="t-label" style={{ marginBottom: '0.75rem' }}>
          How it works
        </p>
        <h1 className="t-display-md" style={{ margin: '0 0 0.75rem' }}>
          How the pipe works
        </h1>
        <p className="t-body-lg muted" style={{ margin: 0 }}>
          Four steps. No chat product in the middle.
        </p>
      </header>

      <p className="t-body-sm muted" style={{ marginBottom: '1rem' }}>
        Process labels:
      </p>
      <PipelineStep />

      <div className="how-steps">
        {STEPS.map((step, i) => (
          <article key={step.title} className="how-step">
            <span className="t-label how-step-num">Step {i + 1}</span>
            <h2 className="t-title-sm" style={{ margin: '0 0 0.5rem' }}>
              {step.title}
            </h2>
            <p className="t-body muted" style={{ margin: 0 }}>
              {step.body}
            </p>
          </article>
        ))}
      </div>

      <DocCallout variant="info" title="Later">
        Later: richer graph (Graphiti) on top of approved objects — still after your approve.
      </DocCallout>

      <p style={{ marginTop: '1.75rem' }}>
        <Link to="/waitlist" className="btn btn-primary">
          Join the free waitlist
        </Link>
      </p>
    </div>
  )
}
