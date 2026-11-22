# Candidates

Backlog for the [daily routine](./daily-routine.md). The README table is the source of truth for what has
been added. This file only holds what is still to do and what has been ruled out.

## Pending

One line per document: `name | raw URL | note`. Take them from the top, at most three a day.
Each was checked with `node scripts/probe-spec.mjs` on 2026-11-22.

- unity-catalog | https://raw.githubusercontent.com/unitycatalog/unitycatalog/main/api/all.yaml | OpenAPI 3.0.0, 56 operations
- open-banking-uk-aisp | https://raw.githubusercontent.com/OpenBankingUK/read-write-api-specs/master/dist/openapi/account-info-openapi.yaml | OpenAPI 3.0.0, 29 operations, 578 KB. Three more in the same directory pass the probe and are separate candidates: `payment-initiation-openapi.yaml` (41 operations), `confirmation-funds-openapi.yaml` (4), `vrp-openapi.yaml` (9)
- openfeature-ofrep | https://raw.githubusercontent.com/open-feature/protocol/main/service/openapi.yaml | OpenAPI 3.1.0, 2 operations
- ga4gh-drs | https://raw.githubusercontent.com/ga4gh/data-repository-service-schemas/develop/openapi/data_repository_service.openapi.yaml | OpenAPI 3.0.3, 9 operations, 51 files through external `$ref`s, probe warns about one deep pointer: check the output by eye
- apache-polaris-management | https://raw.githubusercontent.com/apache/polaris/main/spec/polaris-management-service.yml | OpenAPI 3.1.1, 33 operations
- manticore | https://raw.githubusercontent.com/manticoresoftware/openapi/master/manticore.yml | OpenAPI 3.1.0, 11 operations
- stoat-revolt | https://raw.githubusercontent.com/revoltchat/api/master/OpenAPI.json | OpenAPI 3.0.0, 131 operations (formerly Revolt)
- audiobookshelf | https://raw.githubusercontent.com/advplyr/audiobookshelf/master/docs/openapi.json | OpenAPI 3.0.0, 46 operations
- activepieces | https://raw.githubusercontent.com/activepieces/activepieces/main/docs/openapi.json | OpenAPI 3.1.0, 119 operations
- binance-spot | https://raw.githubusercontent.com/binance/binance-api-swagger/master/spot_api.yaml | OpenAPI 3.0.2, 340 operations, 999 KB
- apache-gravitino | https://raw.githubusercontent.com/apache/gravitino/main/docs/open-api/openapi.yaml | Does not parse (`deficient indentation (447:11)`), same cause as `iceberg-rest-catalog`, see `issue-drafts/2026-11-22-flow-mapping-closing-brace-indent.md`. Add it config-only, or generate it once hono-takibi reads that shape

## Rejected

Do not investigate these again.

- Swagger 2.0, which hono-takibi does not read by design: Mailchimp Marketing, Slack web API, DocuSign eSignature, Harbor, Argo CD, Gotify, Woodpecker CI
- No self-contained OpenAPI 3 document in the vendor's GitHub organisation: Mux, Zitadel, Kestra, Postmark, Plane, Infisical, PostHog, Fastly, Zoom
- Not a complete API definition:
  - flowise: `packages/api-documentation/src/yml/swagger.yml` starts at `tags:` and has no `openapi` or `info`
  - ogcapi-features: `core/openapi/ogcapi-features-1.yaml` is a set of building blocks ("is not a valid Openapi API definition")
  - camunda: the `rest-api.yaml` path I tried returns a 90-byte stub
- Already in the README through APIs-guru: rebilly
- Not official, so outside "official OpenAPI specs": mastodon (abraham/mastodon-openapi), plex (LukeHagar/plex-api-spec)

## Finding more

Refill when fewer than six are pending, about ten at a time.

- Prefer APIs people actually use: well-known SaaS APIs, popular self-hosted projects, standards and foundation projects (Apache, CNCF, OGC, GA4GH, Ethereum).
- The document must be committed in the vendor's or project's own GitHub repository and reachable as `https://raw.githubusercontent.com/<owner>/<repo>/<ref>/<path>`.
- `WebSearch` works for discovery, for example `<name> openapi.yaml github`. `api.github.com` and `github.com` pages are not reachable from the sandbox, but `git ls-remote https://github.com/<owner>/<repo>.git` is.
- Verify each one with `node scripts/probe-spec.mjs <raw URL>` before adding it here. Guessing a path from memory failed for 12 of 30 candidates (404, or a stub file).
