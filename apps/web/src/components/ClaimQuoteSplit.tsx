import { EvidenceQuote } from './EvidenceQuote'
import { AwaitBadge, ConfirmedBadge } from './Stamp'
import { KindChip } from './KindChip'
import type { Kind } from '../data/fixtures'

interface Props {
  kind: Kind
  title: string
  claim: string
  statusSentence: string
  consequence: string
  quote: string
  sourceHint: string
  confirmed?: boolean
  onConfirm?: () => void
  onSuggest?: () => void
  onDiscard?: () => void
}

export function ClaimQuoteSplit({
  kind,
  title,
  claim,
  statusSentence,
  consequence,
  quote,
  sourceHint,
  confirmed = false,
  onConfirm,
  onSuggest,
  onDiscard,
}: Props) {
  return (
    <div className="claim-quote">
      <section className="claim-quote-pane" aria-label="Claim">
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
          <KindChip kind={kind} />
          {confirmed ? <ConfirmedBadge /> : <AwaitBadge />}
        </div>
        <h3 className="t-title-sm" style={{ margin: '0 0 0.5rem' }}>
          {title}
        </h3>
        <p className="t-body" style={{ margin: '0 0 0.5rem' }}>
          {claim}
        </p>
        <p className="t-body-sm muted" style={{ margin: 0 }}>
          {statusSentence}
        </p>
        <div className="claim-quote-consequence">
          <span className="t-label" style={{ display: 'block', marginBottom: '0.35rem' }}>
            If you change this
          </span>
          {consequence}
        </div>
        <div className="claim-quote-actions">
          <button
            type="button"
            className="btn btn-primary"
            onClick={onConfirm}
            disabled={confirmed}
            aria-disabled={confirmed}
          >
            Confirm
          </button>
          <button type="button" className="btn btn-ghost" onClick={onSuggest} disabled={confirmed}>
            Suggest change
          </button>
          <button type="button" className="btn btn-danger" onClick={onDiscard} disabled={confirmed}>
            Discard
          </button>
        </div>
        {confirmed ? (
          <p className="review-confirmed-note">
            Effective for conversations started from now.
            <br />
            <span className="muted">Optional: Try this rule in your AI.</span>
          </p>
        ) : null}
      </section>
      <section className="claim-quote-pane" aria-label="From your documents">
        <p className="t-label" style={{ margin: '0 0 0.75rem' }}>
          From your documents
        </p>
        <EvidenceQuote quote={quote} sourceHint={sourceHint} />
      </section>
    </div>
  )
}
