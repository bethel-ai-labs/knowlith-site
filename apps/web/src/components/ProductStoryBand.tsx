import { STORY_ACTIONS } from '../data/fixtures'

export function ProductStoryBand() {
  return (
    <section className="band" aria-labelledby="four-actions">
      <div className="container">
        <p className="t-label" id="four-actions" style={{ marginBottom: '1rem' }}>
          Four actions
        </p>
        <div className="story-band-grid">
          {STORY_ACTIONS.map((step, i) => (
            <article key={step.title} className="story-step">
              <span className="t-label story-step-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
