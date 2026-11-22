#!/usr/bin/env bash
# Scaffold apps/<name> for a single OpenAPI document hosted on GitHub.
#
#   scripts/new-app.sh <name> "<API title>" <raw.githubusercontent.com URL> <baseUrl for curl examples>
#
# Writes package.json, tsconfig.json and hono-takibi.config.ts in the same shape as every other
# single-spec app. The comment in the config pins the exact commit the document was taken from
# (resolved with `git ls-remote`, because api.github.com is not reachable from the sandbox).
# Run `bun install` afterwards so bun.lock picks up the new workspace.
set -euo pipefail

if [ "$#" -ne 4 ]; then
  echo "usage: $0 <name> \"<API title>\" <raw.githubusercontent.com URL> <baseUrl>" >&2
  exit 2
fi

name="$1"; title="$2"; input="$3"; base_url="$4"

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
dir="$root/apps/$name"

if ! [[ "$name" =~ ^[a-z0-9]+(-[a-z0-9]+)*$ ]]; then
  echo "error: <name> must be kebab-case (got '$name')" >&2; exit 2
fi
if [ -e "$dir" ]; then
  echo "error: apps/$name already exists" >&2; exit 1
fi
if ! [[ "$input" =~ ^https://raw\.githubusercontent\.com/([^/]+)/([^/]+)/([^/]+)/(.+)$ ]]; then
  echo "error: <URL> must look like https://raw.githubusercontent.com/<owner>/<repo>/<ref>/<path>" >&2; exit 2
fi
owner="${BASH_REMATCH[1]}"; repo="${BASH_REMATCH[2]}"; ref="${BASH_REMATCH[3]}"; path="${BASH_REMATCH[4]}"

# Resolve <ref> (branch or tag) to a commit SHA; peel annotated tags.
sha="$(git ls-remote "https://github.com/$owner/$repo.git" "refs/heads/$ref" "refs/tags/$ref^{}" "refs/tags/$ref" 2>/dev/null | awk 'NR==1{print $1}')"
if [ -z "$sha" ]; then
  echo "error: could not resolve ref '$ref' of $owner/$repo with git ls-remote" >&2; exit 1
fi
pinned="https://github.com/$owner/$repo/blob/$sha/$path"

mkdir -p "$dir"

cat > "$dir/package.json" <<EOF
{
  "name": "@apps/$name",
  "private": true,
  "type": "module",
  "scripts": {
    "generate": "hono-takibi",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@hono/zod-openapi": "catalog:",
    "hono": "catalog:",
    "zod": "catalog:"
  },
  "devDependencies": {
    "@packages/tsconfig": "workspace:*",
    "@types/node": "catalog:",
    "hono-takibi": "catalog:",
    "typescript": "catalog:"
  }
}
EOF

cat > "$dir/tsconfig.json" <<EOF
{
  "extends": "@packages/tsconfig/base.json",
  "compilerOptions": {
    "types": ["node"]
  },
  "include": ["src", "hono-takibi.config.ts"]
}
EOF

cat > "$dir/hono-takibi.config.ts" <<EOF
import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // $title, official OpenAPI spec:
  // $pinned
  input: '$input',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: '$base_url',
  },
})
EOF

echo "created apps/$name"
echo "pinned:  $pinned"
echo "sha:     $sha"
