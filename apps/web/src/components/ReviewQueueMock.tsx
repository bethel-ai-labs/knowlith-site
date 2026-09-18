import { useState } from 'react'
import { REVIEW_FIXTURES } from '../data/fixtures'
import { AwaitBadge, ConflictBadge } from './Stamp'
import { KindChip } from './KindChip'
import { ClaimQuoteSplit } from './ClaimQuoteSplit'

export function ReviewQueueMock() {
  const [selectedId, setSelectedId] = useState(REVIEW_FIXTURES[0].id)
  const [confirmedId, setConfirmedId] = useState<string | null>(null)
  const selected = REVIEW_FIXTURES.find((r) => r.id === selectedId) ?? REVIEW_FIXTURES[0]
  const isConfirmed = confirmedId === selected.id

  return (
    <div>
      <div className="review-mock-header">
        <AwaitBadge>{REVIEW_FIXTURES.length} items need you</AwaitBadge>
        <span className="t-caption">Static metaphor — fixture language only</span>
      </div>

      <ul className="review-list" aria-label="For review">
        {REVIEW_FIXTURES.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              className={`review-row${selectedId === item.id ? ' active' : ''}`}
              onClick={() => {
                setSelectedId(item.id)
              }}
            >
              <KindChip kind={item.kind} />
              <div>
                <p className="review-row-title">{item.title}</p>
                <p className="review-row-status">{item.statusSentence}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                {item.id === 'fx-2' ? <ConflictBadge /> : <AwaitBadge />}
                <div className="review-row-source" style={{ marginTop: '0.35rem' }}>
                  {item.sourceHint}
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <div className="review-detail">
        <p className="t-label" style={{ marginBottom: '0.75rem' }}>
          Claim ∥ Quote
        </p>
        <ClaimQuoteSplit
          key={selected.id}
          kind={selected.kind}
          title={selected.title}
          claim={selected.claim}
          statusSentence={
            isConfirmed
              ? 'Confirmed — live for conversations started from now.'
              : selected.statusSentence
          }
          consequence={selected.consequence}
          quote={selected.quote}
          sourceHint={selected.sourceHint}
          confirmed={isConfirmed}
          onConfirm={() => setConfirmedId(selected.id)}
          onSuggest={() => undefined}
          onDiscard={() => {
            setConfirmedId(null)
          }}
        />
      </div>
    </div>
  )
}
