/** Hero metaphor: approved reservoir → stamp seal → pipe → agent ports. ≠ PipelineStep. */

const DEFAULT_PORTS = ['Claude', 'Codex', 'Grok'] as const

export function KnowledgePipe({
  ports = DEFAULT_PORTS,
  caption = 'Approved knowledge only. Agents drink after you stamp — Knowlith is not the chat.',
}: {
  ports?: readonly string[]
  caption?: string
}) {
  return (
    <div className="knowledge-pipe" role="img" aria-label="Approved knowledge reservoir sealed into a pipe that feeds Claude, Codex, and Grok over MCP">
      <div className="kp-reservoir">
        <span className="t-label kp-reservoir-label">Approved reservoir</span>
        <div className="kp-reservoir-body">
          <strong>Company brain</strong>
          <span className="t-body-sm muted">Evidence-quoted knowledge you confirmed</span>
        </div>
      </div>

      <div className="kp-seal">
        <span className="t-label kp-seal-label">Seal</span>
        <span className="stamp">Approved</span>
      </div>

      <div className="kp-conduit" aria-hidden="true">
        <span className="t-label">Pipe</span>
        <span className="kp-pipe" />
        <span className="t-caption faint">MCP</span>
      </div>

      <div className="kp-seal" aria-hidden="true">
        <span className="t-label kp-seal-label">Drink</span>
        <span className="t-body-sm" style={{ color: 'var(--web-stamp)', fontWeight: 650 }}>
          →
        </span>
      </div>

      <div className="kp-ports">
        <span className="t-label kp-ports-label">Agent ports</span>
        <ul className="kp-ports-list">
          {ports.map((name) => (
            <li key={name} className="kp-port">
              {name}
            </li>
          ))}
        </ul>
      </div>

      {caption ? (
        <p className="kp-caption t-caption muted">{caption}</p>
      ) : null}
    </div>
  )
}
