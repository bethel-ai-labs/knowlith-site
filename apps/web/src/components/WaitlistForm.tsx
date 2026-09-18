import { useState, type FormEvent } from 'react'

/**
 * Waitlist signup.
 * When VITE_BUTTONDOWN_FORM_ACTION is set (Buttondown embed-subscribe URL),
 * submits a real POST. Otherwise shows a local success mock — no backend,
 * emails are not stored in the repo.
 */
const BUTTONDOWN_ACTION = import.meta.env.VITE_BUTTONDOWN_FORM_ACTION as
  | string
  | undefined

function isValidEmail(value: string): boolean {
  const trimmed = value.trim()
  if (!trimmed) return false
  // Practical client check; provider validates further when wired.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)
}

export function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)

    const trimmed = email.trim()
    if (!isValidEmail(trimmed)) {
      setError('Enter a valid email address.')
      return
    }

    setSubmitting(true)
    try {
      if (BUTTONDOWN_ACTION) {
        // Real POST when Petar wires Buttondown (embed-subscribe action URL).
        const body = new FormData()
        body.append('email', trimmed)
        await fetch(BUTTONDOWN_ACTION, {
          method: 'POST',
          body,
          mode: 'no-cors',
        })
      }
      // Else: UI mock only — nothing is sent until a provider is chosen.
      setSuccess(true)
    } catch {
      setError('Something went wrong. Try again in a moment.')
    } finally {
      setSubmitting(false)
    }
  }

  if (success) {
    return (
      <div className="waitlist-success" role="status">
        <p className="t-body" style={{ margin: 0 }}>
          You’re on the list. We’ll write when founding access opens.
        </p>
      </div>
    )
  }

  return (
    <form
      className="waitlist-form"
      onSubmit={handleSubmit}
      noValidate
      // action={BUTTONDOWN_ACTION} — reserved for native Buttondown POST if preferred later
    >
      <div className="waitlist-form-row">
        <label className="visually-hidden" htmlFor="waitlist-email">
          Email
        </label>
        <input
          id="waitlist-email"
          className="waitlist-input"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (error) setError(null)
          }}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? 'waitlist-email-error' : undefined}
          disabled={submitting}
          required
        />
        <button className="btn btn-primary" type="submit" disabled={submitting}>
          {submitting ? 'Joining…' : 'Join the waitlist'}
        </button>
      </div>
      {error ? (
        <p id="waitlist-email-error" className="waitlist-error" role="alert">
          {error}
        </p>
      ) : null}
    </form>
  )
}
