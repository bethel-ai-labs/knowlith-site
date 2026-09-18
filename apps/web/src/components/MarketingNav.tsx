import { NavLink } from 'react-router-dom'

export function MarketingNav() {
  return (
    <header className="mnav">
      <div className="container mnav-inner">
        <NavLink to="/" className="mnav-brand" end>
          Knowlith
        </NavLink>
        <nav aria-label="Primary">
          <ul className="mnav-links">
            <li>
              <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : undefined)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/product" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                Product
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/how-it-works"
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                How it works
              </NavLink>
            </li>
            <li>
              <NavLink to="/docs" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                Docs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/waitlist"
                className="btn btn-primary"
                style={{ padding: '0.45rem 0.9rem' }}
              >
                Waitlist
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
