import { PIPELINE_STEPS } from '../data/fixtures'

export function PipelineStep({ steps = PIPELINE_STEPS }: { steps?: readonly string[] }) {
  return (
    <div className="pipeline" role="list" aria-label="Knowlith pipeline">
      {steps.map((label, i) => (
        <div key={label} style={{ display: 'contents' }}>
          {i > 0 ? (
            <span className="pipeline-arrow" aria-hidden="true">
              →
            </span>
          ) : null}
          <div className="pipeline-step" role="listitem">
            <div className="pipeline-step-num">Step {i + 1}</div>
            <div className="pipeline-step-label">{label}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
