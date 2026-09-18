import { DocCallout } from '../components/DocCallout'
import { WaitlistForm } from '../components/WaitlistForm'
import { KnowledgePipe } from '../components/KnowledgePipe'

export function WaitlistPage() {
  return (
    <>
      <section className="thesis-hero hero-paper">
        <div className="container" style={{ position: 'relative' }}>
          <p className="t-label" style={{ marginBottom: '1rem' }}>
            Founding waitlist
          </p>
          <h1 className="t-display-xl">The pipe of knowledge all your agents drink from.</h1>
          <p className="lead t-body-lg">
            Free founding waitlist. Local company brain → you approve → MCP into Claude, Codex, Grok
            Bots. Not a chat app — context for the AI you already use.
          </p>
          <div className="thesis-ctas">
            <a href="#waitlist" className="btn btn-primary">
              Join the free waitlist
            </a>
          </div>
          <p className="thesis-foot">
            Early bird: 50% off lifetime if you subscribe when we open. No fake ship date.
          </p>
          <KnowledgePipe />
        </div>
      </section>

      <section className="band">
        <div className="container prose-width">
          <p className="t-label" style={{ marginBottom: '0.75rem' }}>
            Pain
          </p>
          <h2 className="t-title-lg" style={{ margin: '0 0 0.75rem' }}>
            The re-upload treadmill
          </h2>
          <p className="t-body muted" style={{ margin: '0 0 0.75rem' }}>
            You don’t need another chatbot. You need durable context your existing AI tools can
            read.
          </p>
          <p className="t-body muted" style={{ margin: '0 0 1rem' }}>
            You dump docs into ChatGPT. History grows. Files change. You hop to Claude. Then Cursor.
            Every new model means prepare your company again — paste folders, chat-with-PDF, hope it
            remembers last week’s policy.
          </p>
          <ul className="t-body muted waitlist-bullets">
            <li>Chat history is not company knowledge</li>
            <li>Drafts sit next to signed rules; the model picks a fragment</li>
            <li>Switching providers starts you from zero</li>
          </ul>
        </div>
      </section>

      <section className="band">
        <div className="container prose-width">
          <p className="t-label" style={{ marginBottom: '0.75rem' }}>
            The pipe
          </p>
          <h2 className="t-title-lg" style={{ margin: '0 0 0.75rem' }}>
            Company brain → MCP → your tools
          </h2>
          <p className="t-body muted" style={{ margin: '0 0 1rem' }}>
            Knowlith is a local company brain on your machine (
            <code className="t-mono">~/Knowlith</code>). We don’t host conversations. We compile
            approved knowledge and serve it over MCP so Claude / Codex / Cursor / Grok Bots stop
            guessing about your firm. You grow and edit the brain — your job is context engineer.
          </p>
          <ul className="t-body muted waitlist-bullets">
            <li>Point at a folder → extract → compile with quotes from the file</li>
            <li>Review queue: you decide what is true</li>
            <li>
              Connect Claude, Codex, Cursor, Grok Bots via MCP — they get approved knowledge only
            </li>
            <li>
              Survives the next model: knowledge stays yours, not locked in last week’s chat
            </li>
          </ul>
        </div>
      </section>

      <section className="band">
        <div className="container prose-width">
          <p className="t-label" style={{ marginBottom: '0.75rem' }}>
            Honesty
          </p>
          <h2 className="t-title-lg" style={{ margin: '0 0 0.75rem' }}>
            Language of trust
          </h2>
          <p className="t-body muted" style={{ margin: '0 0 0.75rem' }}>
            We don’t claim “AI that understands your business.”
          </p>
          <p className="t-body muted" style={{ margin: '0 0 1rem' }}>
            We are not “AI you talk to.” We are context for the AI you already use.
          </p>
          <DocCallout variant="honesty" title="Claims we make">
            <ul className="waitlist-callout-list">
              <li>
                If the quote isn’t in your file, it doesn’t enter the brain (evidence gate)
              </li>
              <li>Until you approve, tools see subjects — not answers</li>
              <li>
                Activity shows what was <em>read</em> by which tool — not why the model phrased an
                answer
              </li>
            </ul>
          </DocCallout>
          <DocCallout variant="do-not" title="Claims we refuse">
            “trusted answers” theater, fake certifications, inventing what isn’t in the file — and
            never “Chat with Knowlith” or “Ask Knowlith”
          </DocCallout>
        </div>
      </section>

      <section className="band" id="waitlist">
        <div className="container prose-width">
          <p className="t-label" style={{ marginBottom: '0.75rem' }}>
            Waitlist
          </p>
          <h2 className="t-title-lg" style={{ margin: '0 0 0.75rem' }}>
            Join the founding waitlist
          </h2>
          <p className="t-body muted" style={{ margin: '0 0 0.5rem' }}>
            Free to join. When we open subscriptions, founding members get{' '}
            <strong>50% off lifetime</strong>.
          </p>
          <p className="t-body-sm faint" style={{ margin: '0 0 1.25rem' }}>
            This is a waitlist, not a ship date. We’ll email you when it’s ready — no spam theater.
          </p>
          <WaitlistForm />
        </div>
      </section>
    </>
  )
}
