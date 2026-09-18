import { DocsShell } from '../../components/DocsShell'
import { DocCallout } from '../../components/DocCallout'
import { EvidenceQuote } from '../../components/EvidenceQuote'
import { Stamp, AwaitBadge, ConflictBadge, ConfirmedBadge } from '../../components/Stamp'

export function LanguageOfTrustPage() {
  return (
    <DocsShell title="What our words mean">
      <DocCallout variant="honesty">
        If a screen cannot point at a row, it must say less.
      </DocCallout>

      <p>
        This page is the honesty contract for marketing and the product UI. No vanity percentages
        without a defined numerator and denominator from the product.
      </p>

      <h2 className="t-title-sm">Approved</h2>
      <p>
        A person confirmed the claim. The evidence quote is in the file. The claim may be offered to
        connected AI tools through the MCP gateway.
      </p>
      <p>
        <Stamp /> means official / approved in the stamp metaphor.
      </p>

      <h2 className="t-title-sm">Needs your OK</h2>
      <p>
        Something waits in For review — a new proposal, a conflict, or an open question. It is not
        live in AI tools until you decide.
      </p>
      <p>
        <AwaitBadge /> marks that wait state.
      </p>

      <h2 className="t-title-sm">Conflict</h2>
      <p>
        Two claims disagree, or a draft fights a signed policy. Knowlith holds them back until you
        choose.
      </p>
      <p>
        <ConflictBadge /> — quiet red, not a badge festival.
      </p>

      <h2 className="t-title-sm">Confirmed / live for AI</h2>
      <p>
        After you confirm: <ConfirmedBadge />. Copy in the product:{' '}
        <em>Effective for conversations started from now.</em> We do not show “Claude ✓ updated”.
      </p>

      <h2 className="t-title-sm">Still reading</h2>
      <p>
        Sources are being extracted or compiled. Status sentences stay plain — not fake progress
        percentages.
      </p>

      <h2 className="t-title-sm">Evidence quote (fixture)</h2>
      <EvidenceQuote
        quote="Invoices settled within ten (10) calendar days of the invoice date qualify for a two percent (2%) discount on the net amount due."
        sourceHint="payment-terms.md"
      />

      <h2 className="t-title-sm">History reports reads</h2>
      <p>
        Activity shows what was <strong>read</strong> — by which tool, which approved files. It does
        not explain why the model phrased an answer.
      </p>

      <h2 className="t-title-sm">Effective for conversations from now</h2>
      <p>
        Confirming a claim updates what new conversations can receive. It is not a silent tick that
        every open chat already “knows” the change.
      </p>

      <h2 className="t-title-sm">Coverage = offered vs read</h2>
      <p>
        Coverage compares the finite set of approved knowledge that was <em>offered</em> to a tool
        with what that tool actually <em>read</em>. Wording like “had access but did not use” comes
        from that check — not from inventing a confidence score.
      </p>
      <DocCallout variant="do-not">
        Never show a vanity % without a defined numerator/denominator from the product.
      </DocCallout>

      <h2 className="t-title-sm">Confidence in Simple mode</h2>
      <p>
        Confidence is <strong>words</strong>, not false precision like <code>0.83</code>. Language
        bands beat theatre.
      </p>
    </DocsShell>
  )
}
