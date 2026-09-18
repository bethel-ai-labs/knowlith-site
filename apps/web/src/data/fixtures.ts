/** Fixture language only — not live product data. */

export type Kind = 'Rule' | 'Process' | 'Business term' | 'AI skill'

export interface ReviewItem {
  id: string
  kind: Kind
  title: string
  claim: string
  statusSentence: string
  sourceHint: string
  quote: string
  consequence: string
}

export const REVIEW_FIXTURES: ReviewItem[] = [
  {
    id: 'fx-1',
    kind: 'Rule',
    title: 'Early-pay discount window',
    claim:
      'Customers who pay within 10 days of invoice receive a 2% discount on the net amount.',
    statusSentence: 'Needs your OK before assistants can use it.',
    sourceHint: 'payment-terms.md',
    quote:
      'Invoices settled within ten (10) calendar days of the invoice date qualify for a two percent (2%) discount on the net amount due.',
    consequence:
      'If you change this, connected AI tools will stop offering the old window until you approve a replacement.',
  },
  {
    id: 'fx-2',
    kind: 'Process',
    title: 'Warranty claim intake',
    claim:
      'Warranty claims open only after the serial number is verified against the shipment register.',
    statusSentence: 'Conflicts with an older draft still in sources.',
    sourceHint: 'warranty-sop.docx',
    quote:
      'Do not open a warranty claim until the serial number is checked against the shipment register.',
    consequence:
      'If you discard this, the conflicting draft stays unapproved and is not live in AI tools.',
  },
  {
    id: 'fx-3',
    kind: 'Business term',
    title: 'Net-30',
    claim: 'Net-30 means payment is due thirty days after the invoice date.',
    statusSentence: 'Ready to confirm — quote matches the file.',
    sourceHint: 'glossary.md',
    quote: 'Net-30: payment is due thirty (30) days after the invoice date.',
    consequence: 'If you confirm this, it becomes available for conversations started from now.',
  },
]

/** Process labels for How it works / docs — ≠ KnowledgePipe hero metaphor. */
export const PIPELINE_STEPS = [
  'Extract',
  'Compile',
  'Evidence gate',
  'Approve',
  'MCP',
] as const

export const STORY_ACTIONS = [
  {
    title: 'Add sources',
    body: 'Point Knowlith at a folder on your machine. PDF, DOCX, XLSX, CSV, Markdown.',
  },
  {
    title: 'Knowlith finds knowledge',
    body: 'Extract and compile propose rules, processes, and terms — each with a quote from the file.',
  },
  {
    title: 'Confirm changes',
    body: 'Nothing is live until you approve it. Conflicts and open questions wait in For review.',
  },
  {
    title: 'AI assistants use it',
    body: 'Claude, Codex, and Grok get approved context through the MCP gateway — not guesses.',
  },
] as const

/** Docs sidebar — matches MARKETING-PIPE-THESIS outline. */
export const DOCS_NAV = [
  { to: '/docs', label: 'What Knowlith is / isn’t', end: true },
  { to: '/docs/pipe', label: 'The pipe' },
  { to: '/docs/claims', label: 'What a claim means' },
  { to: '/docs/scores', label: 'Scores & percentages' },
  { to: '/docs/mcp', label: 'MCP surface' },
  { to: '/docs/activity', label: 'Activity' },
  { to: '/docs/local', label: 'Local data' },
  { to: '/docs/language-of-trust', label: 'Language of trust' },
] as const
