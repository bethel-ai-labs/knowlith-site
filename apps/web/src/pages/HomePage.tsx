import { Link } from 'react-router-dom'
import { ThesisHero } from '../components/ThesisHero'
import { KnowledgePipe } from '../components/KnowledgePipe'
import { ClaimQuoteSplit } from '../components/ClaimQuoteSplit'
import { Stamp, AwaitBadge, ConflictBadge, ConfirmedBadge } from '../components/Stamp'
import { REVIEW_FIXTURES } from '../data/fixtures'

const sample = REVIEW_FIXTURES[0]

export function HomePage() {
  return (
    <>
      <ThesisHero />

      <section className="band">
        <div className="container prose-width">
          <p className="t-label" style={{ marginBottom: '0.75rem' }}>
            The leak
          </p>
          <h2 className="t-title-lg" style={{ margin: '0 0 0.75rem' }}>
            Your context leaks every time you switch tools
          </h2>
          <p className="t-body muted" style={{ margin: 0 }}>
            Chat history grows. Folders get re-uploaded. A new model ships and you prepare the firm
            again. Fluent assistants stay empty about your rules, prices, and decisions.
          </p>
          <ul className="t-body muted home-bullets">
            <li>Chat history is not company knowledge</li>
            <li>The re-upload treadmill</li>
            <li>Provider hop means start from zero</li>
          </ul>
        </div>
      </section>

      <section className="band">
        <div className="container">
          <div className="prose-width" style={{ marginBottom: '1.25rem' }}>
            <p className="t-label" style={{ marginBottom: '0.75rem' }}>
              The pipe
            </p>
            <h2 className="t-title-lg" style={{ margin: '0 0 0.75rem' }}>
              One brain. You approve. Every agent drinks after.
            </h2>
            <p className="t-body muted" style={{ margin: 0 }}>
              Folders on your machine → extract → compile with quotes from the file → you approve →
              MCP serves approved knowledge into the AI tools you already use. We don’t host the
              conversation. We feed the context.
            </p>
            <p className="t-body-sm muted" style={{ margin: '0.75rem 0 0' }}>
              Folder → Evidence gate → Your approve → MCP into your tools
            </p>
          </div>
          <KnowledgePipe />
          <div style={{ marginTop: '1.75rem' }}>
            <p className="t-label" style={{ marginBottom: '0.75rem' }}>
              Example review (not live)
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
            <div style={{ marginTop: '1.25rem' }}>
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
              <p className="t-body-sm muted stamp-legend-glossary" style={{ margin: '0.85rem 0 0' }}>
                Approved = live for agents · Needs your OK = blocked · Conflict = choose · Confirmed
                = after you stamp
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band home-waitlist-strip" aria-label="Waitlist">
        <div className="container prose-width home-waitlist-strip-inner">
          <p className="t-body" style={{ margin: 0 }}>
            Ready when you are — founding seats only.
          </p>
          <Link to="/waitlist" className="btn btn-primary">
            Join the free waitlist
          </Link>
        </div>
      </section>

      <section className="band">
        <div className="container prose-width home-honesty">
          <p className="t-label" style={{ marginBottom: '0.75rem' }}>
            Honesty
          </p>
          <h2 className="t-title-lg" style={{ margin: '0 0 0.75rem' }}>
            Language of trust
          </h2>
          <p className="t-body muted" style={{ margin: '0 0 0.75rem' }}>
            We don’t claim “AI that understands your business.” If the quote isn’t in the file, it
            doesn’t enter the pipe. Until you approve, tools see subjects — not answers. Activity
            shows what was read — not why a model phrased a reply.
          </p>
          <p className="t-body-sm" style={{ margin: '0 0 0.75rem' }}>
            Not a chatbot. Not “talk to Knowlith.” Not a cloud conversation API.
          </p>
          <p className="t-body-sm" style={{ margin: 0 }}>
            <Link to="/docs/language-of-trust" className="text-link">
              Read the language of trust
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}
