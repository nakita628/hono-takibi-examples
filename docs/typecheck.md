# Typecheck

`tsc --noEmit` over each document's generated output: routes, types, client, rpc, the seven hooks files and the
template (with its handler stubs filled by `scripts/fill-handler-stubs.mjs`). The tsconfig is the repository's
(`strict`, `exactOptionalPropertyTypes`, `noUncheckedIndexedAccess`). There is no CI: the daily routine and full runs
update this file.

Generated with hono-takibi 0.32.6, except the apps added on 2026-11-23 and later, which were generated with 0.33.1.

| App | Errors | Where | Issue |
| --- | --- | --- | --- |
| [train-travel](../apps/train-travel) | 0 | | |
| [memos](../apps/memos) | 0 | | |
| [unity-catalog](../apps/unity-catalog) | 0 | | |
| [open-banking-uk-aisp](../apps/open-banking-uk-aisp) | 0 | | |
| [openfeature-ofrep](../apps/openfeature-ofrep) | 1 | `routes.ts` (TS2345: `contentMediaType` + `contentSchema` on a string is emitted as `z.string().pipe(<object schema>)`) | draft: [issue-drafts/2026-11-23-content-schema-pipe-does-not-typecheck.md](../issue-drafts/2026-11-23-content-schema-pipe-does-not-typecheck.md) |
| [ethereum-beacon-api](../apps/ethereum-beacon-api) | 19 (not committed) | `routes.ts` (TS2304: schema names built from JSON-pointer `$ref`s are never declared); unchanged with 0.33.1 | [nakita628/hono-takibi#499](https://github.com/nakita628/hono-takibi/issues/499) |
| [knock](../apps/knock) · api | 96 | `rpc.ts`, `hooks/*` (TS2345: `undefined` passed where path params are required) | investigating |
| [knock](../apps/knock) · mapi | 168 | `rpc.ts`, `hooks/*` (TS2339: `$delete` missing on the client type of `/v1/variables/:key`) | investigating |
| [github](../apps/github) | not checked | `tsc` was killed for lack of memory (15 GB) | |
