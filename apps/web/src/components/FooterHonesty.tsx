import { Link } from 'react-router-dom'

export function FooterHonesty() {
  return (
    <footer className="footer-honesty">
      <div className="container">
        <div className="footer-honesty-grid">
          <div>
            <h3>Local only</h3>
            <p>
              Knowlith runs on your computer. The approved copy lives under{' '}
              <code className="t-mono">~/Knowlith</code> — not on a Knowlith server.
            </p>
          </div>
          <div>
            <h3>Approve before AI</h3>
            <p>
              Every claim has a quote. Unapproved knowledge is not live in Claude, Codex, or Grok.
            </p>
          </div>
          <div>
            <h3>Activity is reads</h3>
            <p>
              History reports what was read — not why a model phrased an answer the way it did.
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>Knowlith — pipe of knowledge for your agents</span>
          <span>
            <Link to="/docs/language-of-trust" className="text-link">
              Language of trust
            </Link>
            {' · '}
            <Link to="/how-it-works" className="text-link">
              How it works
            </Link>
            {' · '}
            <Link to="/waitlist" className="text-link">
              Waitlist
            </Link>
            {' · '}
            <a
              className="text-link"
              href="https://github.com/bethel-ai-labs/knowlith"
              rel="noreferrer"
              target="_blank"
            >
              Product repo
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
