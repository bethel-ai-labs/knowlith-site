import type { Kind } from '../data/fixtures'

export function KindChip({ kind }: { kind: Kind }) {
  return <span className="kind-chip">{kind}</span>
}
