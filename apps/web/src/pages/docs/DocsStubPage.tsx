import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { DocsShell } from '../../components/DocsShell'
import { DocCallout } from '../../components/DocCallout'
import { PipelineStep } from '../../components/PipelineStep'

const stubs: Record<string, { title: string; body: ReactNode }> = {
  pipe: {
    title: 'The pipe',
    body: (
      <>
        <p>
          Folder → extract → compile → evidence gate → approve → MCP → agents drink. We don’t host
          the conversation. We feed the context.
        </p>
        <PipelineStep />
        <ul>
          <li>
            <strong>Extract</strong> — deterministic; same bytes, same offsets.
          </li>
          <li>
            <strong>Compile</strong> — proposes rules, processes, terms — each with a sentence from
            the file.
          </li>
          <li>
            <strong>Evidence gate</strong> — a quote not in the file is refused.
          </li>
          <li>
            <strong>Approve</strong> — duplicates, conflicts, and open questions wait for you.
          </li>
          <li>
            <strong>MCP</strong> — approved context to connected hosts (Claude / Codex / Grok /
            Cursor).
          </li>
        </ul>
        <DocCallout variant="info">
          Graphiti (knowledge graph + embeddings) is post-approve / later enrichment — not claimed as
          shipped core today.
        </DocCallout>
      </>
    ),
  },
  claims: {
    title: 'What a claim means',
    body: (
      <>
        <p>
          A claim is a proposed fact with an evidence quote. The quote must be in the file — exactly
          as written. Until you approve, tools see <strong>subjects</strong> — not answers.
        </p>
        <ul>
          <li>
            <strong>Needs your OK</strong> — waiting in For review; not live in AI tools.
          </li>
          <li>
            <strong>Approved / Confirmed</strong> — may be offered through MCP; effective for
            conversations started from now.
          </li>
          <li>
            <strong>Conflict</strong> — held back until you choose.
          </li>
        </ul>
        <DocCallout variant="honesty">
          Softening the evidence gate is forbidden. Simplifying chrome is allowed.
        </DocCallout>
        <p>
          <Link to="/for-review" className="text-link">
            Open the For review metaphor
          </Link>
          {' · '}
          <Link to="/docs/language-of-trust" className="text-link">
            Language of trust
          </Link>
        </p>
      </>
    ),
  },
  scores: {
    title: 'Scores & percentages',
    body: (
      <>
        <p>
          Marketing and Simple mode only use labels the product actually shows. No invented metrics.
          No vanity percentages as precision theatre.
        </p>
        <ul>
          <li>
            <strong>Coverage</strong> — offered vs read over the finite approved set. Wording like
            “had access but did not use” comes from that check.
          </li>
          <li>
            <strong>Confidence</strong> — <em>words</em> in Simple mode, not false precision like{' '}
            <code>0.83</code>.
          </li>
        </ul>
        <DocCallout variant="do-not">
          Never show a vanity % without a defined numerator/denominator from the product.
        </DocCallout>
      </>
    ),
  },
  mcp: {
    title: 'MCP surface',
    body: (
      <>
        <p>
          Knowlith connects as an MCP knowledge provider. Marketing documents only these tools — we
          never invent others on this site:
        </p>
        <ul>
          <li>
            <code>get_task_context</code>
          </li>
          <li>
            <code>lookup_value</code>
          </li>
          <li>
            <code>check_coverage</code>
          </li>
        </ul>
        <p>
          More may exist in product docs; this page does not invent tools or “Claude ✓ updated”
          acknowledgements.
        </p>
        <DocCallout variant="do-not">
          Do not invent acknowledgements the gateway cannot check. No “Claude ✓ updated”.
        </DocCallout>
      </>
    ),
  },
  activity: {
    title: 'Activity',
    body: (
      <>
        <p>
          Activity (History) reports what was <strong>read</strong> — by which tool, which approved
          files. It does not explain why the model phrased an answer.
        </p>
        <DocCallout variant="honesty">
          Activity = reads, never model rationale or vibe explanations.
        </DocCallout>
      </>
    ),
  },
  local: {
    title: 'Local data',
    body: (
      <>
        <p>
          Approved knowledge lives under <code className="t-mono">~/Knowlith</code> on your machine.
          No cloud company-brain claims on this marketing site.
        </p>
        <pre
          className="t-mono"
          style={{
            background: 'var(--web-paper-2)',
            padding: '1rem',
            borderRadius: '6px',
            overflow: 'auto',
            border: '1px solid var(--web-rule)',
          }}
        >
          {`# macOS and Linux
curl -fsSL https://raw.githubusercontent.com/bethel-ai-labs/knowlith/main/install.sh | sh

# Windows
irm https://raw.githubusercontent.com/bethel-ai-labs/knowlith/main/install.ps1 | iex`}
        </pre>
        <p>
          Product binaries and releases:{' '}
          <a
            href="https://github.com/bethel-ai-labs/knowlith"
            className="text-link"
            target="_blank"
            rel="noreferrer"
          >
            bethel-ai-labs/knowlith
          </a>
          .
        </p>
      </>
    ),
  },
}

export function DocsStubPage({ slug }: { slug: string }) {
  const page = stubs[slug]
  if (!page) {
    return (
      <DocsShell title="Not found">
        <p>
          This docs page is not defined yet.{' '}
          <Link to="/docs" className="text-link">
            Back to docs
          </Link>
        </p>
      </DocsShell>
    )
  }
  return <DocsShell title={page.title}>{page.body}</DocsShell>
}
