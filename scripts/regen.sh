#!/usr/bin/env bash
# Regenerate one document from scratch, fill the handler stubs, and record what it was built from.
#
#   scripts/regen.sh <app> [<config>]        (<config> defaults to hono-takibi.config.ts)
#
# 1. Moves the template (handlers/ and index.ts) aside, because hono-takibi does not move existing handler
#    files when its layout changes.
# 2. Generates. When hono-takibi cannot resolve the host itself (`getaddrinfo ENOTFOUND`, every host but
#    GitHub in this sandbox), it downloads the document with fetch and generates from a temporary copy of the
#    config whose input is the local file (the output is the same for a single-file document).
# 3. Fills the empty handler stubs (scripts/fill-handler-stubs.mjs) and generates again, which formats them.
# 4. Records the sources, the hono-takibi version and the date in apps/<app>/generated.json
#    (scripts/sources.mjs record).
#
# When generation fails, the template is put back (hono-takibi writes nothing when it stops), the error is
# printed, and the sources it failed on are recorded with `failed` (scripts/sources.mjs record --failed), so
# that `scripts/sources.mjs check` waits for the next change. Exit status 1.
# Typecheck afterwards with scripts/typecheck.sh.
set -uo pipefail

app="${1:?usage: scripts/regen.sh <app> [<config>]}"
cfg="${2:-hono-takibi.config.ts}"
root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
dir="$root/apps/$app"
export NODE_USE_ENV_PROXY=1 NODE_NO_WARNINGS=1

cd "$dir" || exit 1
[ -f "$cfg" ] || { echo "error: apps/$app/$cfg does not exist" >&2; exit 1; }
field() { python3 -I -c "import re,sys; m=re.search(sys.argv[2] + r\":\s*'([^']+)'\", open(sys.argv[1]).read()); print(m.group(1) if m else '')" "$cfg" "$1"; }
routes="$(field output)"
input="$(field input)"
[ -n "$routes" ] && [ -n "$input" ] || { echo "error: no input or output in apps/$app/$cfg" >&2; exit 1; }
unit="$(dirname "$routes")"

tmpcfg=""
tmpdir="$(mktemp -d)"
log="$tmpdir/log"
cleanup() { [ -n "$tmpcfg" ] && rm -f "$dir/$tmpcfg"; rm -rf "$tmpdir"; }
trap cleanup EXIT

# Move the template aside; put it back if generation fails.
mkdir -p "$tmpdir/template"
[ -e "$unit/handlers" ] && mv "$unit/handlers" "$tmpdir/template/handlers"
[ -e "$unit/index.ts" ] && mv "$unit/index.ts" "$tmpdir/template/index.ts"
fail() {
  cat "$log" >&2
  rm -rf "${unit:?}/handlers" "${unit:?}/index.ts"
  [ -e "$tmpdir/template/handlers" ] && mv "$tmpdir/template/handlers" "$unit/handlers"
  [ -e "$tmpdir/template/index.ts" ] && mv "$tmpdir/template/index.ts" "$unit/index.ts"
  error="$(grep -v -E '^\s*$|^ERROR$' "$log" | head -1 | sed -E 's/^\s+//' | cut -c1-300)"
  echo "apps/$app/$cfg: generation failed; the previous output is kept" >&2
  (cd "$root" && node scripts/sources.mjs record "$app" "$cfg" --failed "${error:-$1}")
  exit 1
}

use="$cfg"
if ! node_modules/.bin/hono-takibi -c "$use" > "$log" 2>&1; then
  grep -q 'getaddrinfo' "$log" || fail "generation failed"
  ext="$(printf '%s' "$input" | grep -oiE '\.(json|ya?ml)$' | tr 'A-Z' 'a-z')"
  # Node's fetch (through the proxy), as scripts/sources.mjs reads it: some hosts refuse curl (openapi.vercel.sh: 403).
  if ! node --input-type=module -e '
    const [url, file] = process.argv.slice(1)
    const res = await fetch(url, { signal: AbortSignal.timeout(300_000) })
    if (!res.ok) { console.error(`HTTP ${res.status} for ${url}`); process.exit(1) }
    (await import("node:fs")).writeFileSync(file, Buffer.from(await res.arrayBuffer()))
  ' "$input" "$tmpdir/spec${ext:-.json}" 2> "$log"; then
    fail "could not download $input"
  fi
  if [ -z "$ext" ] && ! head -c 200 "$tmpdir/spec.json" | tr -d ' \n\r\t' | cut -c1 | grep -q '{'; then
    mv "$tmpdir/spec.json" "$tmpdir/spec.yaml"
  fi
  spec="$(ls "$tmpdir"/spec.*)"
  tmpcfg=".regen-$$.config.ts"
  python3 -I -c "import sys; s=open(sys.argv[1]).read(); open(sys.argv[2],'w').write(s.replace(sys.argv[3], sys.argv[4], 1))" "$cfg" "$tmpcfg" "$input" "$spec"
  use="$tmpcfg"
  node_modules/.bin/hono-takibi -c "$use" > "$log" 2>&1 || fail "generation failed"
fi
node "$root/scripts/fill-handler-stubs.mjs" "$unit"
node_modules/.bin/hono-takibi -c "$use" > "$log" 2>&1 || fail "generation failed after filling the stubs"
echo "apps/$app/$cfg: generated (${tmpcfg:+from a local copy of }$input)"

cd "$root" && node scripts/sources.mjs record "$app" "$cfg"
