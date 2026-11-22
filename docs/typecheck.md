# Typecheck

`tsc --noEmit` over each document's generated output: routes, types, client, rpc, the seven hooks files and the
template (with its handler stubs filled by `scripts/fill-handler-stubs.mjs`). The tsconfig is the repository's
(`strict`, `exactOptionalPropertyTypes`, `noUncheckedIndexedAccess`). There is no CI: the daily routine and full runs
update this file.

Generated with hono-takibi 0.32.6.

| App | Errors | Where | Issue |
| --- | --- | --- | --- |
| [train-travel](../apps/train-travel) | 0 | | |
| [memos](../apps/memos) | 0 | | |
| [knock](../apps/knock) · api | 96 | `rpc.ts`, `hooks/*` (TS2345: `undefined` passed where path params are required) | investigating |
| [knock](../apps/knock) · mapi | 168 | `rpc.ts`, `hooks/*` (TS2339: `$delete` missing on the client type of `/v1/variables/:key`) | investigating |
| [github](../apps/github) | not checked | `tsc` was killed for lack of memory (15 GB) | |
