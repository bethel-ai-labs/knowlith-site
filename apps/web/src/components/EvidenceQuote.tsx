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
          <span className="t-caption">Open original</span>
        )}
      </figcaption>
    </figure>
  )
}
