import { ReviewQueueMock } from '../components/ReviewQueueMock'
import { DocCallout } from '../components/DocCallout'

export function ForReviewPage() {
  return (
    <div className="container" style={{ padding: '2.5rem 0 4rem' }}>
      <header style={{ marginBottom: '1.5rem', maxWidth: '40rem' }}>
        <p className="t-label" style={{ marginBottom: '0.75rem' }}>
          Metaphor
        </p>
        <h1 className="t-display-md" style={{ margin: '0 0 0.75rem' }}>
          For review
        </h1>
        <p className="t-body muted" style={{ margin: 0 }}>
          Non-functional illustration of the owner approve flow. Buttons do not talk to a daemon —
          they only show the confirm copy locked in the foundation.
        </p>
      </header>

      <DocCallout variant="honesty">
        After Confirm: “Effective for conversations started from now.” Unapproved knowledge is never
        silently live. No graph on this screen.
      </DocCallout>

      <ReviewQueueMock />
    </div>
  )
}
