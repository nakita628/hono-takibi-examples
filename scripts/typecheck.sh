#!/usr/bin/env bash
# Typecheck one document's output with the app's tsconfig and record the result in apps/<app>/generated.json.
#
#   scripts/typecheck.sh <app> [<config>]        (<config> defaults to hono-takibi.config.ts)
#
# TypeScript 7's tsc. A document whose routes.ts is over 3 MB needs more memory and time, and should run on
# its own: TC_MEM=12GiB TC_TIMEOUT=900 scripts/typecheck.sh <app> [<config>]
# Then write the cause of any errors with `node scripts/typecheck.mjs note`, and rewrite docs/typecheck.md
# with `node scripts/typecheck.mjs write`.
set -uo pipefail

app="${1:?usage: scripts/typecheck.sh <app> [<config>]}"
cfg="${2:-hono-takibi.config.ts}"
root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$root/apps/$app" || exit 1
routes="$(python3 -I -c "import re,sys; m=re.search(r\"output:\s*'([^']+)'\", open(sys.argv[1]).read()); print(m.group(1) if m else '')" "$cfg")"
[ -n "$routes" ] || { echo "error: no output in apps/$app/$cfg" >&2; exit 1; }
unit="$(dirname "$routes")"

tsconfig=".typecheck-$$.json"
log="$(mktemp)"
trap 'rm -f "$tsconfig" "$log"' EXIT
printf '{ "extends": "./tsconfig.json", "include": ["%s/**/*.ts"] }\n' "${unit#./}" > "$tsconfig"
GOMEMLIMIT="${TC_MEM:-5GiB}" timeout "${TC_TIMEOUT:-1500}" node_modules/.bin/tsc -p "$tsconfig" --noEmit > "$log" 2>&1
code=$?
node "$root/scripts/typecheck.mjs" record "$app" "$cfg" "$code" "$log"
