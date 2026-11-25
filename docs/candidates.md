# Candidates

Backlog for the [daily routine](./daily-routine.md). The README table is the source of truth for what has
been added. This file only holds what is still to do and what has been ruled out.

## Pending

One line per document: `name | raw URL | note`. Take them from the top, at most three a day.
Each was checked with `node scripts/probe-spec.mjs`: the first three on 2026-11-22, the rest on 2026-11-25.

- activepieces | https://raw.githubusercontent.com/activepieces/activepieces/main/docs/openapi.json | OpenAPI 3.1.0, 119 operations
- binance-spot | https://raw.githubusercontent.com/binance/binance-api-swagger/master/spot_api.yaml | OpenAPI 3.0.2, 340 operations, 999 KB
- apache-gravitino | https://raw.githubusercontent.com/apache/gravitino/main/docs/open-api/openapi.yaml | Does not parse (`deficient indentation (447:11)`), same cause as `iceberg-rest-catalog`, nakita628/hono-takibi#406. Add it config-only, or generate it once hono-takibi reads that shape
- lakefs | https://raw.githubusercontent.com/treeverse/lakeFS/master/api/swagger.yml | OpenAPI 3.0.0, 130 operations (the file is named swagger.yml, the document is OpenAPI 3)
- ceph-dashboard | https://raw.githubusercontent.com/ceph/ceph/main/src/pybind/mgr/dashboard/openapi.yaml | OpenAPI 3.0.0, 450 operations, 1.1 MB
- typebot-builder | https://raw.githubusercontent.com/baptisteArno/typebot.io/main/apps/docs/openapi/builder.json | OpenAPI 3.1.1, 68 operations, 3.4 MB
- ga4gh-wes | https://raw.githubusercontent.com/ga4gh/workflow-execution-service-schemas/develop/openapi/workflow_execution_service.openapi.yaml | OpenAPI 3.0.0, 8 operations, 2 files
- ga4gh-tes | https://raw.githubusercontent.com/ga4gh/task-execution-schemas/develop/openapi/task_execution_service.openapi.yaml | OpenAPI 3.0.1, 5 operations, 2 files. `WARN`: 1 deep `$ref`, look at the output
- ga4gh-trs | https://raw.githubusercontent.com/ga4gh/tool-registry-service-schemas/develop/openapi/openapi.yaml | OpenAPI 3.0.0, 11 operations, 2 files
- ethereum-keymanager | https://raw.githubusercontent.com/ethereum/keymanager-APIs/master/keymanager-oapi.yaml | OpenAPI 3.1.0, 19 operations, 23 files. `WARN`: 1 deep `$ref`, look at the output
- open-banking-uk-vrp | https://raw.githubusercontent.com/OpenBankingUK/read-write-api-specs/master/dist/openapi/vrp-openapi.yaml | OpenAPI 3.0.0, 9 operations (OBL VRP Profile)
- kserve-open-inference | https://raw.githubusercontent.com/kserve/open-inference-protocol/main/specification/protocol/open_inference_rest.yaml | OpenAPI 3.0.0, 6 operations, no `servers`

## Rejected

Do not investigate these again.

- Swagger 2.0, which hono-takibi does not read by design: Mailchimp Marketing, Slack web API, DocuSign eSignature, Harbor, Argo CD, Gotify, Woodpecker CI, Weaviate, Prometheus Alertmanager, Argo Workflows, Casdoor, OpenFGA, SpiceDB (authzed-go), Sigstore Rekor
- No self-contained OpenAPI 3 document in the vendor's GitHub organisation: Mux, Zitadel, Kestra, Postmark, Plane, Infisical, PostHog, Fastly, Zoom
- External `$ref`s that do not resolve on `raw.githubusercontent.com`: ethereum/builder-specs `builder-oapi.yaml` (the `beacon-apis/` it points into is a git submodule: HTTP 404)
- Not a complete API definition:
  - flowise: `packages/api-documentation/src/yml/swagger.yml` starts at `tags:` and has no `openapi` or `info`
  - ogcapi-features: `core/openapi/ogcapi-features-1.yaml` is a set of building blocks ("is not a valid Openapi API definition")
  - camunda: the `rest-api.yaml` path I tried returns a 90-byte stub
- Already in the README through APIs-guru: rebilly, Open Banking UK Confirmation of Funds (`confirmation-funds-openapi.yaml`)
- Already in the README from the same document: Temporal (`temporalio/api` `openapiv3.yaml`)
- Not official, so outside "official OpenAPI specs": mastodon (abraham/mastodon-openapi), plex (LukeHagar/plex-api-spec)

## Finding more

Refill when fewer than six are pending, about ten at a time.

- Prefer APIs people actually use: well-known SaaS APIs, popular self-hosted projects, standards and foundation projects (Apache, CNCF, OGC, GA4GH, Ethereum).
- The document must be committed in the vendor's or project's own GitHub repository and reachable as `https://raw.githubusercontent.com/<owner>/<repo>/<ref>/<path>`.
- `WebSearch` works for discovery, for example `<name> openapi.yaml github`. `api.github.com` and `github.com` pages are not reachable from the sandbox, but `git ls-remote https://github.com/<owner>/<repo>.git` is.
- Verify each one with `node scripts/probe-spec.mjs <raw URL>` before adding it here. Guessing a path from memory failed for 12 of 30 candidates (404, or a stub file).
