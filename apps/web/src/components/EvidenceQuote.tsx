interface Props {
  quote: string
  sourceHint?: string
  onOpenOriginal?: () => void
}

export function EvidenceQuote({ quote, sourceHint, onOpenOriginal }: Props) {
  return (
    <figure className="evidence-quote">
      <div className="quote-mark" aria-hidden="true">
        “
      </div>
      <blockquote className="t-quote">{quote}</blockquote>
      <figcaption className="evidence-quote-meta">
        <span className="t-caption">Exactly as written in the document</span>
        {sourceHint ? <span className="t-mono faint">{sourceHint}</span> : null}
        {onOpenOriginal ? (
          <button type="button" className="btn btn-ghost" onClick={onOpenOriginal}>
            Open original
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-ghost open-original-ghost"
            disabled
            aria-disabled="true"
            title="Opens in the product — not on this marketing page"
          >
            Open original
          </button>
        )}
      </figcaption>
    </figure>
  )
}
